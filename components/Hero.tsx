import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { TypewriterEffect } from './ui/typewritter-effect';
import Cards from './Cards';


const Hero = () => {
    const words = [
      {
        text: "AI",
      },
      {
        text: "Content",
      },
      {
        text: "Generator",
        className: "text-purple-500 dark:text-purple-500"
      },
    ];  
  return (
    <section>
    <div className=' flex justify-center items-center h-[70vh] w-full sm:flex-col overflow-clip px-5 ' >
        <div  >
            <TypewriterEffect words={words} cursorClassName='bg-black' className='lg:text-7xl sm:text-4xl  ' />
            <p className='font-normal text-sm lg:text-lg text-center ' > Revolutionize your content creation with our AI-powered app,
              delivering engaging and high-quality text in seconds </p>
            <div className='flex justify-center items-center py-6' >
            <Link href="/dashboard" >
            <Button className='bg-purple-500 hover:bg-purple-400 hover:scale-110 transition-all hover:font-bold text-1.5xl' > Get Started </Button>
            </Link>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Hero