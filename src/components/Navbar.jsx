import React from 'react';
import Button from './Button';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { BsDownload } from 'react-icons/bs';
import useResumeStore from '../Store/store';

function Navbar() {
  const { selectedTemplateId } = useResumeStore();

  const handleDownload = () => {
  
      const elements = document.querySelectorAll(".clickable-element");
      elements.forEach((element)=>{
        
          element.classList.remove('activeelement');
        })
      
    let main;
    if (selectedTemplateId === 1) {
      main = document.getElementById('resume1pdf');
    } else if (selectedTemplateId === 2) {
      main = document.getElementById('resume2pdf');
    }

    html2canvas(main, { logging: true, letterRendering: 1, allowTaint: true }).then(function (canvas) {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('resume.pdf');
    });
  };

  return (
    <div className='flex shadow-sm items-center border-b-2 z-50 border-solid justify-between gap-4 px-1 py-3 bg-white sticky top-0 left-0 w-full'>
     <div className='max-w-[300px] w-full text-center'>
     <p onClick={() => window.location.reload()} className='text-2xl font-[Roboto] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5] cursor-pointer'>Resume editor</p>
     </div>
      <Button
        label='Download'
        classes='text-white bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-full py-2 px-5 flex items-center gap-2'
        icon={<BsDownload />}
        onClick={handleDownload}
      />
    </div>
  );
}

export default Navbar;
