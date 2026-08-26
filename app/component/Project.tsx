import React from 'react'
import Image from 'next/image';

function Project() {
  return (
    <div id='project'>
    <div className="max-w-[90%] mx-auto"> 
      <h2 className='flex items-center justify-center mt-10 font-bold text-3xl'>PROJECT</h2>

      <div className="flex flex-col gap-10">

    <Image src="/images/project1.png" alt='' width={200} height={200} className='border-b-2 border-black'/>
    <p></p>

    <Image src="/images/project2.png" alt='' width={200} height={200}/> 

    <Image src="/images/project4.png" alt='' width={200} height={200}/>
    {/* <Image src="/images/project5.png" alt='' width={200} height={200}/> */}
      </div>

    
    </div>
    </div>
  )
}

export default Project