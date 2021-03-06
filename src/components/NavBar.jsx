import React from 'react'

const NavBar = () => {
  return (
    <nav className=' static sm:sticky top-0 bg-white w-[99vw] items-center py-10 sm:h-[110px] sm:flex sm:py-0 '>
        <img  className='w-[212px] mx-auto sm:ml-[calc(1vw+5rem)]' src="images/logo.svg" alt=" logo" />
        <button className='block p-5 mx-auto sm:ml-auto sm:mr-0 '>Login</button>
        <button className='block text-white mx-auto sm:mx-10 bg-[#01CB63] rounded-lg w-[144px] h-[60px]'>Register</button>
    </nav>
  )
}

export default NavBar