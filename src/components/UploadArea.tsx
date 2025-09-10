import { FiUpload } from 'react-icons/fi';

interface UploadAreaProps {
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  handleFileInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
}

const UploadArea = ({ handleDrop, handleFileInput, fileInputRef }: UploadAreaProps) => {
  return (
    <div 
      className="border-2 border-dashed border-[#44E5E7] rounded-lg p-8 text-center cursor-pointer bg-white hover:bg-[#ECFCFD] transition-colors"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onClick={() => fileInputRef.current?.click()}
    >
      <FiUpload className="mx-auto text-3xl text-[#44E5E7] mb-3" />
      <p className="text-[#0E2E2E]">Drag & drop files here or click to browse</p>
      <p className="text-sm text-[#0E2E2E]/70 mt-2">Supported formats: PDF, TXT, DOCX</p>
      
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileInput} 
        className="hidden" 
        multiple 
        accept=".pdf,.txt,.docx,.doc"
      />
    </div>
  );
};

export default UploadArea;