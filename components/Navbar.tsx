'use client'

import { nav_links } from "@/constant";
import { useState, useEffect } from "react";
import Button from "./Button";


const Navbar = () => {
    const [scroll, setScroll] = useState<boolean>(false)
    const [toggle, setToggle] = useState<boolean>(false)

    useEffect(()=>{
      const handleScroll = ()=>{
        setScroll(window.scrollY > 200)
      }
      window.addEventListener('scroll', handleScroll)
      return ()=> window.removeEventListener('scroll',handleScroll)
    }, [])
   return (
   <header className={`${scroll ? 'bg-feature shadow' : 'bg-transparent'} fixed top-0 left-0 w-full py-6 z-40`}>
    <nav className='container flex items-center justify-between'>
        <a href="" className="flex items-center gap-3">
            <img src="/Logo.svg" alt="logo" />
            <span className="text-[20px] font-bold font-poppins text-white">Summerizer</span>
        </a>
        <ul className="list-none sm:flex items-center justify-end hidden">
            {nav_links.map((item)=>(
                <li key={item.id}><a href={`#${item.id}`} className="text-sm text-white font-light font-poppins mr-4 capitalize">{item.link}</a></li>
            ))}
        </ul>
        {/* link */}
        <div className="sm:flex hidden">
            <Button title="Get Started" to="/register" />
        </div>
             <div className="sm:hidden flex flex-1 items-center justify-end">
          <img src="/menu.png" className="cursor-pointer" onClick={() => setToggle(true)}
          />
          <div
            className={`fixed top-0 right-0 h-screen bg-sidebar shadow-md p-6 w-72 sm:w-1/2 z-40 transition-transform duration-300 ${
              toggle ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-end justify-end">
              <img src="/close.svg" className="cursor-pointer" onClick={() => setToggle(false)}
              />
            </div>
            <ul className="list-none flex flex-col items-start gap-y-10 mt-8">
              {nav_links.map((item)=>(
                <li key={item.id}><a href={`#${item.id}`} className="text-sm text-white font-light font-poppins mr-4 capitalize">{item.link}</a></li>
            ))}
            </ul>
            <div className="flex items-center justify-center mt-10">
             <Button title="Get Started" to="/register" />
        </div>
          </div>
        </div>
    </nav>
   </header>
  )
}

export default Navbar