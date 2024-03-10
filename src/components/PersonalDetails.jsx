import React, { useEffect } from 'react'
import InputField from './InputField/InputField'
import { useState } from 'react'
import useResumeStore from '../Store/store'

function PersonalDetails() {
    const [name, setName] = useState('')
    const [profession, setProfession] = useState('')
    const [description, setDescription] = useState('')
    const {resumeData} = useResumeStore()
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleProfession = (e) => {
        setProfession(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    useEffect(() => {
        setName(resumeData.title)
        setProfession(resumeData.subtitle)
        setDescription(resumeData.description)
    },[resumeData])
  return (
    <>
    <InputField label="Name" type="text" onChange={handleName} value={name}/>
    <InputField label="Profession" type="text" onChange={handleProfession} value={profession}/>
    <InputField label="Profession" type="text" onChange={handleDescription} value={description} />
    </>
  )
}

export default PersonalDetails