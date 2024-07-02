import React from 'react'
import { CheckCircle2 } from 'lucide-react';
import Aos from 'aos';
export default function Price() {
    const pricingOptions = [
        {
          title: "Free",
          price: "$0",
          features: [
            "Private board sharing",
            "5 Gb Storage",
            "Web Analytics",
            "Private Mode",
          ],
        },
        {
          title: "Pro",
          price: "$10",
          features: [
            "Private board sharing",
            "10 Gb Storage",
            "Web Analytics (Advance)",
            "Private Mode",
          ],
        },
        {
          title: "Enterprise",
          price: "$200",
          features: [
            "Private board sharing",
            "Unlimited Storage",
            "High Performance Network",
            "Private Mode",
          ],
        },
      ];
  return (
    <>
    <div className='mt-32'>
        <h1 className='mt-12 text-center text-3xl sm:text-5xl lg:text-6xl'>Pricing</h1>
    <div data-aos="fade-up"
     data-aos-anchor-placement="top-center" className='flex flex-wrap justify-center mt-12  '>
        {pricingOptions.map((option,index)=>(
            <div key={index} className='w-full p-2 sm:w-1/2 lg:w-1/3 '>
                <div className='p-10 border border-neutral-700 rounded-xl'>
                    <h1 className='text-4xl mb-8'>{option.title}  {option.title==="Pro" && <span className='text-xl mb-4 text-transparent bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text ml-2'>(Most Popular)</span>}</h1>
                    <p className='mb-8'>
                        <span className='text-5xl '>{option.price}</span>
                <span className='text-neutral-400 tracking-tight'> /Month</span>

                    </p>
                    <ul>
                        {option.features.map((list,index)=>(
                                <li className='mt-8 items-center flex' key={index}>
                                    <span className='text-red-600'>< CheckCircle2/>   </span>       
                                 <span  className='ml-2'>{list}</span>

                                </li>
                        ))}
                    </ul>
                        <button className='w-full p-2 rounded-lg h-12 hover:bg-orange-900 transition duration-200 border border-orange-900  mt-8 '>Subscribe</button>
                </div>
            </div>
        ))}
    </div>
    </div>
    </>
  )
}
