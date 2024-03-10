import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { resumeData } from '../Data/resume1';

const useResumeStore = create(
  devtools((set) => ({
    resumeData: resumeData,
    selectedElement: null,
    setSelectedElement: (element) => set({ selectedElement: element }),
  }))
);

export default useResumeStore;