import { useState, useCallback, useRef } from 'react';
import { type Document } from '../types';

export const useDocumentManagement = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = useCallback((files: FileList | null) => {
    if (!files || files.length === 0) return;
    
    setIsUploading(true);
    
    // Simulate file processing
    setTimeout(() => {
      const newDocs: Document[] = [];
      
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
          const newDoc: Document = {
            id: Math.random().toString(36).substr(2, 9),
            name: file.name,
            type: file.type,
            uploadDate: new Date().toLocaleDateString(),
            content: content.substring(0, 5000),
            summary: `This is an AI-generated summary of ${file.name}. The document appears to contain important information that has been processed by our advanced algorithms to extract key insights and main points.`
          };
          
          newDocs.push(newDoc);
          
          if (newDocs.length === files.length) {
            setDocuments(prev => [...prev, ...newDocs]);
            setIsUploading(false);
          }
        };
        reader.readAsText(file);
      });
    }, 1500);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleUpload(e.dataTransfer.files);
  }, [handleUpload]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    handleUpload(e.target.files);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [handleUpload]);

  const deleteDocument = (id: string) => {
    setDocuments(prev => prev.filter(doc => doc.id !== id));
    if (selectedDoc && selectedDoc.id === id) {
      setSelectedDoc(null);
    }
  };

  return {
    documents,
    setDocuments,
    selectedDoc,
    setSelectedDoc,
    isUploading,
    setIsUploading,
    fileInputRef,
    handleUpload,
    handleDrop,
    handleFileInput,
    deleteDocument
  };
};