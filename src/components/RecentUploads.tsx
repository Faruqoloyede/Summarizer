import DocumentCard from './DocumentCard';
import { type Document } from '../types';

interface RecentUploadsProps {
  documents: Document[];
  onSelect: (doc: Document) => void;
  onDelete: (id: string) => void;
}

const RecentUploads = ({ documents, onSelect, onDelete }: RecentUploadsProps) => {
  if (documents.length === 0) return null;
  
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-[#0E2E2E] mb-4">Recent Uploads</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {documents.slice(0, 3).map(doc => (
          <DocumentCard 
            key={doc.id} 
            doc={doc} 
            onSelect={onSelect} 
            onDelete={onDelete} 
          />
        ))}
      </div>
    </div>
  );
};

export default RecentUploads;