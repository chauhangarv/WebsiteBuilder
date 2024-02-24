import React from 'react'

function Navbar() {
  return (
    <div className='h-16  bg-black text-white flex justify-center items-center space-x-32'>
        <div className="icon h-10 w-60 bg-slate-200 rounded-md">
        </div>
        <div className="links flex space-x-12">
            {["Categories", "Website Builders", "Today's deals"].map((item, index) => (
                <a key={index} className='font-normal text-lg'>{item}</a>
            ))}
        </div>
    </div>
  )
}

export default Navbar
