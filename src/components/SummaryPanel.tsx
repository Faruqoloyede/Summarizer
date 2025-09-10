import { FiX, FiDownload, FiTrash2 } from 'react-icons/fi';
import { type Document } from '../types';

interface SummaryPanelProps {
  selectedDoc: Document | null;
  setSelectedDoc: (doc: Document | null) => void;
}

const SummaryPanel = ({ selectedDoc, setSelectedDoc }: SummaryPanelProps) => {
  if (!selectedDoc) return null;
  
  return (
    <div className="w-1/3 border-l border-[#44E5E7]/30 bg-white shadow-lg">
      <div className="p-4 border-b border-[#44E5E7]/30 flex justify-between items-center bg-[#44E5E7]/10">
        <h3 className="font-semibold text-[#0E2E2E]">AI Summary</h3>
        <button 
          onClick={() => setSelectedDoc(null)}
          className="text-[#0E2E2E]/50 hover:text-[#0E2E2E]"
        >
          <FiX />
        </button>
      </div>
      
      <div className="p-4">
        <div className="mb-4">
          <h4 className="text-sm font-medium text-[#0E2E2E]/70">Document</h4>
          <p className="font-medium text-[#0E2E2E]">{selectedDoc.name}</p>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm font-medium text-[#0E2E2E]/70 mb-2">Summary</h4>
          <div className="bg-[#ECFCFD] p-4 rounded-lg border border-[#44E5E7]/30">
            <p className="text-sm text-[#0E2E2E]">{selectedDoc.summary}</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-[#0E2E2E]/70 mb-2">Actions</h4>
          <div className="flex space-x-2">
            <button className="flex items-center text-sm bg-[#44E5E7] text-[#0E2E2E] px-3 py-2 rounded-lg hover:bg-[#44E5E7]/90 font-medium">
              <FiDownload className="mr-1" /> Download Summary
            </button>
            <button className="flex items-center text-sm border border-[#44E5E7]/30 px-3 py-2 rounded-lg hover:bg-[#ECFCFD] text-[#0E2E2E]">
              <FiTrash2 className="mr-1" /> Regenerate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPanel;