import React, { useEffect, useState } from 'react';
import InputField from '../../InputField/InputField';
import useResumeStore from '../../../Store/store';

function PersonalDetails() {
    const { resumeData, setResumeData } = useResumeStore();
    const [inputFieldData, setInputFieldData] = useState({
        title: '',
        subtitle: '',
        description: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setResumeData(name, 0, name, value);
        console.log("the name is", name)
        setInputFieldData({ ...inputFieldData, [name]: value });
    };

    useEffect(() => {
        setInputFieldData({
            title: resumeData.title,
            subtitle: resumeData.subtitle,
            description: resumeData.description
        });
    }, [resumeData]);

    return (
        <>
            <InputField label="Title" type="text" name="title" onChange={handleChange} value={inputFieldData.title} />
            <InputField label="Profession" name="subtitle" type="text" onChange={handleChange} value={inputFieldData.subtitle} />
            <InputField label="Description" type="text" name="description" onChange={handleChange} value={inputFieldData.description} />
        </>
    );
}

export default PersonalDetails;
