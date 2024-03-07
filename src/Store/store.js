import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useResumeStore = create(
  devtools((set) => ({
    selectedElement: null,
    setSelectedElement: (element) => set({ selectedElement: element }),
  }))
);

export default useResumeStore;