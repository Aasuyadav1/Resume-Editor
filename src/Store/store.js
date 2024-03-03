import {create} from "zustand";

const useResumeStore = create((set) => ({
    resumeHTML: "", // Initial resume HTML content
    setResumeHTML: (html) => set({ resumeHTML: html }),
  }));

export default useResumeStore;