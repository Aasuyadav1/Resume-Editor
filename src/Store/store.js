import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { resumeData } from '../Data/resume1';

const useResumeStore = create(
  devtools((set) => ({
    resumeData: resumeData,
    selectedElement: null,
    selectedDataIndex: null,
    selectedProjectNameIndex : null,
    selectedProjectdescriptionIndex : null,
    selectedProjectlinkIndex : null,
    selectedEducationDateIndex : null,
    selectedEducationDegreeIndex : null,
    selectedEducationUniversityIndex : null,
    selectedSkillCatrgoryIndex : null,
    selectedSkillSkillsIndex : null,
    selectedContectLabelIndex : null,
    selectedContectValueIndex : null,
    selectedExperienceDateIndex : null,
    selectedExperienceCompanyIndex : null,
    selectedExperiencePositionIndex : null,
    selectedExperienceDescriptionIndex : null,

    // functions to set selected elements index
    setselectedProjectNameIndex : (index) => set({ selectedProjectNameIndex: index }),
    setselectedProjectdescriptionIndex : (index) => set({ selectedProjectdescriptionIndex: index }),
    setselectedProjectlinkIndex : (index) => set({ selectedProjectlinkIndex: index }),

    setselectedEducationDateIndex : (index) => set({ selectedEducationDateIndex: index }),
    setselectedEducationDegreeIndex : (index) => set({ selectedEducationDegreeIndex: index }),
    setselectedEducationUniversityIndex : (index) => set({ selectedEducationUniversityIndex: index }),

    setselectedSkillCategoryIndex : (index) => set({ selectedSkillCatrgoryIndex: index }),
    setselectedSkillSkillsIndex : (index) => set({ selectedSkillSkillsIndex: index }),

    setselectedContactLabelIndex : (index) => set({ selectedContectLabelIndex: index }),
    setselectedContactValueIndex : (index) => set({ selectedContectValueIndex: index }),

    setselectedExperienceDateIndex : (index) => set({ selectedExperienceDateIndex: index }),
    setselectedExperienceCompanyIndex : (index) => set({ selectedExperienceCompanyIndex: index }),  
    setselectedExperiencePositionIndex : (index) => set({ selectedExperiencePositionIndex: index }),
    setselectedExperienceDescriptionIndex : (index) => set({ selectedExperienceDescriptionIndex: index }),

    setSelectedDataIndex : (index) => set({ selectedDataIndex: index }),

    setSelectedElement: (element) => set({ selectedElement: element }),

    setResumetitle: (title) => set((prevState) => ({
      resumeData: { 
        ...prevState.resumeData, 
        title: title 
      }
    })),

    setResumedescription: (description) => set((prevState) => ({
      resumeData: { 
        ...prevState.resumeData, 
        description: description 
      }
    })),

    setResumeimage : (image) => set((prevState) => ({
      resumeData: { 
        ...prevState.resumeData, 
        image: image 
      }
    })),

    setResumeSubtitle: (subtitle) => set((prevState) => ({
      resumeData: { 
        ...prevState.resumeData, 
        subtitle: subtitle 
      }
    })),
    
    setEducationDate: (date, index) => {
      set((prevState) => {
        const updatedEducation = [...prevState.resumeData.Education];
        if (updatedEducation[index]) {
          updatedEducation[index].date = date;
          return { resumeData: { ...prevState.resumeData, Education: updatedEducation } };
        } else {
          // Handle error or fallback behavior if index is out of bounds
          console.error(`Index ${index} is out of bounds.`);
          return prevState;
        }
      });
    },

    setEducationDegree: (degree, index) => {
      set((state) => {
        const updatedEducation = [...state.resumeData.Education];
        if (updatedEducation[index]) {
          updatedEducation[index].degree = degree;
          return { resumeData: { ...state.resumeData, Education: updatedEducation } };
        } else {
          console.error(`Index ${index} is out of bounds.`);
          return state;
        }
      });
    },

    setEducationUniversity: (university, index) => {
      set((state) => {
        const updatedEducation = [...state.resumeData.Education];
        if (updatedEducation[index]) {
          updatedEducation[index].university = university;
          return { resumeData: { ...state.resumeData, Education: updatedEducation } };
        } else {
          console.error(`Index ${index} is out of bounds.`);
          return state;
        }
      });
    },

    setContactLabel : (label, index) => set((prevState) => {
      const updatedContact = [...prevState.resumeData.Contact];
      if (updatedContact[index]) {
        updatedContact[index].label = label;
        return { resumeData: { ...prevState.resumeData, Contact: updatedContact } };
      } else {
        console.error(`Index ${index} is out of bounds.`);
        return prevState;
      }
    }),

    setContactValue : (value, index) => set((prevState) => {
      const updatedContact = [...prevState.resumeData.Contact];
      if (updatedContact[index]) {
        updatedContact[index].value = value;
        return { resumeData: { ...prevState.resumeData, Contact: updatedContact } };
      } else {
        console.error(`Index ${index} is out of bounds.`);
        return prevState;
      }
    }),

    setSkillsCategory: (category, index) => set((prevState) => {
    const updatedSkills = [...prevState.resumeData.Skills];
    if (updatedSkills[index]) {
      updatedSkills[index].category = category;
      return { resumeData: { ...prevState.resumeData, Skills: updatedSkills } };
    } else {
      console.error(`Index ${index} is out of bounds.`);
      return prevState;
    }
  }),

    setSkillsSkills: (skills, index) => set((prevState) => {
    const updatedSkills = [...prevState.resumeData.Skills];
    if (updatedSkills[index]) {
      updatedSkills[index].skills = skills;
      return { resumeData: { ...prevState.resumeData, Skills: updatedSkills } };
    } else {
      console.error(`Index ${index} is out of bounds.`);
      return prevState;
    }
    }),

    setExperienceDate : (date, index) => set((prevState) => {
      const updatedExperience = [...prevState.resumeData.Experience];
      if (updatedExperience[index]) {
        updatedExperience[index].date = date;
        return { resumeData: { ...prevState.resumeData, Experience: updatedExperience } };
      } else {
        console.error(`Index ${index} is out of bounds.`);
        return prevState;
      }
    }),

    setExperienceCompany : (company, index) => set((prevState) => {
      const updatedExperience = [...prevState.resumeData.Experience];
      if (updatedExperience[index]) {
        updatedExperience[index].company = company;
        return { resumeData: { ...prevState.resumeData, Experience: updatedExperience } };
      } else {
        console.error(`Index ${index} is out of bounds.`);
        return prevState;
      }
    }),

    setExperiencePosition : (position, index) => set((prevState) => {
      const updatedExperience = [...prevState.resumeData.Experience];
      if (updatedExperience[index]) {
        updatedExperience[index].position = position;
        return { resumeData: { ...prevState.resumeData, Experience: updatedExperience } };
      } else {
        console.error(`Index ${index} is out of bounds.`);
        return prevState;
      }
    }),

    setExperienceDescription : (description, index) => set((prevState) => {
      const updatedExperience = [...prevState.resumeData.Experience];
      if (updatedExperience[index]) {
        updatedExperience[index].description = description;
        return { resumeData: { ...prevState.resumeData, Experience: updatedExperience } };
      } else {
        console.error(`Index ${index} is out of bounds.`);
        return prevState;
      }
    }),

    setProjectName : (name, index) => set((prevState) => {
      const updatedProject = [...prevState.resumeData.Projects];
      if (updatedProject[index]) {
        updatedProject[index].name = name;
        return { resumeData: { ...prevState.resumeData, Projects: updatedProject } };
      } else {
        console.error(`Index ${index} is out of bounds.`);
        return prevState;
      }
    }),

    setProjectDescription : (description, index) => set((prevState) => {
      const updatedProject = [...prevState.resumeData.Projects];
      if (updatedProject[index]) {
        updatedProject[index].description = description;
        return { resumeData: { ...prevState.resumeData, Projects: updatedProject } };
      } else {
        console.error(`Index ${index} is out of bounds.`);
        return prevState;
      }
    }),

    setProjectLink : (link, index) => set((prevState) => {
      const updatedProject = [...prevState.resumeData.Projects];
      if (updatedProject[index]) {
        updatedProject[index].link = link;
        return { resumeData: { ...prevState.resumeData, Projects: updatedProject } };
      } else {
        console.error(`Index ${index} is out of bounds.`);
        return prevState;
      }
    }),

    // adding new data 
    addNewEducation: (date, degree, university) => {
      set((prevState) => ({
        resumeData: {
          ...prevState.resumeData,
          Education: [
            ...prevState.resumeData.Education,
            { date: date, degree: degree, university: university },
          ],
        },
      }));
    },
    
    addNewContact : (label, value) => {
      set((state) => ({
        resumeData: {
          ...state.resumeData,
          Contact: [...state.resumeData.Contact, { label: label, value: value }],
        },
      }));
    },

    addNewSkills : (category, skills) => {
      set((state) => ({
        resumeData: {
          ...state.resumeData,
          Skills: [...state.resumeData.Skills, { category: category, skills: skills }],
        },
      }));
    },

    addNewExperience : (date, company, position, description) => {
      set((state) => ({
        resumeData : {
          ...state.resumeData,
          Experience : [
            ...state.resumeData.Experience,
            {date : date, company : company, position : position, description : description}
          ]
        }
      }))
    },

    addNewProject : (name, description, link) => {
      set((state) => ({
        resumeData : {
          ...state.resumeData,
          Projects : [
            ...state.resumeData.Projects,
            {name : name, description : description, link : link}
          ]
        }
      }))
    },

    removeEducation : (index) => {
      set((prevState) => {
        const updatedEducation = prevState.resumeData.Education.filter((_, i) => i !== index);
        return { resumeData: { ...prevState.resumeData, Education: updatedEducation } };
      })
    },

    removeContact : (index) => {
      set((prevState) => {
        const updatedContact = prevState.resumeData.Contact.filter((_, i) => i !== index);
        return { resumeData: { ...prevState.resumeData, Contact: updatedContact } };
      })
    },
    
    removeSkills : (index) => {
      set((prevState) => {
        const updatedSkills = prevState.resumeData.Skills.filter((_, i) => i !== index);
        return { resumeData: { ...prevState.resumeData, Skills: updatedSkills } };
      })
    },
    
    removeExperience : (index) => {
      set((prevState) => {
        const updatedExperience = prevState.resumeData.Experience.filter((_, i) => i !== index);
        return { resumeData: { ...prevState.resumeData, Experience: updatedExperience } };
      })
    },
    
    removeProject: (index) => {
      set((prevState) => {
        const updatedProjects = prevState.resumeData.Projects.filter((_, i) => i !== index);
        return { resumeData: { ...prevState.resumeData, Projects: updatedProjects } };
      });
    }
    

  })),
);

export default useResumeStore;