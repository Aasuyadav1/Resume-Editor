import create from "zustand";
import { account } from "../Appwrite/Conf";
import { databases } from "../Appwrite/Conf";
import { ID } from "../Appwrite/Conf";

const useAppwriteStore = create((set) => ({
    // initial state
    userData: {
        userStatus: false,
        userID: "",
        userEmail: "",
        userName: "",
     },
    singleData : null,
    allData : null,

    // functions to set states
    // setUserId : (value) => set({userId : value}),
    // setUser : (value) => set({user : value}),
    // setLoggedIn : (value) => set({isloggedIn : value}),
     
    // functions for authentications
    getCurrentUser : async () => {
        try {
           const res = await account.get();
            if(res){
                console.log(res)
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
            console.log("error on getting current user ",error)
        }
    },

    signUp : async (email, password, name) => {
        try {
           const res = await account.create(ID.unique(), email, password, name);
            if(res){
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
            console.log('signup error',error)
        }
    },

    login : async (email, password) => {
        try {
            // Remember use createemailpassowrdsessin instead of createemailsession
           const res = await account.createEmailPasswordSession(email, password);
           if(res){
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

            console.log('normal login error',error)
        }
    },

    googleLogin : async () => {
        try {
            const res = await account.createOAuth2Session("google");
            if(res){
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
            console.log('error on login with google ',error)
        }
    },

    logOut : async () => {
        try {
           const res = await account.deleteSession("current");
            if(res){
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
            console.log('error on logout',error)
        }
    },

    // functions for Databases Operations
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
            await set({allData : newResume.documents})
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

export default useAppwriteStore;
