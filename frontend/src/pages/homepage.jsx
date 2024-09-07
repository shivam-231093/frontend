import React from 'react'

import NavBar from '../widgit/navbar'

function homepage() {
    const projects=[
        {
            "name":"Pulsar",
            "image":"Pulsar_thumbnail.gif",
            "detail":"Pulsars are rapidly spinning neutron stars that emit beams of electromagnetic radiation, acting like cosmic lighthouses.",
            "link":"pulsar"
        },
        {
            "name":"Pulsar",
            "image":"Pulsar_thumbnail.gif",
            "detail":"Pulsars are rapidly spinning neutron stars that emit beams of electromagnetic radiation, acting like cosmic lighthouses.",
            "link":"pulsar"
        },
        {
            "name":"Pulsar",
            "image":"Pulsar_thumbnail.gif",
            "detail":"Pulsars are rapidly spinning neutron stars that emit beams of electromagnetic radiation, acting like cosmic lighthouses.",
            "link":"/pulsar"
        },
        {
            "name":"Pulsar",
            "image":"Pulsar_thumbnail.gif",
            "detail":"Pulsars are rapidly spinning neutron stars that emit beams of electromagnetic radiation, acting like cosmic lighthouses.",
            "link":"pulsar"
        },
    ]
    return (
    <>
    <div className='flex-wrap items-center -scroll-m-20 justify-between'>

      
        <div className=''>
        <div className="relative h-screen bg-cover bg-clip-text " style={{ backgroundImage: "url('banner.webp')"}}>
        <div className="absolute inset-0 overflow-hidden bg-black h-100 bg-cover opacity-90 transform -skew-y-3 origin-top-left" style={{ backgroundImage: "url('banner.webp')"}}>
        
        <div className="relative flex flex-col skew-y-3 items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Research Route
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-6">
            Unleashing the Power of Citizen Science
            </p>
            <button onClick={() => window.location.href = '/projects'} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full uppercase transition duration-300">
            Get Started
            </button>
        </div>
        </div>
        </div>
        </div>

        <div className="relative flex flex-col mt-10 items-center justify-center h-full text-center  px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Featured Projects
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-6">
            Explore the project section for more projects
            </p>
            <button onClick={() => window.location.href = '/projects'} className="bg-orange-500 hover:bg-orange-600  font-bold py-3 px-8 rounded-full uppercase transition duration-300">
            Get Started
            </button>
            <div className='mt-10 m-10 flex gap-2 justify-center flex-wrap' >
                
            {projects.map((name)=>(
                <div onClick={() => window.location.href = `${name.link}`} className='w-96 h-80 m-6 hover:flex-col hover:justify-center hover:items-center  rounded-3xl hover:overflow-visible hover:h-auto overflow-hidden bg-zinc-100'>
                    <img className='bg-zinc-600 w-full  rounded-xl h-60 ' src={name.image} alt="kjkj" />
                      <span class="mb-1 block text-sm leading-6 font-semibold text-indigo-500">{name.name}</span>
                    <h3 class=" ml-8 mb-5 w-80 text-slate-900 flex-col items-center font-semibold">
                      {name.detail}
                   </h3>
                </div>
            ))}
            </div>
        </div>


    </div>
    </>
  )
}

export default homepage