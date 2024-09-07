import React from 'react'

function navbar() {
  return (
    <nav className=" w-full flex rounded-md  z-10 fixed bg-zinc-100 shadow-lg">
      <div className="container mx-auto px-20 py-3 flex  justify-between gap-40 items-center">
        {/* Logo */}
        <div className=" text-white text-2xl font-bold">
          <a href="/"><img src="logo.jpg" className='w-14 h-14 bg-center rounded-full'/></a>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8 bg-inherit  font-semibold">
          <a href="/" className="hover:text-yellow-400">Home</a>
          <a href="/about" className="hover:text-yellow-400">About</a>
          <a href="/talk" className="hover:text-yellow-400">Talk</a>
          <a href="/projects" className="hover:text-yellow-400">Projects</a>
          <a href="/services" className=" hover:text-yellow-400">Services</a>
        </div>

        {/* Sign in*/}
        <div className="hidden md:flex  space-x-4 items-center">
          <a href='/login' className='hover:text-yellow-400'>Sign-in</a> 
          <h3> or</h3>
          <a href="/reg" className='hover:text-yellow-400'>Register</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default navbar