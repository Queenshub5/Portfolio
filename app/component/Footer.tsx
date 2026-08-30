import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <div className='container mx-auto'>
        <div className='bg-gray-400 h-15 w-full pt-6'>
             <div className='flex justify-between text-center gap-10'>
        <Image src="/images/lizy.png" alt='image' width={50} height={50} className='rounded-full w-6'/>
        <Link href="/" className='hover:text-white'>Home</Link> 
        <Link href="/about" className='hover:text-white'>About</Link> 
        <Link href="/project" className='hover:text-white'>Project</Link>
        <button className='bg-black text-white hover:text-gray-500 rounded-full px-8 py-1'>Contact</button> 
        </div>

        </div>
    </div>
  )
}

export default Footer