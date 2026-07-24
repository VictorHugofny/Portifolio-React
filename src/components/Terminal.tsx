import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

export function Terminal({ isMobile = false, onClose }: { isMobile?: boolean; onClose?: () => void }) {
  const { terminalHistory, addTerminalHistory, clearTerminal, setTerminalOpen, openFile } = useAppStore();
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      const cmd = input.trim().toLowerCase();
      let response: React.ReactNode = '';

      switch (cmd) {
        case 'help':
          response = (
            <div className="flex flex-col mt-1 space-y-1">
              <span className="text-vscode-text mb-2">Comandos disponíveis:</span>
              <div className="grid grid-cols-2 gap-4">
                <span className="text-vscode-green">about <span className="text-vscode-text/60 ml-2">- Sobre mim</span></span>
                <span className="text-vscode-green">projects <span className="text-vscode-text/60 ml-2">- Meus projetos</span></span>
                <span className="text-vscode-green">experience <span className="text-vscode-text/60 ml-2">- Minha experiência</span></span>
                <span className="text-vscode-green">stack <span className="text-vscode-text/60 ml-2">- Tecnologias</span></span>
                <span className="text-vscode-green">articles <span className="text-vscode-text/60 ml-2">- Artigos e conteúdos</span></span>
                <span className="text-vscode-green">contact <span className="text-vscode-text/60 ml-2">- Contato</span></span>
                <span className="text-vscode-green">github <span className="text-vscode-text/60 ml-2">- Ver meu GitHub</span></span>
                <span className="text-vscode-green">clear <span className="text-vscode-text/60 ml-2">- Limpar terminal</span></span>
              </div>
            </div>
          );
          break;
        case 'about':
          openFile('about.tsx');
          response = 'Abrindo about.tsx...';
          break;
        case 'projects':
          openFile('projects.tsx');
          response = 'Abrindo projects.tsx...';
          break;
        case 'experience':
          openFile('experience.tsx');
          response = 'Abrindo experience.tsx...';
          break;
        case 'stack':
          openFile('stack.ts');
          response = 'Abrindo stack.ts...';
          break;
        case 'articles':
          openFile('articles.md');
          response = 'Abrindo articles.md...';
          break;
        case 'contact':
          openFile('contact.ts');
          response = 'Abrindo contact.ts...';
          break;
        case 'github':
          window.open('https://github.com/VictorHugofny', '_blank');
          response = 'Abrindo GitHub...';
          break;
        case 'clear':
          clearTerminal();
          setInput('');
          return;
        default:
          response = <span className="text-red-400">Comando não encontrado: {cmd}. Digite "help" para ver os comandos.</span>;
      }

      addTerminalHistory(input, response);
      setInput('');
    }
  };

  return (
    <div className={`flex flex-col bg-[#1E1E1E] border-t border-vscode-border font-mono text-[13px] ${isMobile ? 'h-full' : 'h-64'} flex-shrink-0`}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-vscode-border uppercase text-[11px] text-vscode-text/70 select-none">
        <div className="flex space-x-6">
          <span className="hover:text-vscode-text cursor-pointer">Problems</span>
          <span className="hover:text-vscode-text cursor-pointer">Output</span>
          <span className="text-vscode-text border-b border-vscode-text pb-1 -mb-[9px] cursor-pointer">Terminal</span>
          <span className="hover:text-vscode-text cursor-pointer">Debug Console</span>
        </div>
        <div className="flex space-x-2">
          <X 
            size={14} 
            className="cursor-pointer hover:text-white" 
            onClick={() => { onClose ? onClose() : setTerminalOpen(false); }} 
          />
        </div>
      </div>
      
      <div 
        className="flex-1 overflow-y-auto p-4 cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {terminalHistory.map((entry, i) => (
          <div key={i} className="mb-2">
            {entry.command && (
              <div className="flex text-vscode-blue">
                <span className="mr-2 text-vscode-green">victor@portfolio.dev</span>
                <span className="text-vscode-text mr-2">~ %</span>
                <span className="text-vscode-text">{entry.command}</span>
              </div>
            )}
            <div className="text-vscode-text">{entry.response}</div>
          </div>
        ))}
        
        <div className="flex text-vscode-blue items-center">
          <span className="mr-2 text-vscode-green whitespace-nowrap">victor@portfolio.dev</span>
          <span className="text-vscode-text mr-2">~ %</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="bg-transparent border-none outline-none text-vscode-text flex-1"
            spellCheck={false}
            autoFocus
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
