import React from 'react'
import img from '../assets/code.jpg'
import { CheckCircle2 } from 'lucide-react'
export default function Featuresection() {
    const checklistItems = [
        {
          title: "Code merge made easy",
          description:
            "Track the performance of your VR apps and gain insights into user behavior.",
        },
        {
          title: "Review code without worry",
          description:
            "Track the performance of your VR apps and gain insights into user behavior.",
        },
        {
          title: "AI Assistance to reduce time",
          description:
            "Track the performance of your VR apps and gain insights into user behavior.",
        },
        {
          title: "Share work in minutes",
          description:
            "Track the performance of your VR apps and gain insights into user behavior.",
        },
      ];
      
  return (
    <><div className='container mt-20'>
        <h1 className='text-3xl sm:text-5xl mt-6 tracking-wide lg:text-6xl text-center'>Accelerate your <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent '>coding workflow</span></h1>
    <div className='flex flex-wrap mt-1 justify-center '>

    <div className='w-full p-2 lg:w-1/2'>
    <img data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" src={img} alt="code" />
    </div>
    <div className='pt-12 w-full lg:w-1/2'>
{checklistItems.map((list,index)=>(
    <div key={index} className='flex mb-8'>
        <div className='text-green-600 bg-neutral-900 h-10 w-10 p-2 rounded-full justify-center items-center'>
            <CheckCircle2/>
        </div>
            <div>
                <h5 className='text-xl mt-1 mb-2'>{list.title} </h5>

                <p className='text-md p-1 text-neutral-500'>{list.description}</p>
            </div>

    </div>
))}
    </div>
    </div>
    </div>
    </>
  )
}
