import React from 'react'
import Button from './Button'
import html2canvas from 'html2canvas';
import { BsDownload } from "react-icons/bs";
function Navbar() {
  const handleDownload = () => {
    const main = document.getElementById('resumepdf');
    const profileImage = document.querySelector('.imgess');
  
    if(!profileImage){
      alert("Please add a profile image");
    }
    // Wait for the profile image to load completely
 
      html2canvas(main, { logging: true, letterRendering: 1,allowTaint : true},).then(function(canvas) {
        // Convert canvas to image
        const image = canvas.toDataURL('image/png');
        console.log('image loded')
  
        // Create a temporary link to trigger the download
        const link = document.createElement('a');
        link.href = image;
        link.download = 'resume.png';
        link.click();
      });
  
    console.log("image is not loading")
  };
  
  return (
    <div className='flex shadow-sm items-center border-b-2 z-50 border-solid justify-end gap-4 px-1 py-3 bg-white sticky top-0 left-0 w-full'>
        {/* <Button label="Share" classes="bg-[#F0F0F0] py-2 px-10 rounded-full text-black font-semibold "/> */}
        <Button label="Download" classes="bg-blue-700 text-white py-2 px-5 rounded-full flex items-center gap-2" icon={<BsDownload/>} onClick={handleDownload}/>
    </div>
  )
}
export default Navbar