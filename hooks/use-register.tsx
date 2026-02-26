import { create } from "zustand";

type RegisterStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useRegister = create<RegisterStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));