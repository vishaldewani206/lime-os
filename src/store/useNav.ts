import { create } from "zustand";
import { persist } from "zustand/middleware";

type NavState = {
  wifi: boolean;
  nightMode: boolean;
  brightness: number;
  toggleWifi: () => void;
  toggleNightMode: () => void;
  changeBrightness: (value: number) => void;
};


export const useNavState = create<NavState>()(
  persist(
    (set) => ({
      wifi: true,
      nightMode: false,
      brightness: 75,

      changeBrightness: (value:number)=> set(()=> ({brightness: value})),
      toggleWifi: () => set((state) => ({ wifi: !state.wifi })),
      toggleNightMode: () =>
        set((state) => ({ nightMode: !state.nightMode })),
    }),
    {
      name: "nav-storage",
    }
  )
);