import React from 'react'

function LandingPage() {
  return (
    <>
    <div className='heading'>
      <h1 className='text-[5vw] ml-7 mt-6 font-normal'>Best Website builders in the US</h1>
    </div>
    <div className="choose-icons flex items-start px-6 pt-2 pb-2 mt-2 space-x-10 border-b-[1px] border-zinc-500 border-t-[1px]">
        <h1>Last Updated - February 22,2020</h1>
        <h1>Advertising Disclosure</h1>
        <h1 className='absolute right-7'>Top Relevant</h1>
    </div>
    <div className="options flex justify-between w-[80vw] px-7 mt-6">
        {["Tools", "AWS Builders", "Start Build", "Build Supplies", "Tooling", "BlueHosting"].map((item, index) =>(
            <a key={index} className='font-md'>{item}</a>
        ))}
    </div>
    <div className="options flex space-x-3 w-[80vw] px-7 mt-6">
        {["Home >", "Hosting for all >", "Hosting >", "Hosting6 >", "Hosting5"].map((item, index) =>(
            <a key={index} className='font-md'>{item}</a>
        ))}
    </div>
 </>
  )
}

export default LandingPage

// https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__
