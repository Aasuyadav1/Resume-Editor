import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import useAppwriteStore from '../Store/AppwriteStore'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { MdDeleteOutline } from "react-icons/md";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

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
    const {allResumeData, allData, deleteResume} = useAppwriteStore()
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

    useEffect(() => {
        if(id){
            allResumeData(id)
            setTimeout(() => {
                setIsLoading(false)
            }, 3000);
        }
    },[handleDelete])

    return (
        <div className='w-full  h-screen bg-[rgb(250,247,254)] px-2 py-2'>
            {isLoading ? (
                <div className='h-full w-full grid place-content-center'>
                    <span className="loader"></span>
                </div>
            ) : (
                <div className='h-full w-full  flex gap-6 flex-wrap cursor-pointer'>
                   {
                    allData && allData.map((item) => {
                        const templateItem = template.find(t => t.id == item.Templates_Id);
                        if (templateItem) {
                            console.log(templateItem.image);
                        
                            return (
                                <>
                                <div key={item.id} className='bg-white max-w-[200px] w-full h-fit shadow-sm object-contain border-solid border-2 border-black rounded-md overflow-hidden' >
                                   
                                    <img src={templateItem.image} alt={templateItem.name} className='w-[200px] border-black border-b-2  h-[300px] '
                                    onClick={() => usersResume(item.$id)}/>
                                    <div className='flex justify-center text-black gap-2 py-2 px-1 items-center'>
                                      <p className=' text-md truncate '>{item.Resume_Title} Resume title ye he hai to loro pudna po opo p</p>
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
                                        <Button color="danger" variant="light" onPress={onClose}>
                                          Close
                                        </Button>
                                        <Button color="primary" onPress={handleDelete}>
                                        Delete
                                        </Button>
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