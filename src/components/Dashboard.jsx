import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useAppwriteStore from '../Store/AppwriteStore';
import { useState } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";
import useResumeStore from '../Store/store';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button as NextUIButton, useDisclosure } from "@nextui-org/react";
import { resumeData } from '../Data/resume1';
import {toast} from 'react-toastify'

function Dashboard() {
    const template = [
        {
            id: 1,
            name: "Template 1",
            image: "../images/resume1.png"
        },
        {
            id: 2,
            name: "Template 2",
            image: "../images/resume2.png"
        }
    ];
    const { allResumeData, allData, deleteResume, logOut } = useAppwriteStore();
    const {setResumeData }= useResumeStore();
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [resumeTitle, setResumeTitle] = useState('');
    const [deleteId, setDeleteId] = useState('');

    const usersResume = (id) => {
        if (id) {
            navigate(`/editor/${id}`);
        }
    };

    const handleOpen = (id) => {
        if (id) {
            const filterData = allData.find((item) => item.$id === id);
            setResumeTitle(filterData.Resume_Title);
            setDeleteId(id); // Set the deleteId state to the id of the resume to be deleted
            onOpen(); // Open the delete confirmation modal
        }
    };
    

    const handleDelete = () => {
        if (deleteId) {
            deleteResume(deleteId);
            onClose();
            toast.success("Resume Deleted Successfully");
            setDeleteId('');
        }
        else{
            onClose();
        setDeleteId('');
        toast.error("Error in Deleting Resume");
        }
    };

    const handleLogout = () => {
        logOut();
        navigate("/");
    };

    const handleCreate = () => {
        navigate("/editor");
        setResumeData(resumeData);
    }

    useEffect(() => {
        if (id) {
            allResumeData(id);
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }
    }, [handleDelete]);

    return (
        <div className='w-full  h-screen bg-[rgb(250,247,254)] '>
            <div className='flex shadow-sm items-center  z-50  justify-between gap-1 px-1 py-3 bg-white sticky top-0 left-0 w-full'>
                <div className=' md:max-w-[300px] md:w-full text-center'>
                    <Link to={"/editor"}>
                        <p className='text-2xl font-[Roboto] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5] cursor-pointer'>Resume Editor</p>
                    </Link>
                </div>
                <div className='flex gap-4 items-center'>
                    <Button
                        label='Logout'
                        classes='text-black bg-[#FEE7EF] duration-150 hover:bg-[#FDD0DF] active:bg-[#FAA0BF] rounded-full py-2 px-5 flex items-center gap-2'
                        onClick={handleLogout}
                    />
                   
                        <Button
                        onClick={handleCreate}
                            label='Create New Resume'
                            classes='text-white bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-full py-2 px-5 flex items-center gap-2'
                        />
                 
                </div>
            </div>
            {isLoading ? (
                <div className='h-full w-full bg-[rgb(250,247,254)] grid place-content-center'>
                    <span className="loader"></span>
                </div>
            ) : (
                    <div className='h-full bg-[rgb(250,247,254)] w-full px-2 py-2  flex gap-6 flex-wrap cursor-pointer'>

                        {allData.length === 0 ? (
                            <div className='w-full grid place-content-center'>
                                <p className='text-2xl text-red-400 text-center'> No matching data found</p>
                                <p className='text-lg text-black text-center'>please create your resume</p>
                            </div>
                        ) : (
                                allData.map((item,i) => {
                                    const templateItem = template.find(t => t.id == item.Templates_Id);
                                    if (templateItem) {
                                        return (
                                            <div key={i} className='bg-white max-w-[200px] mt-4 w-full h-fit shadow-sm object-contain border-solid border-2 border-black rounded-md overflow-hidden' >
                                                <img src={templateItem.image} alt={templateItem.name} className='w-[200px] border-black border-b-2  h-[300px] ' onClick={() => usersResume(item.$id)} />
                                                <div className='flex justify-between text-black gap-2 py-2 px-1 items-center'>
                                                    <p className=' text-md truncate '>{item.Resum_Title}</p>
                                                    <div>
                                                        <MdDeleteOutline onClick={() => handleOpen(item.$id)} className='text-xl transition-all hover:text-red-500' />
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                    return null;
                                })
                            )}
                    </div>
                )}
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
        </div>
    );
}

export default Dashboard;
