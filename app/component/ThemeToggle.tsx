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
            { isDark ? <Sun size={30} className='text-amber-300'/> : <Moon size={30} className='text-amber-300'/>}</button>
    </div>
  )
    }
 


export default ThemeToggle