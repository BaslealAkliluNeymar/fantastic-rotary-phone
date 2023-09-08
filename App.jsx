import './App.css'
import Nav from './Components/Nav'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Images from './components/Images';
import { useState } from 'react';
function App() {
  const [isOpen,setIsOpen] = useState(false)
 
  function toggleOpen(){
    setIsOpen(!isOpen)
  }
  console.log(isOpen)
  return (
    <section className='flex flex-col items-center  w-[60%] text-center m-0 m-auto p-5 bg-slate-800 h-full text-white'>
      <div className='flex justify-between items-center w-full text-center  p-5 bg-slate-800 h-full text-white'>
        <Nav />
        <MoreVertIcon onClick={toggleOpen} className='relative'/>
        {
          isOpen && (
            <div className='absolute top-[100px] right-[320px] w-[20%] h-[20%]  bg-slate-400 flex justify-center items-center'>
              <ul className='flex flex-col justify-between gap-1 items-center p-2'>
                <li>Select Items</li>
                <li>Settings</li>
                <li>Trash</li>
                <li>Favorites</li>
              </ul>
            </div>
          )
        }
      </div>
      <div className="container">
        <Images />
      </div>
      
    </section>
  )
}

export default App
