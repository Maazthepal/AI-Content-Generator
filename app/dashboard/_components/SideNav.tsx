"use client"

import { FileClock, Home, Settings, Wallet } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import UsageTrack from './UsageTrack'

const SideNav = () => {

  const MenuList= [
    {
      name : "Home",
      icon : <Home />,
      path : "/dashboard" 
    },
    {
      name : "Settings",
      icon : <Settings />,
      path : "/dashboard/settings"
    }
  ]
  
  const path= usePathname()
  useEffect(() => {

  },[] )
  return (
    <div className='h-screen p-5 shadow-sm border bg-white relative ' >
      <div className='flex justify-center ' >
      <Image src="/logo.svg" alt='logo' width={150} height={100} />
      </div>
      <hr className='my-6 border' />
      <div className='mt-3' >
        {MenuList.map((menu,index) => (
          <div key={index} className={`flex gap-2 mb-2 p-2 hover:bg-purple-500
           hover:text-white rounded-lg cursor-pointer items-center ${path ===menu.path&&'bg-purple-500 text-white' } `} > 
            {menu.icon}
            <Link href={menu.path} className='text-lg' >{menu.name}</Link>
            </div>
        ))}
      </div>
      <div className='absolute bottom-10 left-0 w-full'>
        {/* <UsageTrack /> */}
      </div>
    </div>
  )
}

export default SideNav