import { FiHome, FiBook, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import UserProfile from './UserProfile';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: 'home' | 'library' | 'settings') => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}



const Sidebar = ({ activeTab, setActiveTab, sidebarOpen }: SidebarProps) => {
    const {logout} = useAuth()
const handleLogout = async ()=>{
    await logout()
}
  return (
    <>
    <div className='bg-[#0E2E2E] text-white shadow-md transition-all duration-300 relative w-72 sm:block hidden'>
      <nav className="mt-6">
        <button 
          onClick={() => setActiveTab('home')}
          className={`flex items-center w-full p-4 ${activeTab === 'home' ? 'bg-[#44E5E7]/20 text-[#44E5E7]' : 'text-gray-300 hover:bg-[#44E5E7]/10'}`}
        >
          <FiHome className="text-lg" />
         <span className="ml-3">Home</span>
        </button>
        
        <button 
          onClick={() => setActiveTab('library')}
          className={`flex items-center w-full p-4 ${activeTab === 'library' ? 'bg-[#44E5E7]/20 text-[#44E5E7]' : 'text-gray-300 hover:bg-[#44E5E7]/10'}`}
        >
          <FiBook className="text-lg" />
           <span className="ml-3">Library</span>
        </button>
        
        <button 
          onClick={handleLogout}
          className={`flex items-center w-full p-4 ${activeTab === 'settings' ? 'bg-[#44E5E7]/20 text-[#44E5E7]' : 'text-gray-300 hover:bg-[#44E5E7]/10'}`}
        >
          <FiLogOut className="text-lg" />
          <span className="ml-3">Logout</span>
        </button>
      </nav>
      <div className='absolute bottom-10 left-0 border-t border-[#44E5E7]/20'>
          <UserProfile/>
      </div>
    </div>

      {sidebarOpen && (
         <div className='bg-[#0E2E2E] text-white shadow-md transition-all duration-300 relative w-64 z-40 sm:hidden block'>
      
      <nav className="mt-6">
        <button 
          onClick={() => setActiveTab('home')}
          className={`flex items-center w-full p-4 ${activeTab === 'home' ? 'bg-[#44E5E7]/20 text-[#44E5E7]' : 'text-gray-300 hover:bg-[#44E5E7]/10'}`}
        >
          <FiHome className="text-lg" />
          <span className="ml-3">Home</span>
        </button>
        
        <button 
          onClick={() => setActiveTab('library')}
          className={`flex items-center w-full p-4 ${activeTab === 'library' ? 'bg-[#44E5E7]/20 text-[#44E5E7]' : 'text-gray-300 hover:bg-[#44E5E7]/10'}`}
        >
          <FiBook className="text-lg" />
          <span className="ml-3">Library</span>
        </button>
        
        <button 
          onClick={handleLogout}
          className={`flex items-center w-full p-4 ${activeTab === 'settings' ? 'bg-[#44E5E7]/20 text-[#44E5E7]' : 'text-gray-300 hover:bg-[#44E5E7]/10'}`}
        >
          <FiLogOut className="text-lg" />
          <span className="ml-3">Logout</span>
        </button>
      </nav>
      <div className='absolute bottom-10 left-0 border-t border-[#44E5E7]/20'>
          <UserProfile />
      </div>
    </div>
      )}
    </>
  );
};

export default Sidebar;