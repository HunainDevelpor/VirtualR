import React from 'react'
import user1 from "../assets/User Profiles/user1.jpg";
import user2 from "../assets/User Profiles/user2.jpg";
import user3 from "../assets/User Profiles/user3.jpg";
import user4 from "../assets/User Profiles/user4.jpg";
import user5 from "../assets/User Profiles/user5.jpg";
import user6 from "../assets/User Profiles/user6.jpg";
export default function Feedback() {
    const testimonials = [
        {
          user: "John Doe",
          company: "Stellar Solutions",
          image: user1,
          text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
        },
        {
          user: "Jane Smith",
          company: "Blue Horizon Technologies",
          image: user2,
          text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
        },
        {
          user: "David Johnson",
          company: "Quantum Innovations",
          image: user3,
          text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
        },
        {
          user: "Ronee Brown",
          company: "Fusion Dynamics",
          image: user4,
          text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
        },
        {
          user: "Michael Wilson",
          company: "Visionary Creations",
          image: user5,
          text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
        },
        {
          user: "Emily Davis",
          company: "Synergy Systems",
          image: user6,
          text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
        },
      ];
  return (
    <>
    <div className='mt-28'>
        <h1 data-aos="zoom-in" className='text-center text-3xl  sm:text-5xl lg:text-6xl tracking-wider'>What People are saying</h1>
    <div className='flex  flex-wrap mt-10 lg:mt-20 '>
    {testimonials.map((list,index)=>(
        <div key={index} className=' w-full sm:w-1/2 lg:w-1/3  px-4 py-2'>
            <div className='p-6 bg-neutral-800 text-md font-thin justify-center mx-2 my-2'>
                <p className='text-sm text-neutral-200 tracking-tight  my-2  items-center'>{list.text}</p>
                <div className='flex  items-start'>
                        <img src={list.image}  className='w-14 h-14 mt-4 border mr-5 border-neutral-300 rounded-full' />
                        <div className='justify-center mt-5 '>
                        <p className='text-neutral-300'>{list.user}</p>
                        
                        <span className='text-neutral-300'>{list.company}</span>
                        </div>
                </div>
            </div>
        </div>
    ))}
    </div>
    </div>
    
    </> )
}
