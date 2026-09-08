import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, X, Zap, Check } from 'lucide-react';

const EMAIL = 'victorhugofny@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/victor-hugo-santana/';

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function ContactFAB() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const actions = [
    {
      icon: copied ? <Check size={16} /> : <Copy size={16} />,
      label: copied ? 'Copiado!' : 'Copiar e-mail',
      onClick: copyEmail,
      color: 'bg-vscode-panel border-vscode-border text-vscode-text hover:border-vscode-blue/50',
    },
    {
      icon: <Mail size={16} />,
      label: 'Enviar e-mail',
      href: `mailto:${EMAIL}`,
      color: 'bg-vscode-panel border-vscode-border text-vscode-text hover:border-vscode-purple/50',
    },
    {
      icon: <LinkedinIcon />,
      label: 'LinkedIn',
      href: LINKEDIN,
      color: 'bg-vscode-blue/10 border-vscode-blue/30 text-vscode-blue hover:bg-vscode-blue/20',
    },
  ];

  return (
    <div className="fixed bottom-[72px] right-4 z-40 md:hidden flex flex-col items-end gap-2">
      <AnimatePresence>
        {open &&
          actions.map((action, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              transition={{ delay: (actions.length - 1 - i) * 0.05 }}
            >
              {action.href ? (
                <a
                  href={action.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-medium shadow-lg transition-colors ${action.color}`}
                  onClick={() => setOpen(false)}
                >
                  {action.icon}
                  {action.label}
                </a>
              ) : (
                <button
                  onClick={action.onClick}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-medium shadow-lg transition-colors ${action.color}`}
                >
                  {action.icon}
                  {action.label}
                </button>
              )}
            </motion.div>
          ))}
      </AnimatePresence>

      {/* FAB principal */}
      <motion.button
        whileTap={{ scale: 0.92 }}
        onClick={() => setOpen((o) => !o)}
        className="w-12 h-12 rounded-full bg-vscode-blue shadow-lg shadow-vscode-blue/30 flex items-center justify-center text-white hover:bg-vscode-blue/90 transition-colors"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={20} />
            </motion.span>
          ) : (
            <motion.span key="z" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <Zap size={20} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

