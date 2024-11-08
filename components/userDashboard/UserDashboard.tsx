import React from 'react'
import Header from './Header'
// import Navbar from '../navbar/navbar'
import StatCard from './stat-card'
import { FlagTriangleRight, SquareKanban, DollarSign } from 'lucide-react'

const UserDashboard = () => {
  return (
    <div className='max-w-[1200px] mx-auto w-[90%]'>
        {/* <Navbar/> */}
      <Header/>
      <div className='grid grid-cols-3 gap-5 text-black'>
      <StatCard symbol={<DollarSign size={16} strokeWidth={3}/>} count={"$25,000"} desc="Donations"/>
      <StatCard symbol={<FlagTriangleRight size={16} strokeWidth={3}/>  } count={20} desc="Projects"/>
      <StatCard symbol={<SquareKanban size={16} strokeWidth={3}/>} count={9} desc="Latest" />
      </div>
    </div>
  )
}

export default UserDashboard
