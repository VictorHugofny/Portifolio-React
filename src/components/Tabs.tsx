import React from 'react';
import { X, FileCode, FileJson, FileType } from 'lucide-react';
import { useAppStore, FileType as AppFileType } from '../store/useAppStore';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

const getFileIcon = (fileName: AppFileType) => {
  if (fileName.endsWith('.ts')) return <FileCode size={14} className="text-vscode-blue" />;
  if (fileName.endsWith('contact.ts')) return <FileJson size={14} className="text-vscode-yellow" />;
  return <FileType size={14} className="text-vscode-blue" />;
};

export function Tabs() {
  const { openFiles, activeFile, openFile, closeFile } = useAppStore();

  return (
    <div className="flex bg-[#0D1117] overflow-x-auto no-scrollbar flex-shrink-0">
      {openFiles.map((file) => (
        <motion.div
          layout
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          key={file}
          onClick={() => openFile(file)}
          className={clsx(
            "flex items-center px-4 py-2 text-[13px] border-r border-vscode-border cursor-pointer min-w-fit select-none group",
            activeFile === file 
              ? "bg-[#1E1E1E] text-white border-t border-t-vscode-blue" 
              : "bg-[#2D2D2D]/30 text-vscode-text/60 border-t border-t-transparent hover:bg-[#2D2D2D]/80"
          )}
        >
          <span className="mr-2">{getFileIcon(file)}</span>
          <span className="mr-3">{file}</span>
          
          <div 
            className={clsx(
              "p-0.5 rounded hover:bg-vscode-border",
              activeFile === file ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}
            onClick={(e) => {
              e.stopPropagation();
              closeFile(file);
            }}
          >
            <X size={14} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
