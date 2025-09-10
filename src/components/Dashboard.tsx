import { useState } from 'react';
import Sidebar from './Sidebar';
import HomeTab from './HomeTab';
import LibraryTab from './LibraryTab';
import SummaryPanel from './SummaryPanel';
import { useDocumentManagement } from '../context/useDocumentManagement';
import Header from './Header';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'library' | 'settings'>('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const {
    documents,
    selectedDoc,
    setSelectedDoc,
    isUploading,
    fileInputRef,
    handleDrop,
    handleFileInput,
    deleteDocument
  } = useDocumentManagement();

  return (
    <div className='flex flex-col h-screen'>
      <Header setSidebarOpen={setSidebarOpen}  sidebarOpen={sidebarOpen} />
    <div className="flex h-screen bg-[#ECFCFD]">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
      />

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6">
        {activeTab === 'home' && (
          <HomeTab 
            handleDrop={handleDrop}
            handleFileInput={handleFileInput}
            fileInputRef={fileInputRef}
            isUploading={isUploading}
            documents={documents}
            setSelectedDoc={setSelectedDoc}
            deleteDocument={deleteDocument}
          />
        )}
        
        {activeTab === 'library' && (
          <LibraryTab 
            documents={documents}
            setSelectedDoc={setSelectedDoc}
            deleteDocument={deleteDocument}
          />
        )}
      </div>
      
      <SummaryPanel 
        selectedDoc={selectedDoc} 
        setSelectedDoc={setSelectedDoc} 
      />
    </div>
    </div>
  );
};

export default Dashboard;