import React, { useEffect, useState } from 'react';
import Button from './Button';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { BsDownload } from 'react-icons/bs';
import useResumeStore from '../Store/store';
import { IoSaveOutline } from "react-icons/io5";
import useAppwriteStore from '../Store/AppwriteStore';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {toast} from 'react-toastify';
import { FaRegSave } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx"
import { FiLogIn } from "react-icons/fi";;
import { CiLogin } from "react-icons/ci";
import {Modal, ModalContent, ModalHeader, ModalBody, Button as NextUIButton, ModalFooter, useDisclosure} from "@nextui-org/react";


function Navbar() {
  const {  addNewResume, userData, updateResume } = useAppwriteStore();
  const {resumeData, selectedTemplateId, singleResumeData} = useResumeStore();
  const [resumeTitle, setResumeTitle] = useState('');
  const navigate = useNavigate();
  const {id} = useParams();
  const {isOpen, onOpen, onClose} = useDisclosure();

  const handleDownload = () => {
    const elements = document.querySelectorAll(".clickable-element");
    elements.forEach((element) => {
        element.classList.remove('activeelement');
    });

    let main;
    if (selectedTemplateId === 1) {
        main = document.getElementById('resume1pdf');
    } else if (selectedTemplateId === 2) {
        main = document.getElementById('resume2pdf');
    }

    html2canvas(main, { logging: true, letterRendering: 1, allowTaint: true, dpi: 300 }).then(function (canvas) {
        const imgData = canvas.toDataURL('image/png');
        const divHeight = main.offsetHeight;
        const divWidth = main.offsetWidth;
        const aspectRatio = divWidth / divHeight;
        const pdfHeight = 297; // A4 height in mm
        const pdfWidth = pdfHeight * aspectRatio;
        const pdf = new jsPDF('p', 'mm', [pdfWidth, pdfHeight]);
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('resume.pdf');
    });
};


  const handleSave = () => {   
     if(userData.userStatus == true){
      const resumeDataString = JSON.stringify(resumeData);
      addNewResume(resumeDataString, userData.userID, selectedTemplateId, resumeTitle);
      toast.success("Resume Saved Successfully");
      onClose();
     }else{
      console.log("please login")
      toast.error("Error in Saving Resume");
      onClose();
     }
  };

  const handleDashboard = () => {
    navigate(`/dashboard/${userData.userID}`)
  }

  const handleOpen = () => { 
        onOpen();      
  }

  const handleUpdate = () => {
    if(id){
      const resumeDataString = JSON.stringify(resumeData);
      updateResume(id, resumeDataString, selectedTemplateId);
      toast.success("Resume Updated Successfully");
    }else{
      toast.error("Error in Updating Resume");
    }
  }

  const handleLogin = () => {
    navigate('/login')
  }

  // useEffect(() => {
  //   singleResumeData(id)
  //     if(singleData){
  //       const resumePure = JSON.parse(singleData[0].Resume_Data)
  //       setResumeTitle(resumePure)
  //       console.log(resumeTitle)
  //     }
  // },[id])

  return (
    <div className='flex shadow-sm items-center border-b-2 z-50 border-solid justify-between gap-4 px-1 py-3 bg-white sticky top-0 left-0 w-full'>
     <div className='max-w-[300px] w-full text-center'>
     <p onClick={() => window.location.reload()} className='text-2xl font-[Roboto] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5] cursor-pointer'>Resume Editor</p>
     </div>
    
      <div className='flex gap-4'>
      { userData.userStatus &&  <Button
        label='Dashboard'
        classes='text-black bg-[#EDEDED] duration-150 hover:bg-[#d9d9d9] active:bg-[#cccccc] rounded-full py-2 px-5 flex items-center gap-2'
        icon={<RxDashboard/>}
        onClick={handleDashboard}
      />}
      {
        userData.userStatus && id &&<Button
        label='Update'
        classes='text-black bg-[#EDEDED] duration-150 hover:bg-[#d9d9d9] active:bg-[#cccccc] rounded-full py-2 px-5 flex items-center gap-2'
        icon={<IoSaveOutline />}
        onClick={handleUpdate}
      /> 
      }
      {
        userData.userStatus && !id && (
          <Button
      label='Save'
      classes='text-black bg-[#EDEDED] duration-150 hover:bg-[#d9d9d9] active:bg-[#cccccc] rounded-full py-2 px-5 flex items-center gap-2'
      icon={<FaRegSave /> }
      onClick={() => handleOpen()}
    />
        )
      }
     {
       !userData.userStatus && (
        <Button
        label='Login'
        classes='text-black bg-[#EDEDED] duration-150 hover:bg-[#d9d9d9] active:bg-[#cccccc] rounded-full py-2 px-5 flex items-center gap-2'
        icon={<FiLogIn /> }
        onClick={handleLogin}
      />
       )
     }
      <Button
        label='Download'
        classes='text-white bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-full py-2 px-5 flex items-center gap-2'
        icon={<BsDownload />}
        onClick={handleDownload}
      />
      <Modal 
                                size="md" 
                                isOpen={isOpen} 
                                onClose={onClose}
                                
                              >
                                <ModalContent>
                                  {(onClose) => (
                                    <>
                                      <ModalHeader className="flex flex-col gap-1">Add New Project</ModalHeader>
                                      <ModalBody>
                                        <p> 
                                        Enter the project title for your resume
                                        </p>
                                        <input type="text" value={resumeTitle} placeholder='Project Title' onChange={(e)=>setResumeTitle(e.target.value)} className="w-full px-2 py-2 rounded-lg border-gray-300 border-2 border-solid mt-2" />
                                        
                                      </ModalBody>
                                      <ModalFooter>
                                        <NextUIButton color="danger" variant="light" onPress={onClose}>
                                          Close
                                        </NextUIButton>
                                        <NextUIButton color="primary" onPress={handleSave}>
                                        Save
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

export default Navbar;