import create from "zustand";
import { devtools } from "zustand/middleware";
import { resumeData } from "../Data/resume1";

const useResumeStore = create(
  devtools((set, get) => ({
    resumeData: resumeData,
    selectedElement: null,
    setSelectedElement: (section, index, key, element) => {
      set({ selectedElement: { section, index, key, element } });
    },
    setResumeData: (section, index, key, value) => {
      const { resumeData } = get();
      if (
        section === "title" ||
        section === "subtitle" ||
        section === "description" ||
        section === "image"
      ) {
        set({ resumeData: { ...resumeData, [section]: value } });
      } else {
        const updatedSection = [...resumeData[section]];
        updatedSection[index] = { ...updatedSection[index], [key]: value };
        set({ resumeData: { ...resumeData, [section]: updatedSection } });
      }
    },
  }))
);

export default useResumeStore;
