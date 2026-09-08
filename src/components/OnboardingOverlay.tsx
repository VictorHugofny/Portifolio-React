import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, FolderOpen, Terminal } from 'lucide-react';

export function OnboardingOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem('portfolio_onboarding_seen');
    if (!seen) setVisible(true);
  }, []);

  const dismiss = () => {
    localStorage.setItem('portfolio_onboarding_seen', '1');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm md:hidden"
            onClick={dismiss}
          />
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            className="fixed bottom-[76px] left-4 right-4 z-[101] bg-[#0F1319] border border-vscode-border rounded-2xl shadow-2xl p-5 md:hidden"
          >
            <div className="flex items-center gap-2 mb-3">
              <Code2 size={18} className="text-vscode-blue" />
              <span className="text-white font-semibold text-sm">Bem-vindo ao portfolio.dev</span>
            </div>

            <p className="text-vscode-text/70 text-xs leading-relaxed mb-4">
              Este portfólio é um{' '}
              <span className="text-vscode-blue font-medium">editor de código</span> interativo.
              Navegue pelos arquivos para conhecer minha trajetória.
            </p>

            <div className="space-y-2.5 mb-5">
              {[
                { icon: <FolderOpen size={14} />, color: 'text-vscode-blue',   text: 'Toque em "Explorer" para ver os arquivos' },
                { icon: <Code2 size={14} />,      color: 'text-vscode-purple', text: 'Selecione um arquivo para abrir a seção' },
                { icon: <Terminal size={14} />,   color: 'text-vscode-green',  text: 'Use o Terminal e tente digitar "help"' },
              ].map(({ icon, color, text }, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className={`flex-shrink-0 ${color}`}>{icon}</span>
                  <span className="text-xs text-vscode-text/70">{text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={dismiss}
              className="w-full py-2.5 bg-vscode-blue text-white rounded-lg text-sm font-semibold hover:bg-vscode-blue/90 transition-colors"
            >
              Entendi! Vamos explorar →
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
