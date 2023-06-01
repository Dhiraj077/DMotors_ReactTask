import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
      setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-5xl mx-auto px-4 '>
      <h1 className='w-full font-extrabold text-3xl text-[#00df9a]'><Link to={'/'}>DGnex</Link></h1>
      <ul className='hidden md:flex'>
        <li className='p-4 text-white hover:text-neutral-300 cursor-pointer'><Link to={'/'}>Home</Link></li>
        <li className='p-4 text-white hover:text-neutral-300 cursor-pointer'><Link to={'/company'}>Company</Link></li>
        <li className='p-4 text-white hover:text-neutral-300 cursor-pointer'><Link to={'/services'}>Services</Link></li>
        <li className='p-4 text-white hover:text-neutral-300 cursor-pointer'><Link to={'/about'}>About</Link></li>
        <li className='p-4 text-white hover:text-neutral-300 cursor-pointer'><Link to={'/contact'}>Contact</Link></li>
        <li className='p-4 text-white hover:text-neutral-300 cursor-pointer'><Link to={'/test'}>Test</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden text-white hover:text-lime-300'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-400 bg-slate-600 ease-in-out duration-500 md:hidden' : 'fixed left-[-100%] '}>
      <h1 className='w-full font-extrabold text-3xl text-[#00df9a] m-6'>DGenx</h1>
        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-gray-700 text-white hover:text-neutral-300'>Home</li>
          <li className='p-4 border-b border-gray-700 text-white hover:text-neutral-300'>Company</li>
          <li className='p-4 border-b border-gray-700 text-white hover:text-neutral-300'>Resources</li>
          <li className='p-4 border-b border-gray-700 text-white hover:text-neutral-300'>About</li>
          <li className='p-4 text-white hover:text-neutral-300'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar