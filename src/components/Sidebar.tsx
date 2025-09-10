import { FiHome, FiBook, FiSettings, FiMenu, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: 'home' | 'library' | 'settings') => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}



const Sidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }: SidebarProps) => {
    const {logout} = useAuth()
const handleLogout = async ()=>{
    await logout()
}
  return (
    <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-[#0E2E2E] text-white shadow-md transition-all duration-300`}>
      <div className="flex items-center justify-between p-4 border-b border-[#44E5E7]/20">
        {sidebarOpen && (
           <a href="" className="flex items-center gap-3">
            <img src="/Logo.svg" alt="logo" />
            <span className="text-[20px] font-bold font-poppins text-white">Summerizer</span>
        </a>
        )}
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg hover:bg-[#44E5E7]/10 text-[#44E5E7]"
        >
          <FiMenu />
        </button>
      </div>
      
      <nav className="mt-6">
        <button 
          onClick={() => setActiveTab('home')}
          className={`flex items-center w-full p-4 ${activeTab === 'home' ? 'bg-[#44E5E7]/20 text-[#44E5E7]' : 'text-gray-300 hover:bg-[#44E5E7]/10'}`}
        >
          <FiHome className="text-lg" />
          {sidebarOpen && <span className="ml-3">Home</span>}
        </button>
        
        <button 
          onClick={() => setActiveTab('library')}
          className={`flex items-center w-full p-4 ${activeTab === 'library' ? 'bg-[#44E5E7]/20 text-[#44E5E7]' : 'text-gray-300 hover:bg-[#44E5E7]/10'}`}
        >
          <FiBook className="text-lg" />
          {sidebarOpen && <span className="ml-3">Library</span>}
        </button>
        
        <button 
          onClick={handleLogout}
          className={`flex items-center w-full p-4 ${activeTab === 'settings' ? 'bg-[#44E5E7]/20 text-[#44E5E7]' : 'text-gray-300 hover:bg-[#44E5E7]/10'}`}
        >
          <FiLogOut className="text-lg" />
          {sidebarOpen && <span className="ml-3">Logout</span>}
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;