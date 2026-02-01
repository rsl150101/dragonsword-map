import { create } from "zustand";

import { FILTER_DATA } from "../features/map/data/mapFilters";

interface MapState {
  selectedFilters: Set<string>;
  toggleFilter: (id: string) => void;
  isAllVisible: () => boolean;
  setAllFilters: (enable: boolean) => void;
}

export const useMapStore = create<MapState>((set, get) => ({
  selectedFilters: new Set(
    FILTER_DATA.flatMap((category) => category.items.map((item) => item.id)),
  ),

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
}));
