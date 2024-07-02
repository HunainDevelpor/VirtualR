import React from 'react'
import { BotMessageSquare } from 'lucide-react';
import { BatteryCharging } from 'lucide-react';
import { Fingerprint } from 'lucide-react';
import { ShieldHalf } from 'lucide-react';
import { PlugZap } from 'lucide-react';
import { GlobeLock } from 'lucide-react';
function Feature() {
  const featureData=[
    {
      icon:<BotMessageSquare/>,
      text:"Drag-and-Drop Interface",
      description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
    },
    {
      icon:<Fingerprint/>,
      text:"Multi-Platform Compatibility",
      description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
    },
    {
      icon:<ShieldHalf/>,
      text:"Built-in Templates",
      description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
    },
    {
      icon:<BatteryCharging/>,
      text:"Real-Time Preview",
      description:
      "Preview your VR application in real-time as you make changes,allowing for quick iterations and adjustments.",
    },
    {
      icon:<PlugZap/>,
      text:"Collaboration Tools",
      description:
      "Work together with your team in real-time on VR projects,enabling seamless collaboration and idea sharing.",
    },
    {
      icon:<GlobeLock/>,
      text:"Analytics Dashboard",
      description:
      "Gain valuable insights into user interactions and behaviour within your VR applications with an integrated analytics dashboard.",
    },
  ]
  return (
<>
<div className=' relative mt-20 border-b border-neutral-800 min-h-[800px]'>
<div className='text-center'>
<span className='text-orange-500 rounded-full h-6 text-sm uppercase py-1 px-2  bg-neutral-900 '>Feature</span>
<h2 className='my-10 text-3xl mt-10 lg:mt-20 tracking-tight sm:text-5xl lg:text-6xl '>Easily build <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'>your code </span></h2>
</div>

<div className='flex flex-wrap mt-10 lg:mt-20'>
{featureData.map((feature,index)=>(
  <div key={index} data-aos="fade-up"
  data-aos-anchor-placement="top-center" data-aos-duration={`${500+index*1000}`} className='w-full sm:w-1/2 lg:w-1/3'>
    <div className='flex'>
  <div className='flex mx-6 h-10 w-10 p-2 justify-center items-center bg-neutral-900 text-orange-500'>
  {feature.icon}
  </div>
<div>
<h5 className="mt-2 mb-6 text-lg">{feature.text}</h5>

  <p className='text-md p-2 mb-20 text-neutral-500 tracking-tight'>{feature.description}</p>

</div>
    </div>
    </div>

))}

  

</div>

</div>

</>
  )
}

export default Feature