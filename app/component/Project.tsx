import React from 'react'
import Image from 'next/image';

function Project() {
  return (
    <div>
    <div className="">
        Project
    <Image src="/images/project1.png" alt='' width={200} height={200}/>
    <p></p>

    <Image src="/images/project2.png" alt='' width={200} height={200}/> 

    <Image src="/images/project4.png" alt='' width={200} height={200}/>

    {/* <Image src="/images/project3.png" alt='' width={200} height={200}/> */}
    </div>
    </div>
  )
}

export default Project