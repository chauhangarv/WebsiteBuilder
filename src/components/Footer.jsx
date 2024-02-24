import React from 'react'

function Footer() {
  return (
    <div className='bg-zinc-700 text-white mt-16 h-[60vh] flex justify-evenly'>
      <div className="content mt-12">
        <h1 className='text-3xl'>CATEGORIES</h1>        
        <h1 className='mt-4'>Web Builder</h1>        
        <h1 className='mt-4'>Hosting</h1>        
        <h1 className='mt-4'>Data Cente</h1>        
        <h1 className='mt-4'>Robotic-Automation</h1>        
      </div>
      <div className="content mt-12">
        <h1 className='text-3xl'>CONTACT</h1>
        <h1 className='mt-4'>Contact</h1>
        <h1 className='mt-4'>Privacy Policy</h1>
        <h1 className='mt-4'>Terms of Service</h1>
        <h1 className='mt-4'>Categories</h1>
        <h1 className='mt-4'>About</h1>
      </div>
      <h1 className='mt-44'>United States</h1>
    </div>
  )
}

export default Footer
