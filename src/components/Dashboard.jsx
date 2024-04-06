import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import useAppwriteStore from '../Store/AppwriteStore'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

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
    const {allResumeData, allData} = useAppwriteStore()
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        if(id){
            allResumeData(id)
            setTimeout(() => {
                setIsLoading(false)
            }, 3000);
        }
    },[])

    const usersResume = (id) => {
        if(id){
            navigate(`/editor/${id}`)
        }
    }


    return (
        <div className='w-full h-screen bg-[rgb(250,247,254)]'>
            {isLoading ? (
                <div className='h-full w-full grid place-content-center'>
                    <span className="loader"></span>
                </div>
            ) : (
                <div className='h-full w-full flex gap-10 flex-wrap cursor-pointer'>
                   {
                    allData && allData.map((item) => {
                        const templateItem = template.find(t => t.id == item.Templates_Id);
                        if (templateItem) {
                            console.log(templateItem.image);
                        
                            return (
                                
                                <div key={item.id} >
                                   
                                    <img src={templateItem.image} alt={templateItem.name} className='w-[200px]   h-[300px] shadow-sm object-contain border-solid border-2 border-blue-700'
                                    onClick={() => usersResume(item.$id)}/>
                                </div>
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