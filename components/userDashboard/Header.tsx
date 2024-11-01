import React from 'react';
import Logo from '../navbar/logo';
import { user } from './UserData';
import {Bell} from 'lucide-react'

// Define the type for a single `User`
interface User {
  title: string;
  imageUrl: string;
}

// Use `User[]` to indicate `user` is an array of `User` objects
const userData: User[] = user;

const Header: React.FC = () => {
  return (
    <div className='flex justify-between items-center py-2 border shadow-sm rounded-full px-4 mb-8 mt-3'>
      <div>
        <h1>Dashboard</h1>
      </div>
      <div className='flex items-center gap-5'>
        <div>
        <Bell strokeWidth={1} size={16}/>
        </div>
        <div>
          {userData.map((user, index) => (
            <div key={index}>
            
              <div className='w-8 rounded-full'>
                <img src={user.imageUrl} alt="profile" className='rounded-full'/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
