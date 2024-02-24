import React from 'react'

function About() {
  return (
      <>
    <div className='about'>
      <h1 className='text-4xl mt-[9vw] ml-[6vw]'>Related deals you might like for</h1>
      </div>

      <div className="cards flex justify-evenly">
      <div className="cards h-[20vw] w-[40vh] ml-24 mt-10">
        <img className='h-[15vh] ml-14' src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" alt="" />
        <h1 className='text-lg font-semibold ml-14 mt-4'>Website Builder 1</h1>
        <h1 className='mt-2'>Computer Modern Classes with Wix Support</h1>
        <div className="cost flex space-x-3 mt-4">
        <h1 className='text-xl'>$39.96</h1>
        <h1 className='text-zinc-400'>$49.96</h1>
        <h1 className='text-red-500'>(20% off)</h1>
        </div>
        <button className='h-[8vh] w-[15vw] text-lg mt-4 ml-5 text-white rounded-xl bg-blue-600'>View Deal</button>
      </div>

      <div className="cards h-[20vw] w-[40vh] ml-24 mt-10">
        <img className='h-[15vh] ml-14' src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" alt="" />
        <h1 className='text-lg font-semibold ml-14 mt-4'>Website Builder 1</h1>
        <h1 className='mt-2'>Computer Modern Classes with Wix Support</h1>
        <div className="cost flex space-x-3 mt-4">
        <h1 className='text-xl'>$39.96</h1>
        <h1 className='text-zinc-400'>$49.96</h1>
        <h1 className='text-red-500'>(20% off)</h1>
        </div>
        <button className='h-[8vh] w-[15vw] text-lg mt-4 ml-5 text-white rounded-xl bg-blue-600'>View Deal</button>
      </div>

      <div className="cards h-[20vw] w-[40vh] ml-24 mt-10">
        <img className='h-[15vh] ml-14' src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" alt="" />
        <h1 className='text-lg font-semibold ml-14 mt-4'>Website Builder 1</h1>
        <h1 className='mt-2'>Computer Modern Classes with Wix Support</h1>
        <div className="cost flex space-x-3 mt-4">
        <h1 className='text-xl'>$39.96</h1>
        <h1 className='text-zinc-400'>$49.96</h1>
        <h1 className='text-red-500'>(20% off)</h1>
        </div>
        <button className='h-[8vh] w-[15vw] text-lg mt-4 ml-5 text-white rounded-xl bg-blue-600'>View Deal</button>
      </div>
      </div>

      <div className="signup flex place-content-between px-8 mt-44">
        <h1 className='text-5xl '>Sign up and get exclusive <br /> special deals</h1>
        <button className='h-[9vh] w-[10vw] rounded-r-2xl mt-5 bg-blue-600 text-white text-xl'>Sign up</button>
      </div>
  </>
  )
}

export default About
