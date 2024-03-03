import {create} from "zustand";

const useResumeStore = create((set) => ({
    resumeContent: "",
    // bold : false,
    // italic : false,
     // Initial resume HTML content
    setResumeContent: (content) => set({ resumeContent: content }),
    // setBold: () => set((state) => ({ bold: !state.bold })),
  }));

export default useResumeStore;