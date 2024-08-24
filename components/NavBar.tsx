import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { User2Icon } from 'lucide-react'

const NavBar = () => {
  return (
    <nav className='h-[5vh] w-full ' >
        <div className='flex items-center gap-4 shadow-md justify-between ' >
        <div className='flex items-center px-8 py-5' >
            <Image src="/logo.svg" alt='Logo' width={150} height={150} /> 
        </div>
        <div className='flex items-center px-7 py-5 ' >
          <div className='md:h-7 md:border border-l mr-2 ' />
            <Link href="/dashboard" >
            <Button variant="ghost" className='font-medium text-lg cursor-pointer ' > <User2Icon/>&nbsp; Get Started </Button>
            </Link>
        </div>
        </div>
    </nav>
  )
}

export default NavBar