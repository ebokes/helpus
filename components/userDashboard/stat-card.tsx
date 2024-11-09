import { ChartNoAxesCombined } from 'lucide-react';
import React, { ReactNode } from 'react'

interface LogoProps {
  children:  ReactNode;
}

const Logo = ({children}:LogoProps) => {
  return (
    <div className='w-8 h-8 bg-primary grid place-items-center text-white rounded-full'>{children}</div>
  )
}

interface StatCardProps {
  symbol: ReactNode;
  count: string | number;
  desc: string;
}

const StatCard = ({symbol, count, desc}: StatCardProps) => {
  return (
    <div className='flex gap-6 shadow-md rounded-lg border items-center justify-between flex-1 p-4'>
      <div className='flex gap-7'>
        <div className='w-14 h-14 bg-[#c2edc8] grid place-items-center  rounded-full'><Logo>{symbol}</Logo></div>
        <div>
          <h1 className='font-semibold text-xl'>{count}</h1>
          <p>{desc}</p>
        </div>
      </div>
      <ChartNoAxesCombined size={25} />
    </div>
  )
}

export default StatCard
