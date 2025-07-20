import { LayoutTemplate } from 'lucide-react'
import React from 'react'
import {Link} from 'react-router-dom'
import { ProfileInfoCard } from './Cards'

const Navbar = () => {
  return (
    <div className='h-16 bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md border-b border-emerald-700 px-6 flex items-center justify-between z-50 fixed top-0 left-0 right-0'>
        <div className= 'max-w-6xl mx-auto flex items-center justify-between gap-5'>
            <Link to='/' className='flex items-center gap-3'>
                <div className='flex items-center pd-6 gap-3'>
                    <div className='w-64 h-32 bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg flex items-center justify-center rounded-xl p-4'>
                        <LayoutTemplate className='w-5 h-5 text-white' />
                    </div>

                    <span className='text-2xl sm:text-3xl font-extrabold tracking-wide font-raleway bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-400'>FreshDraft</span>
                </div>

            </Link>
            <ProfileInfoCard/>

        </div>
      
    </div>
  )
}

export default Navbar
