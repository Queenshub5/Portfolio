'use client'
import { useEffect, useState}  from 'react';
import { Moon, Sun } from 'lucide-react';

function ThemeToggle() {
    const [isDark, setIsDark] = useState(false)
    useEffect (() => {
        setIsDark(document.documentElement.classList.contains('dark'))
    },[])

    const toggle =() => {
        document.documentElement.classList.toggle('dark')
        const newDark=document.documentElement.classList.contains('dark')
        localStorage.theme = newDark ? 'dark' : 'light'
        setIsDark(newDark)
    }

     return (
    <div>
        <button onClick={toggle} className='p-2 rounded-lg text-white'>
              { isDark ? <Sun size={30} className='text-black shadow-sm shadow-black rounded-sm'/> : <Moon size={30} className='text-[#07111F] shadow-sm shadow-black rounded-sm'/>}
            </button>
    </div>
  )
    }
 


export default ThemeToggle