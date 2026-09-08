import { create } from 'zustand';

export type FileType = 'about.tsx' | 'projects.tsx' | 'experience.tsx' | 'stack.ts' | 'articles.md' | 'contact.ts';

interface AppState {
  activeFile: FileType | null;
  openFiles: FileType[];
  visitedFiles: FileType[];
  isTerminalOpen: boolean;
  terminalHistory: { command: string; response: string | React.ReactNode }[];
  
  openFile: (file: FileType) => void;
  closeFile: (file: FileType) => void;
  markVisited: (file: FileType) => void;
  toggleTerminal: () => void;
  setTerminalOpen: (isOpen: boolean) => void;
  addTerminalHistory: (command: string, response: string | React.ReactNode) => void;
  clearTerminal: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  activeFile: 'about.tsx',
  openFiles: ['about.tsx'],
  visitedFiles: ['about.tsx'],
  isTerminalOpen: true,
  terminalHistory: [
    { command: '', response: 'Welcome to portfolio.dev terminal. Type "help" to see available commands.' }
  ],
  
  openFile: (file) => set((state) => {
    if (!state.openFiles.includes(file)) {
      return {
        openFiles: [...state.openFiles, file],
        activeFile: file,
        visitedFiles: state.visitedFiles.includes(file) ? state.visitedFiles : [...state.visitedFiles, file],
      };
    }
    return { activeFile: file };
  }),
  
  markVisited: (file) => set((state) => ({
    visitedFiles: state.visitedFiles.includes(file) ? state.visitedFiles : [...state.visitedFiles, file],
  })),
  
  closeFile: (file) => set((state) => {
    const newOpenFiles = state.openFiles.filter((f) => f !== file);
    let newActiveFile = state.activeFile;
    
    if (state.activeFile === file) {
      if (newOpenFiles.length > 0) {
        newActiveFile = newOpenFiles[newOpenFiles.length - 1];
      } else {
        newActiveFile = null;
      }
    }
    
    return { openFiles: newOpenFiles, activeFile: newActiveFile };
  }),
  
  toggleTerminal: () => set((state) => ({ isTerminalOpen: !state.isTerminalOpen })),
  
  setTerminalOpen: (isOpen) => set({ isTerminalOpen: isOpen }),
  
  addTerminalHistory: (command, response) => set((state) => ({
    terminalHistory: [...state.terminalHistory, { command, response }]
  })),
  
  clearTerminal: () => set({ terminalHistory: [] }),
}));

