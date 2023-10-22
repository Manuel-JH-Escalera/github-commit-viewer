import { create } from 'zustand';

type DarkModeState = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  enableDarkMode: () => void;
  disableDarkMode: () => void;
};

const useDarkModeStore = create<DarkModeState>((set) => ({
  isDarkMode: true,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  enableDarkMode: () => set({ isDarkMode: true }),
  disableDarkMode: () => set({ isDarkMode: false }),
}));

export default useDarkModeStore;