import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { COUNTABLE_TYPES, FILTER_DATA } from "../features/map/data/mapFilters";
import { MAP_MARKERS } from "../features/map/data/mapMarkers";

interface MapState {
  selectedFilters: Set<string>;
  toggleFilter: (id: string) => void;
  isAllVisible: () => boolean;
  setAllFilters: (enable: boolean) => void;
  collectedMarkers: string[];
  toggleCollected: (markerId: string) => void;
  getProgress: (type?: string) => { current: number; total: number };
  focusedMarkerId: string | null;
  setFocusedMarkerId: (id: string | null) => void;
}

export const useMapStore = create<MapState>()(
  persist(
    (set, get) => ({
      selectedFilters: new Set(
        FILTER_DATA.flatMap((category) => category.items.map((item) => item.id)),
      ),
      collectedMarkers: [],
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
          const targetMarker = MAP_MARKERS.find((m) => m.id === markerId);

          if (!targetMarker || !COUNTABLE_TYPES.has(targetMarker.type)) {
            return state;
          }

          const list = state.collectedMarkers;
          if (list.includes(markerId)) {
            return { collectedMarkers: list.filter((id) => id !== markerId) };
          } else {
            return { collectedMarkers: [...list, markerId] };
          }
        }),

      getProgress: (targetType) => {
        const { collectedMarkers } = get();

        const targetMarkers = MAP_MARKERS.filter((m) => {
          const isCountable = COUNTABLE_TYPES.has(m.type);
          const isTypeMatch = targetType ? m.type === targetType : true;
          return isCountable && isTypeMatch;
        });

        const total = targetMarkers.length;

        const current = targetMarkers.filter((m) => collectedMarkers.includes(m.id)).length;

        return { current, total };
      },

      setFocusedMarkerId: (id) => set({ focusedMarkerId: id }),
    }),
    {
      name: "map-storage",
      storage: createJSONStorage(() => localStorage),

      partialize: (state) => ({ collectedMarkers: state.collectedMarkers }),
    },
  ),
);
