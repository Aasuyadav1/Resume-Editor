import React from 'react'
import Resume1 from './components/Resume1'
import Leftaside from './components/Lefttaside'
import Rightaside from './components/Rightside'
import Navbar from './components/Navbar'



function App() {
  return (
    <div >
      <Navbar/>
       <div className='flex justify-center items-center'>
       <Leftaside/>
      <Resume1 />
      
      <Rightaside/>
       </div>
     
    </div>
  )
}

export default App