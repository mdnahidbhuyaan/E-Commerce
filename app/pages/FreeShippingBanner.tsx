"use client"
import React from 'react'
import {motion} from "framer-motion"
import { Truck } from 'lucide-react'

const FreeShippingBanner = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=' border border-red-500 rounded-xl p-2 bg-white shadow-sm max-w-5xl mx-auto flex itmes-center justify-between'
      >
        <div className='flex-col md:flex-row items-center justify-between gap-4'>
  {          /* left section width icons */}
  <div className='flex items-center gap-3'> 
<Truck className='text-red-500 w-7 h-7'/>
<span className='font-semibold text-lg text-gray-800'>
  FREE SHIPPING
</span>
  </div>
        </div>
        {/* center massage */}
        <p className='text-gray-600 text-sm md:text-base text-center md:text-left'>
   Free Delivery Now On your First Order and over {""}
   <span className='font-semibold text-gray-800 '>$200</span>
        </p>
        {/* right section with button */}
        <p className='text-lg font-bold text-gray-800 text-center md:text-right'>
   -Only <span className='font-semibold text-red-500 '>$200</span>
        </p>
      </motion.div>
    </div>
  )
}

export default FreeShippingBanner
