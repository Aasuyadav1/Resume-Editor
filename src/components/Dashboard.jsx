import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import useAppwriteStore from '../Store/AppwriteStore'
import { useState } from 'react'

function Dashboard() {
    const {allResumeData, allData} = useAppwriteStore()
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(id){
            const data = allResumeData(id)
            console.log(allData)
            setTimeout(() => {
                setIsLoading(false)
            }, 3000);
        }
    })


  return (
    <div className='w-full h-screen bg-[rgb(250,247,254)]'>
        {isLoading ? <div className='h-full w-full grid place-content-center'><span class="loader"></span></div> : (
            <div className='h-full w-full'>
                <p>Your datas</p>
            </div>
        )}
        
    </div>
  )
}

export default Dashboard