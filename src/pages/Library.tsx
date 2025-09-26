import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import LibraryTab from "../components/LibraryTab";


const Library = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex flex-col h-screen'>
      <Header setSidebarOpen={setSidebarOpen}  sidebarOpen={sidebarOpen} />
    <div className="flex h-screen bg-[#ECFCFD]">
      <Sidebar 
        sidebarOpen={sidebarOpen} 
      />

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6">
       <LibraryTab 
        />
        
      </div>
    </div>
    </div>
  );
}

export default Library