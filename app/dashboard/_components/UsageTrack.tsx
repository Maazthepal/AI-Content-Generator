"use client";

import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsage';

const UsageTrack = () => {

  const { user } = useUser();
  const {totalUsage, setTotalUsage}= useContext(TotalUsageContext)
  const { updateCreditUsage,setUpdateCreditUsage} = useContext(UpdateCreditUsageContext)


  useEffect(() => {
    user && getData()
  }, [user])

  useEffect(()=> {
    user&&getData();
  },[updateCreditUsage&&user])


  const getData = async () => {
    {/*@ts-ignore*/ }
    const result: HISTORY[] = await db.select().from(AIOutput)
      .where(eq(AIOutput.createdAt, user?.primaryEmailAddress?.emailAddress,))

    GetTotalUsage(result)
  }


  const GetTotalUsage = (result: HISTORY[]) => {
    let total: number = 0;
    result.forEach(element => {
      total = total + Number(element.aiResponse?.length)
    });
    setTotalUsage(total);
    console.log(total)
  }

  return (
    <div className='m-5' >
      <div className='bg-primary text-white rounded-lg p-3 ' >
        <h2 className='font-medium' >Credits</h2>
        <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3 '>
          <div className='h-2 bg-white rounded-full '
            style={{
              width: (totalUsage / 10000) * 100 + "%"
            }}
          ></div>
        </div>
        <h2 className='text-sm my-2' >{totalUsage}/10,000 Credits used </h2>
      </div>
      <Button className='w-full my-3 text-primary' variant={'secondary'} >Upgrade</Button>
    </div>
  )
}

export default UsageTrack