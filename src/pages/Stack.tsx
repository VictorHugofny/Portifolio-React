import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    label: 'Frontend',
    color: 'text-[#61DAFB]',
    techs: [
      { name: 'JavaScript',     icon: '🟨', color: 'bg-[#F7DF1E]/10 text-[#F7DF1E] border-[#F7DF1E]/30' },
      { name: 'TypeScript',     icon: '📘', color: 'bg-[#3178C6]/10 text-[#3178C6] border-[#3178C6]/30' },
      { name: 'React.js',       icon: '⚛️',  color: 'bg-[#61DAFB]/10 text-[#61DAFB] border-[#61DAFB]/30' },
      { name: 'Vue.js',         icon: '💚', color: 'bg-[#42B883]/10 text-[#42B883] border-[#42B883]/30' },
      { name: 'Stencil.js',     icon: '🛠',  color: 'bg-[#4c4cff]/10 text-[#4c4cff] border-[#4c4cff]/30' },
      { name: 'Web Components', icon: '🧩', color: 'bg-[#9C27B0]/10 text-[#CE93D8] border-[#CE93D8]/30' },
      { name: 'Three.js',       icon: '🕷️', color: 'bg-[#ffffff]/10 text-[#e0e0e0] border-[#e0e0e0]/30' },
      { name: 'Styled Components', icon: '💅', color: 'bg-[#DB7093]/10 text-[#DB7093] border-[#DB7093]/30' },
    ]
  },
  {
    label: 'Backend',
    color: 'text-[#339933]',
    techs: [
      { name: 'Node.js',        icon: '🟩',  color: 'bg-[#339933]/10 text-[#339933] border-[#339933]/30' },
      { name: 'Express.js',     icon: '🚂',  color: 'bg-[#ffffff]/10 text-[#cccccc] border-[#cccccc]/30' },
      { name: 'REST APIs',      icon: '🔌',  color: 'bg-[#FF6B35]/10 text-[#FF6B35] border-[#FF6B35]/30' },
      { name: 'ElasticSearch',  icon: '🔍', color: 'bg-[#FEC514]/10 text-[#FEC514] border-[#FEC514]/30' },
      { name: 'SydleOne',       icon: '⚙️',  color: 'bg-[#E34F26]/10 text-[#E34F26] border-[#E34F26]/30' },
    ]
  },
  {
    label: 'Banco de Dados',
    color: 'text-[#336791]',
    techs: [
      { name: 'PostgreSQL', icon: '🐘',  color: 'bg-[#336791]/10 text-[#336791] border-[#336791]/30' },
      { name: 'MongoDB',    icon: '🍃',  color: 'bg-[#47A248]/10 text-[#47A248] border-[#47A248]/30' },
      { name: 'SQL / NoSQL',icon: '🗄',  color: 'bg-[#7c5cbf]/10 text-[#7c5cbf] border-[#7c5cbf]/30' },
    ]
  },
  {
    label: 'Geoespacial',
    color: 'text-[#4CAF50]',
    techs: [
      { name: 'PostGIS',       icon: '🗺️', color: 'bg-[#4CAF50]/10 text-[#4CAF50] border-[#4CAF50]/30' },
      { name: 'GEOS',          icon: '📐', color: 'bg-[#00897B]/10 text-[#00897B] border-[#00897B]/30' },
      { name: 'Cálculos GEO',  icon: '📡', color: 'bg-[#26C6DA]/10 text-[#26C6DA] border-[#26C6DA]/30' },
      { name: 'JSTS',          icon: '📌', color: 'bg-[#43A047]/10 text-[#43A047] border-[#43A047]/30' },
      { name: 'Mapbox GL',     icon: '🗾', color: 'bg-[#0066FF]/10 text-[#0066FF] border-[#0066FF]/30' },
      { name: 'GeoServer',     icon: '🌐', color: 'bg-[#5E9ECA]/10 text-[#5E9ECA] border-[#5E9ECA]/30' },
      { name: 'Turf.js',       icon: '📏', color: 'bg-[#FFC107]/10 text-[#FFC107] border-[#FFC107]/30' },
    ]
  },
  {
    label: 'DevOps & Ferramentas',
    color: 'text-[#0078D4]',
    techs: [
      { name: 'Azure DevOps', icon: '☁️', color: 'bg-[#0078D4]/10 text-[#0078D4] border-[#0078D4]/30' },
      { name: 'CI/CD',        icon: '🔄', color: 'bg-[#FC6D26]/10 text-[#FC6D26] border-[#FC6D26]/30' },
      { name: 'Automação',    icon: '⚡', color: 'bg-[#FF9800]/10 text-[#FF9800] border-[#FF9800]/30' },
    ]
  },
  {
    label: 'GameDev',
    color: 'text-[#9E9E9E]',
    techs: [
      { name: 'Unity',  icon: '🎮', color: 'bg-[#ffffff]/10 text-[#e0e0e0] border-[#e0e0e0]/30' },
      { name: 'C#',     icon: '🟣', color: 'bg-[#9B4F96]/10 text-[#C792EA] border-[#C792EA]/30' },
    ]
  },
];

export default function Stack() {
  const totalTechs = categories.reduce((acc, c) => acc + c.techs.length, 0);

  return (
    <div className="p-4 sm:p-8 pb-12 sm:pb-8 max-w-4xl mx-auto">
      <div className="flex items-center space-x-2 text-vscode-text/50 mb-4 sm:mb-6 font-mono text-xs sm:text-sm">
        <span>//</span>
        <span>Tecnologias e Ferramentas</span>
      </div>

      <div className="bg-vscode-bg border border-vscode-border rounded-xl p-4 sm:p-8 shadow-lg">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-white">stack.ts</h1>
          <span className="text-[10px] sm:text-xs font-mono text-vscode-text/40 bg-vscode-card px-2.5 py-1 rounded-full border border-vscode-border">
            {totalTechs} tecnologias
          </span>
        </div>

        <div className="font-mono text-xs sm:text-sm mb-4 sm:mb-6 text-vscode-text/70">
          <span className="text-vscode-purple">export</span>{' '}
          <span className="text-vscode-blue">const</span>{' '}
          <span className="text-vscode-text">myStack</span> = {'{'}
        </div>

        <div className="space-y-6 sm:space-y-8 pl-2 sm:pl-4 md:pl-8 mb-6">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIdx * 0.1 }}
            >
              {/* Category label */}
              <div className={`font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-2 sm:mb-3 flex items-center gap-2 ${cat.color}`}>
                <span className="text-vscode-text/30 font-normal">// </span>
                {cat.label}
              </div>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {cat.techs.map((tech, i) => (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: catIdx * 0.1 + i * 0.04 }}
                    whileHover={{ scale: 1.05 }}
                    key={tech.name}
                    className={`flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 border rounded-lg cursor-default select-none ${tech.color}`}
                  >
                    <span className="text-xs sm:text-base">{tech.icon}</span>
                    <span className="font-bold text-xs sm:text-sm">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="font-mono text-sm text-vscode-text/70">
          {'}'}
        </div>
      </div>
    </div>
  );
}
