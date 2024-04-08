import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import useAppwriteStore from '../Store/AppwriteStore'
import { useState } from 'react'
import Button from './Button'
import {useNavigate} from 'react-router-dom'
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button as NextUIButton, useDisclosure} from "@nextui-org/react";

function Dashboard() {
    const template = [
        {
            id: 1,
            name : "Template 1",
            image : "../images/resume1.png"
        },
        {
            id: 2,
            name : "Template 2",
            image : "../images/resume2.png"
        }
    ]
    const {allResumeData, allData, deleteResume, logOut} = useAppwriteStore()
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [resumeTitle, setResumeTitle] = useState('')
    const [deleteId, setDeleteId] = useState('')


    const usersResume = (id) => {
        if(id){
            navigate(`/editor/${id}`)
        }
    }

    const handleOpen = (id) => {
       
        if(id){
            onOpen();
            const filterData = allData.find((item) => item.$id === id);
            setResumeTitle(filterData.Resume_Title)
            setDeleteId(filterData.$id)
        }
    }

    const handleDelete = () => {
        if(deleteId){
            deleteResume(deleteId)
            onClose();
            setDeleteId('')
        }
        onclose();
        setDeleteId('')
    }

    const handleLogout = () => {
        logOut()
        navigate("/")
    }

    useEffect(() => {
        if(id){
            allResumeData(id)
            setTimeout(() => {
                setIsLoading(false)
            }, 3000);
        }
    },[handleDelete])

    return (
        <div className='w-full  h-screen bg-[rgb(250,247,254)] '>
            <div className='flex shadow-sm items-center  z-50  justify-between gap-1 px-1 py-3 bg-white sticky top-0 left-0 w-full'>
     <div className=' md:max-w-[300px] md:w-full text-center'>
     <Link to={"/"}>
     <p className='text-2xl font-[Roboto] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5] cursor-pointer'>Resume Editor</p>
     </Link>
     </div>
     <div className='flex gap-4 items-center'>
     <Button
        label='Logout'
        classes='text-black bg-[#FEE7EF] duration-150 hover:bg-[#FDD0DF] active:bg-[#FAA0BF] rounded-full py-2 px-5 flex items-center gap-2'
        
        onClick={handleLogout}
      /> 
      <Link to={"/editor"}>
      <Button
        label='Create Resume'
        classes='text-white bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-full py-2 px-5 flex items-center gap-2'
      />
      </Link>
     </div>
    </div>
            {isLoading ? (
                <div className='h-full w-full grid place-content-center'>
                    <span className="loader"></span>
                </div>
            ) : (
                
                <div className='h-full w-full px-2 py-2  flex gap-6 flex-wrap cursor-pointer'>
                    
                   {
                    allData && allData.map((item) => {
                        const templateItem = template.find(t => t.id == item.Templates_Id);
                        if (templateItem) {
                            console.log(templateItem.image);
                        
                            return (
                                <>
                                <div key={item.id} className='bg-white max-w-[200px] mt-4 w-full h-fit shadow-sm object-contain border-solid border-2 border-black rounded-md overflow-hidden' >
                                   
                                    <img src={templateItem.image} alt={templateItem.name} className='w-[200px] border-black border-b-2  h-[300px] '
                                    onClick={() => usersResume(item.$id)}/>
                                    <div className='flex justify-between text-black gap-2 py-2 px-1 items-center'>
                                      <p className=' text-md truncate '>{item.Resum_Title}</p>
                                     <div>
                                        
                                     
                                     <MdDeleteOutline onClick={() => handleOpen(item.$id)} className='text-xl transition-all hover:text-red-500' />
                                     
                                     </div>
                                    </div>
                                </div>
                               <div>
                               <Modal 
                                size="md" 
                                isOpen={isOpen} 
                                onClose={onClose}
                                
                              >
                                <ModalContent>
                                  {(onClose) => (
                                    <>
                                      <ModalHeader className="flex flex-col gap-1">{resumeTitle}</ModalHeader>
                                      <ModalBody>
                                        <p> 
                                        Are you sure you want to delete this Resume ?
                                        </p>
                                        
                                        
                                      </ModalBody>
                                      <ModalFooter>
                                        <NextUIButton color="danger" variant="light" onPress={onClose}>
                                          Close
                                        </NextUIButton>
                                        <NextUIButton color="primary" onPress={handleDelete}>
                                        Delete
                                        </NextUIButton>
                                      </ModalFooter>
                                    </>
                                  )}
                                </ModalContent>
                                </Modal>
                               </div>
                                </>
                            )
                        }
                        return null; // Return null if there's no matching template
                     })
                   }
                </div>
            )}
        </div>
    )
    
}

export default Dashboard