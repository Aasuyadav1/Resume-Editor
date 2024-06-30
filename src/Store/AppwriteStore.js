import create from "zustand";
import { account } from "../Appwrite/Conf";
import { databases } from "../Appwrite/Conf";
import { ID } from "../Appwrite/Conf";
import { Query } from "appwrite";

const useAppwriteStore = create((set) => ({
  // initial state
  userData: {
    userStatus: false,
    userID: "",
    userEmail: "",
    userName: "",
  },
  singleData: null,
  allData: null,

  getCurrentUser: async () => {
    try {
      console.log("db ps", process.env.API_DATABASE_ID);
      const res = await account.get();
      if (res) {
        console.log(res);
        set({
          userData: {
            userStatus: res.status,
            userID: res.$id,
            userEmail: res.email,
            userName: res.name,
          },
        });
      }
    } catch (error) {
      console.log("error on getting current user ", error);
    }
  },

  signUp: async (email, password, name) => {
    try {
      const res = await account.create(ID.unique(), email, password, name);
      if (res) {
        set({
          userData: {
            userStatus: res.status,
            userID: res.$id,
            userEmail: res.email,
            userName: res.name,
          },
        });
      }
    } catch (error) {
      console.log("signup error", error);
    }
  },

  login: async (email, password) => {
    try {
      // Remember use createemailpassowrdsessin instead of createemailsession
      const res = await account.createEmailSession(email, password);
      if (res) {
        set({
          userData: {
            userStatus: res.status,
            userID: res.$id,
            userEmail: res.email,
            userName: res.name,
          },
        });
      }
    } catch (error) {
      console.log("normal login error", error);
    }
  },

  googleLogin: async () => {
    try {
      const res = await account.createOAuth2Session(
        "google",
        process.env.REDIRECT_GOOGLE_AUTH,
        process.env.FAILURE_ON_GOOGLE_AUTH
      );
      if (res) {
        set({
          userData: {
            userStatus: res.status,
            userID: res.$id,
            userEmail: res.email,
            userName: res.name,
          },
        });
      }
    } catch (error) {
      console.log("error on login with google ", error);
    }
  },

  logOut: async () => {
    try {
      const res = await account.deleteSession("current");
      if (res) {
        set({
          userData: {
            userStatus: false,
            userID: null,
            userEmail: null,
            userName: null,
          },
        });
      }
    } catch (error) {
      console.log("error on logout", error);
    }
  },

  // functions for Databases Operations
  addNewResume: async (data, userId, templateId, title) => {
    try {
      const newResume = await databases.createDocument(
        process.env.API_DATABASE_ID,
        process.env.API_COLLECTION_ID,
        ID.unique(),
        {
          Resume_Data: data,
          Templates_Id: templateId,
          User_id: userId,
          Resum_Title: title,
        }
      );
    } catch (error) {
      console.log("error on adding new data to db ", error);
    }
  },

  updateResume: async (databaseId, data, templateId) => {
    try {
      const newResume = await databases.updateDocument(
        process.env.API_DATABASE_ID,
        process.env.API_COLLECTION_ID,
        databaseId,
        {
          Resume_Data: data,
          Templates_Id: templateId,
        }
      );
    } catch (error) {
      console.log("error on updating data to db ", error);
    }
  },

  allResumeData: async (userId) => {
    try {
      const newResume = await databases.listDocuments(
        process.env.API_DATABASE_ID,
        process.env.API_COLLECTION_ID,
        [Query.equal("User_id", userId)]
      );
      await set({ allData: newResume.documents });
    } catch (error) {
      console.log("error on getting all data from db ", error);
    }
  },

  singleResumeData: async (projectid) => {
    try {
      const newResume = await databases.listDocuments(
        process.env.API_DATABASE_ID,
        process.env.API_COLLECTION_ID,
        [Query.equal("$id", projectid)]
      );
      await set({ singleData: newResume.documents });
    } catch (error) {
      console.log("error on getting single data from db ", error);
    }
  },

  deleteResume: async (userId) => {
    try {
      const newResume = await databases.deleteDocument(
        process.env.API_DATABASE_ID,
        process.env.API_COLLECTION_ID,
        userId
      );
    } catch (error) {
      console.log("error on deleting data to db ", error);
    }
  },
}));

export default useAppwriteStore;
