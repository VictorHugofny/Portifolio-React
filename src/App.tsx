import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TitleBar } from './components/TitleBar';
import { Sidebar } from './components/Sidebar';
import { Explorer } from './components/Explorer';
import { Tabs } from './components/Tabs';
import { Terminal } from './components/Terminal';
import { useAppStore } from './store/useAppStore';
import {
  FolderOpen,
  Search,
  TerminalSquare,
  User,
  ChevronDown,
  ChevronRight,
  FileCode,
  FileJson,
  FileType,
  X,
} from 'lucide-react';
import { clsx } from 'clsx';
import type { FileType as AppFileType } from './store/useAppStore';

// Pages
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Stack from './pages/Stack';
import Articles from './pages/Articles';
import Contact from './pages/Contact';

// ─── Mobile Explorer Drawer ──────────────────────────────────────────────────

const files: { name: AppFileType; icon: React.ReactNode; color: string; label: string }[] = [
  { name: 'about.tsx',      icon: <User size={16} />,      color: 'text-vscode-blue',   label: 'Sobre mim' },
  { name: 'projects.tsx',   icon: <FileType size={16} />,  color: 'text-vscode-blue',   label: 'Meus projetos' },
  { name: 'articles.md',    icon: <FileType size={16} />,  color: 'text-vscode-green',  label: 'Artigos e conteúdos' },
  { name: 'experience.tsx', icon: <FileType size={16} />,  color: 'text-vscode-blue',   label: 'Minha experiência' },
  { name: 'stack.ts',       icon: <FileCode size={16} />,  color: 'text-vscode-blue',   label: 'Tecnologias' },
  { name: 'contact.ts',     icon: <FileJson size={16} />,  color: 'text-vscode-yellow', label: 'Contato' },
];

function MobileExplorerDrawer({ onClose }: { onClose: () => void }) {
  const [isOpen, setIsOpen] = useState(true);
  const { activeFile, openFile } = useAppStore();

  const handleSelect = (name: AppFileType) => {
    openFile(name);
    onClose();
  };

  return (
    <div className="flex flex-col h-full w-72 bg-[#0F1319] overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-vscode-border">
        <span className="text-[11px] font-bold uppercase tracking-widest text-vscode-text/60">Explorer</span>
        <button onClick={onClose} className="text-vscode-text/40 hover:text-white transition-colors">
          <X size={18} />
        </button>
      </div>

      {/* Tree */}
      <div className="flex-1 py-2">
        <div
          className="flex items-center px-4 py-1.5 cursor-pointer hover:bg-vscode-card text-sm font-bold uppercase tracking-wider text-vscode-text/70"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ChevronDown size={14} className="mr-1.5" /> : <ChevronRight size={14} className="mr-1.5" />}
          PORTFOLIO
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden ml-2"
            >
              <div className="flex items-center px-4 py-1.5 text-sm text-vscode-text/50">
                <FolderOpen size={15} className="mr-2 text-vscode-blue" />
                src
              </div>

              {files.map((file) => (
                <div
                  key={file.name}
                  onClick={() => handleSelect(file.name)}
                  className={clsx(
                    'flex items-center pl-10 pr-4 py-2 cursor-pointer transition-colors',
                    activeFile === file.name
                      ? 'bg-vscode-card border-l-2 border-vscode-blue text-white'
                      : 'hover:bg-vscode-card text-vscode-text/80'
                  )}
                >
                  <div className={clsx('mr-2 flex-shrink-0', file.color)}>{file.icon}</div>
                  <div>
                    <div className="text-[13px] font-mono leading-tight">{file.name}</div>
                    <div className="text-[11px] text-vscode-text/40">{file.label}</div>
                  </div>
                  {activeFile === file.name && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-vscode-blue flex-shrink-0" />
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Mobile Tabs Bottom Sheet ────────────────────────────────────────────────

function MobileTabsSheet({ onClose }: { onClose: () => void }) {
  const { openFiles, activeFile, openFile, closeFile } = useAppStore();

  return (
    <div className="flex flex-col h-full bg-[#0F1319]">
      <div className="flex items-center justify-between px-4 py-3 border-b border-vscode-border">
        <span className="text-[11px] font-bold uppercase tracking-widest text-vscode-text/60">Abas abertas</span>
        <button onClick={onClose} className="text-vscode-text/40 hover:text-white transition-colors">
          <X size={18} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-2">
        {openFiles.length === 0 ? (
          <p className="px-4 py-3 text-sm text-vscode-text/40 italic">Nenhuma aba aberta</p>
        ) : (
          openFiles.map((f) => (
            <div
              key={f}
              className={clsx(
                'flex items-center justify-between px-4 py-2.5 cursor-pointer transition-colors',
                activeFile === f ? 'bg-vscode-card text-white' : 'text-vscode-text/70 hover:bg-vscode-card'
              )}
              onClick={() => { openFile(f); onClose(); }}
            >
              <div className="flex items-center gap-2">
                <FileType size={14} className="text-vscode-blue" />
                <span className="text-sm font-mono">{f}</span>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); closeFile(f); }}
                className="text-vscode-text/30 hover:text-white p-1 rounded"
              >
                <X size={13} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

type MobilePanel = 'explorer' | 'tabs' | 'terminal' | null;

function App() {
  const { activeFile, isTerminalOpen, toggleTerminal, setTerminalOpen } = useAppStore();
  const [mobilePanel, setMobilePanel] = useState<MobilePanel>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === '/') { e.preventDefault(); toggleTerminal(); }
      if (e.key === 'Escape') { setTerminalOpen(false); setMobilePanel(null); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleTerminal, setTerminalOpen]);

  const togglePanel = (panel: MobilePanel) =>
    setMobilePanel((prev) => (prev === panel ? null : panel));

  const renderActiveFile = () => {
    switch (activeFile) {
      case 'about.tsx':      return <About />;
      case 'projects.tsx':   return <Projects />;
      case 'experience.tsx': return <Experience />;
      case 'stack.ts':       return <Stack />;
      case 'articles.md':    return <Articles />;
      case 'contact.ts':     return <Contact />;
      default: return (
        <div className="flex items-center justify-center h-full w-full opacity-50">
          <div className="text-center">
            <h1 className="text-4xl mb-4 font-mono">portfolio.dev</h1>
            <p>Selecione um arquivo para visualizar</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-vscode-bg overflow-hidden text-sm">
      <TitleBar />

      <div className="flex flex-1 overflow-hidden">
        {/* ── Desktop: Sidebar + Explorer ── */}
        <div className="hidden md:flex h-full">
          <Sidebar />
          <Explorer />
        </div>

        {/* ── Main Content ── */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
          {/* Desktop tabs */}
          <div className="hidden md:block">
            <Tabs />
          </div>

          {/* Mobile: file name breadcrumb */}
          <div className="md:hidden flex items-center px-3 py-1.5 bg-[#0F1319] border-b border-vscode-border text-xs font-mono text-vscode-text/60 gap-2">
            <FileType size={12} className="text-vscode-blue" />
            <span className="text-vscode-blue">{activeFile ?? 'portfolio.dev'}</span>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto no-scrollbar relative z-0">
            {renderActiveFile()}
          </div>

          {/* Desktop terminal */}
          <div className="hidden md:block">
            {isTerminalOpen && <Terminal />}
          </div>

          {/* Desktop Status Bar */}
          <div className="hidden md:flex h-6 bg-[#007ACC] text-white items-center justify-between px-3 text-[11px] font-mono select-none flex-shrink-0 z-20">
            <div className="flex items-center space-x-4">
              <span className="flex items-center gap-1 hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer">
                <span></span> main*
              </span>
              <span className="flex items-center gap-1 hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer">
                <span>0⊗ 0⚠</span>
              </span>
              <button
                onClick={toggleTerminal}
                className="flex items-center gap-1.5 hover:bg-white/20 px-2 py-0.5 rounded cursor-pointer font-semibold transition-colors"
                title="Alternar Terminal (Ctrl+/)"
              >
                <TerminalSquare size={13} />
                <span>{isTerminalOpen ? 'Fechar Terminal' : 'Abrir Terminal (Ctrl+/)'}</span>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <span className="hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer">Ln 1, Col 1</span>
              <span className="hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer">UTF-8</span>
              <span className="hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer">TypeScript React</span>
              <span className="hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer">Prettier</span>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MOBILE ONLY: Drawer + Bottom Nav + Terminal
         ══════════════════════════════════════════ */}
      <div className="md:hidden">

        {/* Floating terminal button */}
        <AnimatePresence>
          {mobilePanel === null && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => togglePanel('terminal')}
              className="fixed bottom-20 right-4 z-40 w-12 h-12 rounded-full bg-vscode-blue shadow-lg flex items-center justify-center text-white"
            >
              <TerminalSquare size={20} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Mobile terminal overlay */}
        <AnimatePresence>
          {mobilePanel === 'terminal' && (
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 35 }}
              className="fixed inset-x-0 bottom-[60px] h-[45vh] z-50 shadow-2xl border-t border-vscode-border"
            >
              <Terminal isMobile onClose={() => setMobilePanel(null)} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Explorer drawer (slide from left) */}
        <AnimatePresence>
          {mobilePanel === 'explorer' && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                onClick={() => setMobilePanel(null)}
              />
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 35 }}
                className="fixed left-0 top-0 bottom-[60px] z-50 shadow-2xl border-r border-vscode-border"
              >
                <MobileExplorerDrawer onClose={() => setMobilePanel(null)} />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Tabs sheet (slide from right) */}
        <AnimatePresence>
          {mobilePanel === 'tabs' && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                onClick={() => setMobilePanel(null)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 35 }}
                className="fixed right-0 top-0 bottom-[60px] z-50 w-72 shadow-2xl border-l border-vscode-border"
              >
                <MobileTabsSheet onClose={() => setMobilePanel(null)} />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* ── Bottom Navigation Bar ── */}
        <div className="fixed bottom-0 inset-x-0 h-[60px] bg-[#0F1319] border-t border-vscode-border z-30 flex items-stretch">

          {/* Explorer */}
          <button
            onClick={() => togglePanel('explorer')}
            className={clsx(
              'flex-1 flex flex-col items-center justify-center gap-0.5 transition-colors',
              mobilePanel === 'explorer' ? 'text-vscode-blue' : 'text-vscode-text/50 hover:text-vscode-text'
            )}
          >
            <FolderOpen size={18} />
            <span className="text-[10px] font-medium">Explorer</span>
          </button>

          {/* Search (opens explorer) */}
          <button
            onClick={() => togglePanel('explorer')}
            className="flex-1 flex flex-col items-center justify-center gap-0.5 text-vscode-text/50 hover:text-vscode-text transition-colors"
          >
            <Search size={18} />
            <span className="text-[10px] font-medium">Search</span>
          </button>

          {/* Terminal */}
          <button
            onClick={() => togglePanel('terminal')}
            className={clsx(
              'flex-1 flex flex-col items-center justify-center gap-0.5 transition-colors',
              mobilePanel === 'terminal' ? 'text-vscode-blue' : 'text-vscode-text/50 hover:text-vscode-text'
            )}
          >
            <TerminalSquare size={18} />
            <span className="text-[10px] font-medium">Terminal</span>
          </button>

          {/* Abas */}
          <button
            onClick={() => togglePanel('tabs')}
            className={clsx(
              'flex-1 flex flex-col items-center justify-center gap-0.5 transition-colors',
              mobilePanel === 'tabs' ? 'text-vscode-blue' : 'text-vscode-text/50 hover:text-vscode-text'
            )}
          >
            <FileType size={18} />
            <span className="text-[10px] font-medium">Abas</span>
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;
