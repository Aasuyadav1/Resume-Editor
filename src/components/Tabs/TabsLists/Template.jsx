import React, { useEffect } from 'react'
import Button from '../../Button'
import { FaCheckCircle } from "react-icons/fa";
import useResumeStore from '../../../Store/store';

function Template() {
    const {selectedTemplateId, setSelectedTemplateId} = useResumeStore();

    const template = [
        {
            id: 1,
            name : "Template 1",
            image : "./images/resume1.png"
        },
        {
            id: 2,
            name : "Template 2",
            image : "./images/resume2.png"
        }
    ]
    const handleSelectId = (id) => {
        setSelectedTemplateId(id)
    }
    useEffect(() => {
        console.log(selectedTemplateId)
    },[])
  return (
    <div className=' h-full w-full py-4  pb-12'>
        <div className='flex gap-4 flex-col w-full items-center mx-auto  h-full '>
            {
                template.map((data)=>(
                    <div key={data.id} className='group hover:cursor-pointer relative'>
              <img src={data.image} alt={data.name}className='w-[200px]  h-[300px] shadow-sm object-contain border-solid border-2 border-blue-700' />
                <Button bgColor="bg-blue-700" color="text-white" label={`${selectedTemplateId == data.id ? "Selected Template" : "Select Template"}`} classes={`w-full group-hover:opacity-100 ${selectedTemplateId == data.id ? "opacity-100" : "opacity-0"} transition-all duration-[3s] delay-75 ease-in-out`} onClick={() => handleSelectId(data.id)}/>
                {
                    selectedTemplateId == data.id && 
                    <FaCheckCircle className='absolute opacity-100 text-blue-700 text-4xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-[3s] delay-75 ease-in-out'/>
                }
                </div>
                ))
            }
            </div>
       
    </div>
  )
}

export default Template