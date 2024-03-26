import React from 'react'
import Tabs from './Tabs/TabsLists/Tabs';
import Accordian from './Accordian/Accordian';
function Leftaside() {
  return (
        <div className="flex overflow-y-auto max-w-[300px] w-full shadow-sm border-r-2 border-solid   flex-col bg-white fixed h-screen left-0 top-16  ">   
        <Tabs/>
        </div>  
      );
}
export default Leftaside