import { FiFile, FiTrash2 } from 'react-icons/fi';
import { type Document } from '../types';

interface DocumentCardProps {
  doc: Document;
  onSelect: (doc: Document) => void;
  onDelete: (id: string) => void;
}

const DocumentCard = ({ doc, onSelect, onDelete }: DocumentCardProps) => {
  return (
    <div 
      className="border border-[#44E5E7]/30 rounded-lg p-4 bg-white hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => onSelect(doc)}
    >
      <div className="flex items-start justify-between">
        <FiFile className="text-[#44E5E7] text-xl mt-1" />
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onDelete(doc.id);
          }}
          className="text-[#0E2E2E]/50 hover:text-red-500"
        >
          <FiTrash2 />
        </button>
      </div>
      <h4 className="font-medium mt-2 truncate text-[#0E2E2E]">{doc.name}</h4>
      <p className="text-sm text-[#0E2E2E]/70 mt-1">{doc.uploadDate}</p>
    </div>
  );
};

export default DocumentCard;