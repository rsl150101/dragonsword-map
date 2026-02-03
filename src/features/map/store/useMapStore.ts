import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { COUNTABLE_TYPES, FILTER_DATA, RESPAWN_TIMES } from "../data/mapFilters";
import { MAP_MARKERS } from "../data/mapMarkers";

interface MapState {
  selectedFilters: Set<string>;
  toggleFilter: (id: string) => void;
  isAllVisible: () => boolean;
  setAllFilters: (enable: boolean) => void;
  collectedMarkers: Record<string, number>;
  toggleCollected: (markerId: string) => void;
  getProgress: (type?: string) => { current: number; total: number };
  focusedMarkerId: string | null;
  setFocusedMarkerId: (id: string | null) => void;
  isCollected: (markerId: string, type: string) => boolean;
  setCollectedMarkers: (markers: Record<string, number>) => void;
}

export const useMapStore = create<MapState>()(
  persist(
    (set, get) => ({
      selectedFilters: new Set(
        FILTER_DATA.flatMap((category) => category.items.map((item) => item.id)),
      ),
      collectedMarkers: {},
      focusedMarkerId: null,

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
          if (newCollected[markerId]) {
            delete newCollected[markerId];
          } else {
            newCollected[markerId] = Date.now();
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

        const respawnDuration = RESPAWN_TIMES[type];

        if (!respawnDuration) return true;

        const now = Date.now();
        const respawnAt = collectedAt + respawnDuration;

        return now < respawnAt;
      },

      setCollectedMarkers: (markers) => set({ collectedMarkers: markers }),
    }),
    {
      name: "map-storage",
      storage: createJSONStorage(() => localStorage),

      partialize: (state) => ({
        collectedMarkers: state.collectedMarkers,
      }),
    },
  ),
);
