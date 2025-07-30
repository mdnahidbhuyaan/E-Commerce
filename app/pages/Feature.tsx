"use client"
import { Button } from '@/components/ui/button'
import React from 'react'

const Feature = () => {
  return (
    <section className='py-16 bg-white'>
    <div className='container mx-auto px-4'>
  <div className='text-center mb-12'>
<h2 className='text-3xl font-bold mb-2'>
    Shop By Category
</h2>
<p className='text-gray-600 max-w-2xl mx-auto'>User friendly dolor sit amet consectetur adipisicing elit. Maiores cum esse odio deleniti culpa quod?</p>
  </div>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
{[
  {
    title:"Electronics",
    image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80",
    icons:"fas fa-laptop"

  },
  {
    title:"Electronics",
    image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80",
    icons:"fas fa-laptop"

  },
  {
    title:"Electronics",
    image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80",
    icons:"fas fa-laptop"

  },
  {
    title:"Electronics",
    image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80",
    icons:"fas fa-laptop"

  },
  //   {
  //   title:"Electronics",
  //   image:"https://plus.unsplash.com/premium_photo-1675793714962-a2413250c490?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   icons:"fas fa-laptop"

  // },
  //   {
  //   title:"Electronics",
  //   image:"https://media.istockphoto.com/id/547511908/photo/wrist-watch.jpg?s=1024x1024&w=is&k=20&c=Ll5-yb8w7QrVbmRxAWQ1OQFDhmXV65C6s14E8-4sS5U=",
  //   icons:"fas fa-laptop"

  // },
  //   {
  //   title:"Electronics",
  //   image:"https://media.istockphoto.com/id/1401286755/photo/blue-laptop-flying-on-pink-background.jpg?s=1024x1024&w=is&k=20&c=kQeEMcSvtqTnh1p-gB9XHa2FHhGAFIqLi6MrhuoJ6Wg=",
  //   icons:"fas fa-laptop"

  // },
].map((category , index)=>(
<div
key={index}
className='group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer'
>
<div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10'>

</div>
<div className='absolute inset-20 bg-indigo-600/0  transition-all duration-300 z-10'>
</div>
<img src={category.image} alt={category.title} className='w-full h-70 object-cover object-top transition-transform duration-500 group-hover:scale-110 '/>
<div className='absolute bottom-0 left-0 right-0 p-6 z-20'> 
<div className='flex items-center gap-2 mb-2 '>
<div className='w-10 h-10 rounded-full bg-white/90 flex items-center justify-center  '>

</div>
<h3 className='text-xl font-bold text-white'>{category.title}</h3>
</div>
<p className='text-white/80 mb-4 hidden group-hover:block transition-all duration-300'>
Explore our collection of premium {""}{category.title.toLocaleLowerCase()} products
</p>
<Button className='!rounded-button whitespace-nowrap bg-white text-indigo-600 hover:bg-gray-100 cursor-pointer'>
  Shop Now
</Button>
</div>
</div>
))
}
  </div>
    </div>
    </section>
  )
}

export default Feature
