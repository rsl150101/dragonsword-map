import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { z } from "zod";

import {
  COUNTABLE_TYPES,
  FILTER_DATA,
  RESPAWN_TIMES,
  WEEKLY_RESET_TYPES,
} from "../data/mapFilters";
import { MAP_MARKERS } from "../data/mapMarkers";
import { getLastWeeklyResetTime } from "../utils/timeUtils";
import type { IMarkerData } from "../data/mapMarkers/types";

const markerSchema = z.object({
  id: z.string(),
  type: z.string(),
  label: z.string(),
  description: z.string().optional(),
  isCustom: z.boolean().optional(),
  position: z.tuple([z.number(), z.number()]),
  icon: z.any().optional(),
  color: z.string().optional(),
});

const storageSchema = z.object({
  customMarkers: z.array(markerSchema).optional().default([]),
  selectedFilters: z.array(z.string()).optional().default([]),
  collectedMarkers: z.record(z.string(), z.number()).optional().default({}),
});

export interface ICustomMarkerData extends IMarkerData {
  isCustom: boolean;
}

interface MapState {
  selectedFilters: Set<string>;
  toggleFilter: (id: string) => void;
  isAllVisible: () => boolean;
  setAllFilters: (enable: boolean) => void;
  collectedMarkers: Record<string, number>;
  toggleCollected: (markerId: string) => void;
  toggleAllCollected: (typeId: string) => void;
  getProgress: (type?: string) => { current: number; total: number };
  focusedMarkerId: string | null;
  setFocusedMarkerId: (id: string | null) => void;
  isCollected: (markerId: string, type: string) => boolean;
  setCollectedMarkers: (markers: Record<string, number>) => void;
  refreshCollectedMarkers: () => void;
  customMarkers: ICustomMarkerData[];
  addCustomMarker: (marker: ICustomMarkerData) => void;
  removeCustomMarker: (id: string) => void;
  creatingMarkerPos: [number, number] | null;
  setCreatingMarkerPos: (pos: [number, number] | null) => void;
  resetCustomMarkers: () => void;
  importCustomMarkers: (markers: ICustomMarkerData[]) => void;
}

export const useMapStore = create<MapState>()(
  persist(
    (set, get) => ({
      selectedFilters: new Set(
        FILTER_DATA.flatMap((category) => category.items.map((item) => item.id)),
      ),
      collectedMarkers: {},
      focusedMarkerId: null,
      customMarkers: [],
      creatingMarkerPos: null,

      setCreatingMarkerPos: (pos) => set({ creatingMarkerPos: pos }),

      addCustomMarker: (marker) =>
        set((state) => ({
          customMarkers: [...state.customMarkers, marker],
        })),

      removeCustomMarker: (id) =>
        set((state) => ({
          customMarkers: state.customMarkers.filter((m) => m.id !== id),
        })),

      toggleFilter: (id) =>
        set((state) => {
          const newSet = new Set(state.selectedFilters);
          if (newSet.has(id)) {
            newSet.delete(id);
          } else {
            newSet.add(id);
          }
          return { selectedFilters: newSet };
        }),

      isAllVisible: () => {
        const totalCount = FILTER_DATA.reduce((acc, cur) => acc + cur.items.length, 0);
        return get().selectedFilters.size === totalCount;
      },

      setAllFilters: (enable) =>
        set(() => {
          if (enable) {
            const allIds = FILTER_DATA.flatMap((category) => category.items.map((item) => item.id));
            return { selectedFilters: new Set(allIds) };
          }
          return { selectedFilters: new Set() };
        }),

      toggleCollected: (markerId) =>
        set((state) => {
          const newCollected = { ...state.collectedMarkers };
          const collectedAt = newCollected[markerId];

          const marker = MAP_MARKERS.find((m) => m.id === markerId);

          if (!collectedAt || !marker) {
            newCollected[markerId] = Date.now();
            return { collectedMarkers: newCollected };
          }

          let isExpired = false;

          if (WEEKLY_RESET_TYPES.has(marker.type)) {
            const lastResetTime = getLastWeeklyResetTime();
            if (collectedAt <= lastResetTime) {
              isExpired = true;
            }
          }
          if (isExpired) {
            newCollected[markerId] = Date.now();
          } else {
            delete newCollected[markerId];
          }

          return { collectedMarkers: newCollected };
        }),

      toggleAllCollected: (typeId) =>
        set((state) => {
          const targetMarkers = MAP_MARKERS.filter((m) => m.type === typeId);
          if (targetMarkers.length === 0) return state;

          const newCollected = { ...state.collectedMarkers };
          const now = Date.now();

          const allCollected = targetMarkers.every((m) => newCollected[m.id]);

          if (allCollected) {
            targetMarkers.forEach((m) => {
              delete newCollected[m.id];
            });
          } else {
            targetMarkers.forEach((m) => {
              if (!newCollected[m.id]) {
                newCollected[m.id] = now;
              }
            });
          }

          return { collectedMarkers: newCollected };
        }),

      getProgress: (targetType) => {
        const { isCollected } = get();

        const targetMarkers = MAP_MARKERS.filter((m) => {
          const isCountable = COUNTABLE_TYPES.has(m.type);
          const isTypeMatch = targetType ? m.type === targetType : true;
          return isCountable && isTypeMatch;
        });

        const total = targetMarkers.length;

        const current = targetMarkers.filter((m) => isCollected(m.id, m.type)).length;

        return { current, total };
      },

      setFocusedMarkerId: (id) => set({ focusedMarkerId: id }),

      isCollected: (markerId, type) => {
        const collectedAt = get().collectedMarkers[markerId];
        if (!collectedAt) return false;

        if (WEEKLY_RESET_TYPES.has(type)) {
          const lastResetTime = getLastWeeklyResetTime();
          return collectedAt > lastResetTime;
        }

        const respawnDuration = RESPAWN_TIMES[type];

        if (!respawnDuration) return true;

        const now = Date.now();
        const respawnAt = collectedAt + respawnDuration;

        return now < respawnAt;
      },

      setCollectedMarkers: (markers) => set({ collectedMarkers: markers }),

      refreshCollectedMarkers: () =>
        set((state) => {
          const newCollected = { ...state.collectedMarkers };
          const lastResetTime = getLastWeeklyResetTime();
          const now = Date.now();
          let hasChanges = false;

          Object.keys(newCollected).forEach((id) => {
            const marker = MAP_MARKERS.find((m) => m.id === id);
            if (!marker) return;

            const collectedAt = newCollected[id];

            if (WEEKLY_RESET_TYPES.has(marker.type)) {
              if (collectedAt <= lastResetTime) {
                delete newCollected[id];
                hasChanges = true;
                return;
              }
            }

            const respawnDuration = RESPAWN_TIMES[marker.type];
            if (respawnDuration) {
              if (now >= collectedAt + respawnDuration) {
                delete newCollected[id];
                hasChanges = true;
              }
            }
          });

          return hasChanges ? { collectedMarkers: newCollected } : state;
        }),

      resetCustomMarkers: () => set({ customMarkers: [] }),

      importCustomMarkers: (newMarkers) =>
        set((state) => {
          const existingIds = new Set(state.customMarkers.map((m) => m.id));
          const uniqueNewMarkers = newMarkers.filter((m) => !existingIds.has(m.id));

          return {
            customMarkers: [...state.customMarkers, ...uniqueNewMarkers],
          };
        }),
    }),
    {
      name: "map-storage",
      storage: createJSONStorage(() => localStorage),

      partialize: (state) => ({
        collectedMarkers: state.collectedMarkers,
        selectedFilters: Array.from(state.selectedFilters),
        customMarkers: state.customMarkers,
      }),
      merge: (persistedState: unknown, currentState) => {
        const partialSchema = storageSchema.partial();
        const result = partialSchema.safeParse(persistedState);

        if (!result.success) {
          console.warn("스토리지 데이터 손상됨. 초기화 진행.");
          return currentState;
        }

        const validData = result.data;
        const mergedCollectedMarkers = validData.collectedMarkers ?? currentState.collectedMarkers;
        const mergedCustomMarkers = (validData.customMarkers as ICustomMarkerData[]) ?? [];
        const mergedSelectedFilters = validData.selectedFilters
          ? new Set(validData.selectedFilters)
          : currentState.selectedFilters;

        return {
          ...currentState,
          collectedMarkers: mergedCollectedMarkers,
          customMarkers: mergedCustomMarkers,
          selectedFilters: mergedSelectedFilters,
          creatingMarkerPos: currentState.creatingMarkerPos,
        };
      },
    },
  ),
);
