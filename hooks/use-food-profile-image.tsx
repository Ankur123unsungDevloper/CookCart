import { create } from "zustand";

type FoodProfileImageStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useFoodProfileImage = create<FoodProfileImageStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));