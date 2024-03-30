import zustand from "zustand";
import { account } from "../Appwrite/Conf";
import { databases } from "../Appwrite/Conf";
import { ID } from "../Appwrite/Conf";

const useAppwriteStore = create((set) => ({
    isloggedIn : false,
    user : null,
    userId : null,
    singleData : null,
    allData : null,

    setUserId : (value) => set({userId : value}),
    setUser : (value) => set({user : value}),
    setLoggedIn : (value) => set({isloggedIn : value}),
     
    getCurrentUser : async () => {
        try {
           const user = await account.get();
           setUser(user);
           setUserId(user.$id); 
           setLoggedIn(true);
        } catch (error) {
            setLoggedIn(false);
            console.log("error on getting current user ",error)
        }
    },

    signUp : async (email, password, name) => {
        try {
           const user = await account.create(ID.unique(), email, password, name);
           setUser(user);
           setUserId(user.$id);
           setLoggedIn(true);
        } catch (error) {
            setLoggedIn(false);
            console.log('signup error',error)
        }
    },

    login : async (email, password) => {
        try {
           const user = await account.createEmailSession(email, password);
           setUser(user);
           setUserId(user.$id);
           setLoggedIn(true);
        } catch (error) {
            setLoggedIn(false);
            console.log('normal login error',error)
        }
    },

    googleLogin : async () => {
        try {
            const user = await account.createOAuth2Session("google");
            setUser(user);
            setUserId(user.$id);
            setLoggedIn(true);
        } catch (error) {
            setLoggedIn(false);
            console.log('error on login with google ',error)
        }
    },

    logOut : async () => {
        try {
            await account.deleteSession("current");
            setLoggedIn(false);
            setUserId(null);
            setUser(null);
        } catch (error) {
            console.log('error on logout',error)
        }
    },

    addNewResume : async (data, userId, templateId) => {
        try {
            const newResume = await databases.createDocument(
                process.env.API_DATABASE_ID,
                process.env.API_COLLECTION_ID,
                ID.unique(),
                { "Resume_Data": data,
                   "Templates_Id" : templateId,
                   "User_id" : userId 
                }  
            )
        } catch (error) {
            console.log("error on adding new data to db ", error)
        }
    },

    updateResume : async (data, userId) => {
       try {
        const newResume = await databases.updateDocument(
            process.env.API_DATABASE_ID,
            process.env.API_COLLECTION_ID,
            userId,
            { "Resume_Data": data}
        )
       } catch (error) {
        console.log("error on updating data to db ", error)
       }
    },

    allResumeData : async (userId) => {
        try {
            const newResume = await databases.listDocuments(
                process.env.API_DATABASE_ID,
                process.env.API_COLLECTION_ID
            )
        } catch (error) {
            console.log("error on getting all data from db ", error)
        }
    },

    singleResumeData : async (userId) => {
        try {
            const newResume = await databases.getDocument(
                process.env.API_DATABASE_ID,
                process.env.API_COLLECTION_ID,
                userId
            )
        } catch (error) {
            console.log("error on getting single data from db ", error)
        }
    },

    deleteResume : async (userId) => {
        try {
            const newResume = await databases.deleteDocument(
                process.env.API_DATABASE_ID,
                process.env.API_COLLECTION_ID,
                userId
            )
        } catch (error) {
            console.log("error on deleting data to db ", error)
        }
    }

}))


