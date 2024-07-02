import React from 'react'

export default function Footer() {
     const resourcesLinks = [
        { href: "#", text: "Getting Started" },
        { href: "#", text: "Documentation" },
        { href: "#", text: "Tutorials" },
        { href: "#", text: "API Reference" },
        { href: "#", text: "Community Forums" },
      ];
      
     const platformLinks = [
        { href: "#", text: "Features" },
        { href: "#", text: "Supported Devices" },
        { href: "#", text: "System Requirements" },
        { href: "#", text: "Downloads" },
        { href: "#", text: "Release Notes" },
      ];
      
   const communityLinks = [
        { href: "#", text: "Events" },
        { href: "#", text: "Meetups" },
        { href: "#", text: "Conferences" },
        { href: "#", text: "Hackathons" },
        { href: "#", text: "Jobs" },
      ];
  return (
    <>
    <div className='container mt-20 border-t py-10 border-neutral-700 '>
        <div className=' grid grid-cols-2  lg:grid-cols-3 gap-4 '>
       <div className='box-1 '>
       <h3 className='text-md font-semibold mb-4'>Resources</h3>
        <ul>
            {resourcesLinks.map((list,index)=>(
                <li  data-aos="fade-right" className='my-2 ml-1 text-neutral-300  ' key={index}>
                    <a className='hover:text-orange-600 hover:ml-1 transition' href={list.href}>{list.text}</a>
                </li>
            ))}
        </ul>
       </div>
       <div className='box-2 '>
       <h3 className='text-md font-semibold mb-4'>Platforms</h3>
        <ul>
            {platformLinks.map((list,index)=>(
                <li data-aos="fade-right" className='my-2 ml-1 text-neutral-300  ' key={index}>
                    <a className='hover:text-orange-600 hover:ml-1 transition' href={list.href}>{list.text}</a>
                </li>
            ))}
        </ul>
       </div>
       <div className='box-3 '>
       <h3 className='text-md font-semibold mb-4'>Community</h3>
        <ul>
            {communityLinks.map((list,index)=>(
                <li data-aos="fade-right" className='my-2 ml-1 text-neutral-300  ' key={index}>
                    <a className='hover:text-orange-600 hover:ml-1 transition' href={list.href}>{list.text}</a>
                </li>
            ))}
        </ul>
       </div>
        </div>
    </div>
    
    </>
  )
}
