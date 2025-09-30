"use client";

import { FiHome, FiBook, FiLogOut } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import UserProfile from "./UserProfile";
import Link from "next/link";
import { usePathname } from "next/navigation";


const nav_links = [
  { name: "Home", icon: <FiHome />, tab: "dashboard" },
  { name: "Library", icon: <FiBook />, tab: "library" },
];

const Sidebar = () => {
  const { logout } = useAuth();
  const pathname = usePathname();

  const handleLogout = async () => {
    await logout();
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

  return (
    <>
      <div className="bg-[#0E2E2E] text-white shadow-md transition-all duration-300 relative w-80 sm:block hidden h-screen">
        <nav className="mt-6">
          {renderLinks()}

          <button
            onClick={handleLogout}
            className="flex items-center w-full p-4 text-gray-300 hover:bg-[#44E5E7]/10"
          >
            <FiLogOut className="text-lg" />
            <span className="ml-3">Logout</span>
          </button>
        </nav>

        <div className="absolute bottom-10 left-0 border-t border-[#44E5E7]/20">
          <UserProfile />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
