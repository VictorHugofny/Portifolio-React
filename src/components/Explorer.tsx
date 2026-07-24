import React, { useState } from 'react';
import { ChevronDown, ChevronRight, FileCode, FileJson, FileType, FolderOpen } from 'lucide-react';
import { useAppStore, FileType as AppFileType } from '../store/useAppStore';
import { clsx } from 'clsx';

const files: { name: AppFileType; icon: React.ReactNode; color: string }[] = [
  { name: 'about.tsx', icon: <FileType size={16} />, color: 'text-vscode-blue' },
  { name: 'projects.tsx', icon: <FileType size={16} />, color: 'text-vscode-blue' },
  { name: 'experience.tsx', icon: <FileType size={16} />, color: 'text-vscode-blue' },
  { name: 'stack.ts', icon: <FileCode size={16} />, color: 'text-vscode-blue' },
  { name: 'articles.md', icon: <FileType size={16} />, color: 'text-vscode-blue' }, // Should be markdown icon, but using generic for now
  { name: 'contact.ts', icon: <FileJson size={16} />, color: 'text-vscode-yellow' },
];

export function Explorer() {
  const [isOpen, setIsOpen] = useState(true);
  const { activeFile, openFile } = useAppStore();

  return (
    <div className="w-60 bg-[#0F1319] border-r border-vscode-border flex flex-col flex-shrink-0">
      <div className="py-2 px-4 text-[11px] text-vscode-text/70 flex items-center justify-between uppercase">
        <span>Explorer</span>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div 
          className="flex items-center px-2 py-1 cursor-pointer hover:bg-vscode-card text-sm font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ChevronDown size={16} className="mr-1" /> : <ChevronRight size={16} className="mr-1" />}
          PORTFOLIO
        </div>

        {isOpen && (
          <div className="ml-2">
            <div className="flex items-center px-4 py-1 text-sm text-vscode-text/80 cursor-default">
              <FolderOpen size={16} className="mr-2 text-vscode-blue" />
              src
            </div>
            
            {files.map((file) => (
              <div
                key={file.name}
                onClick={() => openFile(file.name)}
                className={clsx(
                  "flex items-center pl-8 pr-4 py-1 text-[13px] cursor-pointer hover:bg-vscode-card",
                  activeFile === file.name ? "bg-vscode-card text-vscode-blue" : "text-vscode-text/90"
                )}
              >
                <div className={clsx("mr-2", file.color)}>{file.icon}</div>
                {file.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
