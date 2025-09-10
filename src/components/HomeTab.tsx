import UploadArea from './UploadArea';
import ProcessingIndicator from './ProcessingIndicator';
import RecentUploads from './RecentUploads';
import { type Document } from '../types';

interface HomeTabProps {
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  handleFileInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  isUploading: boolean;
  documents: Document[];
  setSelectedDoc: (doc: Document) => void;
  deleteDocument: (id: string) => void;
}

const HomeTab = ({ 
  handleDrop, 
  handleFileInput, 
  fileInputRef, 
  isUploading, 
  documents, 
  setSelectedDoc, 
  deleteDocument 
}: HomeTabProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#0E2E2E] mb-6">Upload Documents</h2>
      
      <UploadArea 
        handleDrop={handleDrop} 
        handleFileInput={handleFileInput} 
        fileInputRef={fileInputRef} 
      />
      
      <ProcessingIndicator isUploading={isUploading} />
      
      <RecentUploads 
        documents={documents} 
        onSelect={setSelectedDoc} 
        onDelete={deleteDocument} 
      />
    </div>
  );
};

export default HomeTab;