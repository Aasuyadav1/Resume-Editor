import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { resumeData } from '../Data/resume1';

const useResumeStore = create(
  devtools((set) => ({
    resumeData: resumeData,

    selectedElement: null,

    selectedDataIndex: null,

    // projects index
    selectedProjectNameIndex : null,
    selectedProjectdescriptionIndex : null,
    selectedProjectlinkIndex : null,

    // education index
    selectedEducationDateIndex : null,
    selectedEducationDegreeIndex : null,
    selectedEducationUniversityIndex : null,

    // skills index
    selectedSkillCatrgoryIndex : null,
    selectedSkillSkillsIndex : null,

    // contact index
    selectedContectLabelIndex : null,
    selectedContectValueIndex : null,

    // set experience index
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

    setResumeimage : (image) => set({ resumeData: {...resumeData,image:image} }),

    setResumeSubtitle: (subtitle) => set((prevState) => ({
      resumeData: { 
        ...prevState.resumeData, 
        subtitle: subtitle 
      }
    })),
    
    setEducationDate: (date, index) => {
      const updatedEducation = [...resumeData.Education];
      updatedEducation[index].date = date;
      set({ resumeData: { ...resumeData, Education: updatedEducation } });
    },

    setEducationDegree : (degree, index) => {
      const updateDegree = [...resumeData.Education];
      updateDegree[index].degree = degree;
      set({resumeData : {...resumeData, Education:updateDegree}})
    },

    setEducationUniversity : (university, index) => {
      const updateUniversity = [...resumeData.Education];
      updateUniversity[index].university = university;
      set({resumeData : {...resumeData, Education:updateUniversity}})
    },

    setContactLabel : (label, index) => {
      const updateLabel = [...resumeData.Contact];
      updateLabel[index].label = label;
      set({resumeData : {...resumeData, Contact:updateLabel}})
    },

    setContactValue : (value, index) => {
      const updateValue = [...resumeData.Contact];
      updateValue[index].value = value;
      set({resumeData : {...resumeData, Contact:updateValue}})
    },

    setSkillsCategory : (category, index) => {
      const updateCategory = [...resumeData.Skills];
      updateCategory[index].category = category;
      set({resumeData : {...resumeData, Skills:updateCategory}})
    },

    setSkillsSkills : (skills, index) => {
      const updateSkills = [...resumeData.Skills];
      updateSkills[index].skills = skills;
      set({resumeData : {...resumeData, Skills:updateSkills}})
    },

    setExperienceDate : (date, index) => {
      const updateDate = [...resumeData.Experience];
      updateDate[index].date = date;
      set({resumeData : {...resumeData, Experience:updateDate}})
    },

    setExperienceCompany : (company, index) => {
      const updateCompany = [...resumeData.Experience];
      updateCompany[index].company = company;
      set({resumeData : {...resumeData, Experience:updateCompany}})
    },

    setExperiencePosition : (position, index) => {
      const updatePosition = [...resumeData.Experience];
      updatePosition[index].position = position;
      set({resumeData : {...resumeData, Experience:updatePosition}})
    },

    setExperienceDescription : (description, index) => {
      const updateDescription = [...resumeData.Experience];
      updateDescription[index].description = description;
      set({resumeData : {...resumeData, Experience:updateDescription}})
    },

    setProjectName : (name, index) => {
      const updateName = [...resumeData.Projects];
      updateName[index].name = name;
      set({resumeData : {...resumeData, Projects:updateName}})
    },

    setProjectDescription : (description, index) => {
      const updateDescription = [...resumeData.Projects];
      updateDescription[index].description = description;
      set({resumeData : {...resumeData, Projects:updateDescription}})
    },

    setProjectLink : (link, index) => {
      const updateLink = [...resumeData.Projects];
      updateLink[index].link = link;
      set({resumeData : {...resumeData, Projects:updateLink}})
    },

    // adding new data 
    addNewEducation : (date, degree, university) => {
      set((state) => ({
        resumeData: {
          ...state.resumeData,
          Education: [
            ...state.resumeData.Education,
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
    
  })),
 );

export default useResumeStore;