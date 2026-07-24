import React from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/cartoon.png';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 sm:p-8 pb-24 md:pb-8 max-w-4xl mx-auto"
    >
      <div className="flex items-center space-x-2 text-vscode-text/50 mb-6 font-mono text-xs sm:text-sm">
        <span>//</span>
        <span>Apresentação inicial</span>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start text-center md:text-left">
        <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-2xl overflow-hidden bg-vscode-panel border border-vscode-border flex-shrink-0 relative group">
          {/* Fallback to generic avatar if photo doesn't load */}
          <div className="absolute inset-0 flex items-center justify-center text-vscode-text/20">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
          <img src={profilePhoto} alt="Victor Hugo" className="w-full h-full object-cover relative z-10 opacity-90 group-hover:opacity-100 transition-opacity" />
        </div>

        <div className="flex-1 w-full">
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-2 leading-tight">
            Olá! <span className="text-vscode-blue">{'<'}</span> Sou o <span className="text-vscode-purple">Victor Hugo</span> <span className="text-vscode-blue">{'/>'}</span>
          </h1>
          <h2 className="text-base sm:text-xl text-vscode-blue mb-4 sm:mb-6 font-mono">
            Software Engineer IV & Tech Lead na Elogroup
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-vscode-text/90 leading-relaxed text-left">
            <p>
              Atuo na construção de soluções digitais para órgãos públicos, com foco na área ambiental, trabalhando na Elogroup..
            </p>
            <p>
              Trabalho com arquitetura e desenvolvimento utilizando tecnologias como JavaScript, TypeScript, Node.js, SydleOne, Stencil.js, React.js e bancos de dados relacionais e não relacionais.
            </p>
            <p>
              Também participo da definição técnica das soluções, condução de code reviews e disseminação de conhecimento por meio de documentação e oficinas técnicas.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start w-full sm:w-auto">
            <a href="https://github.com/VictorHugofny" target="_blank" rel="noreferrer" className="px-6 py-2.5 bg-vscode-panel hover:bg-vscode-border border border-vscode-border rounded text-white flex items-center justify-center gap-2 transition-colors text-sm font-medium">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/victor-hugo-santana/" target="_blank" rel="noreferrer" className="px-6 py-2.5 bg-vscode-blue/10 hover:bg-vscode-blue/20 text-vscode-blue border border-vscode-blue/30 rounded flex items-center justify-center gap-2 transition-colors text-sm font-medium">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
