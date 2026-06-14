import { create } from "zustand";
import { persist } from "zustand/middleware";

type NavState = {
  staticNav: boolean;
  toggleStaticNav: () => void;
  // changeBrightness: (value: number) => void;
};


export const useBottomNav = create<NavState>()(
  persist(
    (set) => ({
      staticNav: true,
      toggleStaticNav: () => set((state) => ({ staticNav: !state.staticNav })),
    }),
    {
      name: "nav-storage",
    }
  )
);