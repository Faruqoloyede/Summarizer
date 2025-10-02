'use client'
import { FiMenu } from 'react-icons/fi'
import { FiHome, FiBook, FiLogOut } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import UserProfile from './UserProfile';


const nav_links = [
  { name: "Home", icon: <FiHome />, tab: "dashboard" },
  { name: "Library", icon: <FiBook />, tab: "library" },
];
const Header = () => {
  const pathname = usePathname();
  const[sidebarOpen, setSidebarOpen] = useState(false)
  const{logout} = useAuth()

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
    const renderLinks = () =>
    nav_links.map((link) => {
      const isActive = pathname === `/${link.tab}`;
      return (
        <Link
          key={link.tab}
          href={`/${link.tab}`}
          className={`flex items-center w-full p-4 transition-colors ${
            isActive
              ? "bg-[#44E5E7]/20 text-[#44E5E7]"
              : "text-gray-300 hover:bg-[#44E5E7]/10"
          }`}
        >
          <span className="text-lg">{link.icon}</span>
          <span className="ml-3">{link.name}</span>
        </Link>
      );
    });
      const handleLogout =async ()=>{
        await logout();
      }

  return (
    <nav className='flex items-center justify-between bg-[#0E2E2E] px-4 py-6 shadow-md transition-all duration-300 relative'>
        <div className='flex items-center justify-between gap-x-3'>
            <button 
                      className="p-2 rounded-lg hover:bg-[#44E5E7]/10 text-gray-300 sm:hidden block"
                    >
                      <FiMenu className='text-xl' onClick={toggleSidebar} />
                    </button>
        <h6 className="flex items-center gap-3">
            <img src="/Logo.svg" alt="logo" />
            <span className="text-[20px] font-bold font-poppins text-white">Summerizer</span>
        </h6>
        </div>

        <div className={`${sidebarOpen ? 'block' : 'hidden'} fixed top-20 left-0 sm:hidden block bg-[#0E2E2E] p-4 w-64 h-full`}>
           
          <div className='flex flex-col items-start gap-y-3'>
            {renderLinks()}

            <button
            onClick={handleLogout}
            className="flex items-center w-full p-4 text-gray-300 hover:bg-[#44E5E7]/10"
          >
            <FiLogOut className="text-lg" />
            <span className="ml-3">Logout</span>
          </button>

          <div className="absolute bottom-12 left-0 border-t border-[#44E5E7]/20">
              <UserProfile />
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Header