import React from 'react'

function InputField({label, type, onChange, value}) {
  return (
    <input type={type} placeholder={label} value={value} className='w-full px-2 py-2 rounded-lg border-gray-300 border-2 border-solid mt-2' onChange={(e)=>onChange(e)}/>
  )
}

export default InputField