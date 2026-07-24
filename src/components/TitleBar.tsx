import React from 'react';
import { Terminal, Minus, Square, X } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

export function TitleBar() {
  const { toggleTerminal, isTerminalOpen } = useAppStore();

  return (
    <div className="h-8 bg-vscode-panel border-b border-vscode-border flex items-center justify-between px-3 select-none flex-shrink-0">
      <div
        className="flex items-center space-x-3 text-vscode-text/70 cursor-pointer hover:text-white transition-colors"
        onClick={toggleTerminal}
        title="Alternar Terminal (Ctrl+/)"
      >
        <Terminal size={16} className="text-vscode-blue" />
        <span className="text-xs font-medium">portfolio.dev</span>
      </div>

      <div className="hidden md:flex space-x-4 text-xs text-vscode-text/50">
        <span className="cursor-pointer hover:text-vscode-text">File</span>
        <span className="cursor-pointer hover:text-vscode-text">Edit</span>
        <span className="cursor-pointer hover:text-vscode-text">Selection</span>
        <span className="cursor-pointer hover:text-vscode-text">View</span>
        <span className="cursor-pointer hover:text-vscode-text">Go</span>
        <span className="cursor-pointer hover:text-vscode-text">Run</span>
        <span
          className={`cursor-pointer transition-colors ${
            isTerminalOpen ? 'text-vscode-blue font-bold' : 'hover:text-vscode-text'
          }`}
          onClick={toggleTerminal}
          title="Alternar Terminal (Ctrl+/)"
        >
          Terminal
        </span>
        <span className="cursor-pointer hover:text-vscode-text">Help</span>
      </div>

      <div className="flex items-center space-x-3 text-vscode-text/50">
        <Minus size={16} className="cursor-pointer hover:text-vscode-text" />
        <Square size={14} className="cursor-pointer hover:text-vscode-text" />
        <X size={16} className="cursor-pointer hover:text-red-500" />
      </div>
    </div>
  );
}
