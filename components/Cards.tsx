import { CaseLower, LayoutTemplate, Settings, User2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Cards = () => {
    const cardContent = [
        {
            icon:"./layers.svg",
            name: "25+ template",
            desc: "A wide range of Templates "
        },
        {
            icon:"./Settings.svg",
            name: "Customizable",
            desc: "Components are very customiazable "
        },
        {
            icon:"./friendly.svg",
            name: "Begginer friendly ",
            desc: "The design of the web is very begginer friendly "
        },
        {
            icon:"./money.svg",
            name: "Free to Use",
            desc: "It is completely free to use"
        }
    ]
  return (
    <div>
        <div className='h-[25%] w-full justify-evenly flex items-center flex-wrap  '>
            {cardContent.map((card,index) => (
                    <div className='flex flex-col gap-2 items-center bg-white p-3 rounded-lg shadow-md h-30 w-60 line-clamp-1
                    hover:scale-110 transition-all ' 
                    key={index} >
                        <Image src={card.icon} alt='icon' width={30} height={30} className='border rounded-lg ' />
                        <h1 className='text-xl font-bold py-2 ' > {card.name} </h1>
                        <p className='text-gray-500 text-sm py-2' >{card.desc}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cards