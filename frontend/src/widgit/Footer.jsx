import React from 'react'

function Footer() {
  return (
    <div className='bottom-0 w-full h-fit flex bg-black text-gray-400'>
      <div className='flex w-screen gap-52 justify-center my-10 '>
        <img  className="w-[15vw] rounded-full h-fit p-2 mr-15 ml-5" src='logo.jpg' alt="Logo image" />
        <nav className='flex gap-20 '>
            <ul>
                <li>Projects</li>
                <li>Collections</li>
                <li>Build a Project</li>
                <li>How to Build</li>
                <li>Project Policies</li>
                <li>FAQ</li>
            </ul>
            <ul>
                <li>About Us</li>
                <li>Education</li>
                <li>Our Team</li>
                <li>Publications</li>
                <li>Acknowledgements</li>
                <li>Contact Us</li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Footer
