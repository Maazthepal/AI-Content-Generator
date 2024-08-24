import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-sm border-b-2 flex items-center gap-8 justify-between bg-white ' >
        <div className='flex gap-2 items-center p-2  border rounded-md max-w-lg bg-white ' > 
            <Search />
            <input type="text" placeholder='Search...' className='outline-none' />
        </div>
        <div className='flex gap-5 items-center' >
            <h2 className='bg-purple-500 p-1 rounded-lg text-white text-sm px-2 ' >
            🔥 Join Membership for $9.99/M
            </h2>
            <UserButton/>
        </div>
    </div>
  )
}

export default Header