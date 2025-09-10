import { FaRobot } from 'react-icons/fa';

interface ProcessingIndicatorProps {
  isUploading: boolean;
}

const ProcessingIndicator = ({ isUploading }: ProcessingIndicatorProps) => {
  if (!isUploading) return null;
  
  return (
    <div className="mt-6 p-4 bg-[#44E5E7]/10 rounded-lg flex items-center text-[#0E2E2E]">
      <div className="animate-pulse mr-3">
        <FaRobot className="text-[#44E5E7] text-xl" />
      </div>
      <p>Processing your documents...</p>
    </div>
  );
};

export default ProcessingIndicator;