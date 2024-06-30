import create from "zustand";
import { devtools } from "zustand/middleware";
import { resumeData as initialResumeData } from "../Data/resume1";

const useResumeStore = create(
  devtools((set, get) => ({

    resumeData: initialResumeData,
    selectedElement: null,
    selectedTemplateId: 1,

    setSelectedTemplateId: (id) => {
      const { selectedTemplateId } = get();
      set({ selectedTemplateId: id });
    },

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
      } else if (Array.isArray(resumeData[section])) {
        const updatedSection = [...resumeData[section]];
        updatedSection[index] = { ...updatedSection[index], [key]: value };
        set({ resumeData: { ...resumeData, [section]: updatedSection } });
      } else {
        console.error(`Section ${section} is not iterable or not recognized.`);
      }
    },

    addNewField: (section, data) => {
      const { resumeData } = get();
      if (Array.isArray(resumeData[section])) {
        const updatedSection = [...resumeData[section], data];
        set({ resumeData: { ...resumeData, [section]: updatedSection } });
      } else {
        console.error('something went wrong while adding new field');
      }
    },

    removeField: (section, index) => {
      const { resumeData } = get()
      const {selectedElement} = get()
      if(section || index){
        if(selectedElement?.section === section && selectedElement?.index === index){
          set({selectedElement: null})
        }
        const toRemoveSection = [...resumeData[section]]
        const removeField = toRemoveSection.filter((item,i) => i !== index);
        set({resumeData: {...resumeData, [section]:removeField}})
      }
    }

  }))
);

export default useResumeStore;
