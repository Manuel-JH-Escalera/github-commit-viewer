import { create } from 'zustand';

type LoaderState = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

const useLoaderStore = create<LoaderState>((set) => ({
  isLoading: true,
  setIsLoading: (isLoading) => set({ isLoading }),
}));

export default useLoaderStore;