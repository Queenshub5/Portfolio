import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Project() {
  return (
    <div className='container'>
    <div className="max-w-[90%] mx-auto mt-40">
      <div className="flex justify-center">
      <h1 className=" font-extrabold text-5xl text-gray-700 border-l-6 border-b-2" id='project'>
            Project
          </h1>
      </div> 
      <div className="flex flex-col gap-10">
    <div className="flex items-center justify-between border-b-2 border-gray-900">
    <Image src="/images/project1.png" alt='' width={200} height={200} className='border-b-2 border-black mb-6'/>
    <p className='text-[19px]'>Bookmark is a clean and simple interface to organize your favourite websites. </p>
    <p className='font-bold text-2xl text-gray-700'>Tech Stack: Nextjs | Tailwindcss</p>
    {/* <Link href={https:}>  <Image src="/images/project1.png" alt='' width={200} height={200} className='border-b-2 border-black'/></Link> */}
    </div>
 
    <div className="flex items-center justify-between border-b-2 border-gray-900">
    <Image src="/images/project2.png" alt='' width={200} height={200}/> 
    <p className='text-[19px]'>Social Link Profile is my post-class assessment project as an aspiring developer.</p>
    <p className='font-bold text-2xl text-gray-700'>Tech Stack: React.js | Tailwindcss</p>
    </div>

    <div className="flex items-center justify-between border-b-2 border-gray-900 ">
    <Image src="/images/project4.png" alt='' width={200} height={200}/>
    <p className='text-[19px]'>Groco Wear is an e-commerce platform. A group project design using git hub to collaborate.  </p>
    <p className='font-bold text-2xl text-gray-700'>Tech Stack: HTML | CSS | JAVASCRIPT</p>
    {/* <Image src="/images/project5.png" alt='' width={200} height={200}/> */}
    </div>
      </div>

    
    </div>
    </div>
  )
}

export default Project