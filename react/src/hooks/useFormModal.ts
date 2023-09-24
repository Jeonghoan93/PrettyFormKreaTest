import { create } from "zustand";

interface FormModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useFormModal = create<FormModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useFormModal;
