import { FiFile, FiTrash2, FiDownload, FiSearch } from 'react-icons/fi';
import { type Document } from '../types';

interface LibraryTabProps {
  documents: Document[];
  setSelectedDoc: (doc: Document) => void;
  deleteDocument: (id: string) => void;
}

const LibraryTab = ({ documents, setSelectedDoc, deleteDocument }: LibraryTabProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#0E2E2E]">Document Library</h2>
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#0E2E2E]/50" />
          <input 
            type="text" 
            placeholder="Search documents..." 
            className="pl-10 pr-4 py-2 border border-[#44E5E7]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#44E5E7] bg-white text-[#0E2E2E]"
          />
        </div>
      </div>
      
      {documents.length === 0 ? (
        <div className="text-center py-12">
          <FiFile className="mx-auto text-4xl text-[#0E2E2E]/40 mb-3" />
          <p className="text-[#0E2E2E]/70">No documents yet. Upload some files to get started.</p>
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg overflow-hidden border border-[#44E5E7]/30">
          <table className="min-w-full divide-y divide-[#44E5E7]/20">
            <thead className="bg-[#44E5E7]/10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#0E2E2E] uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#0E2E2E] uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#0E2E2E] uppercase tracking-wider">Uploaded</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#0E2E2E] uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[#44E5E7]/20">
              {documents.map(doc => (
                <tr 
                  key={doc.id} 
                  className="hover:bg-[#ECFCFD] cursor-pointer"
                  onClick={() => setSelectedDoc(doc)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FiFile className="text-[#44E5E7] mr-2" />
                      <div className="text-sm font-medium text-[#0E2E2E]">{doc.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#0E2E2E]/70">{doc.type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#0E2E2E]/70">
                    {doc.uploadDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteDocument(doc.id);
                      }}
                      className="text-[#0E2E2E]/50 hover:text-red-500 mr-3"
                    >
                      <FiTrash2 />
                    </button>
                    <button className="text-[#0E2E2E]/50 hover:text-[#44E5E7]">
                      <FiDownload />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LibraryTab;