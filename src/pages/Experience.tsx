import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import elogroupLogo from '../assets/elogroup.jpg';
import ifbaiano from '../assets/ifbaiano.png';

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState<any>(null);

  const experiences = [
    {
      id: 'elogroup',
      year: '2021 - Atualmente',
      title: 'Tech Lead & Software Engineer',
      company: 'EloGroup',
      logo: elogroupLogo,
      logoBg: '#1a1a1a',
      description: 'Atuação na construção de soluções digitais para órgãos públicos (como SEMAS-PA no desenvolvimento do SICAR, SIGERH e Portal de Atos Autorizativos). Liderança em desenvolvimento de software, Web Components, integrações geoespaciais e gestão técnica de equipes.',
      details: [
        'Liderança técnica (equipe de DEV) / desenvolvimento em projetos de alta complexidade governamental.',
        'Modelagem de processos BPM complexos e desenvolvimento de interfaces dinâmicas em SYDLE e Stencil.js.',
        'Arquitetura de Web Components geoespaciais e integração com GeoServer.',
        'Integração com modelos de análises espaciais automatizadas para apoiar a validação ambiental e licenciamento eletrônico.',
        'Desenvolvimento de novos fluxos para cadastro, edição e validação de geometrias (Libs GEO, Turf.js).',
        'Implementação de cálculos espaciais complexos e validações topológicas OGC usando JSTS e PostGIS.',



      ]
    },
    {
      id: 'pibid',
      year: '2020 - 2021',
      title: 'Bolsista PIBID',
      company: 'IF Baiano',
      logo: ifbaiano,
      logoBg: '#ffffff',
      description: 'Participação no Programa Institucional de Bolsa de Iniciação à Docência (PIBID). Experiência com práticas educacionais, disseminação de conhecimento e minicursos voltados para programação e tecnologia.',
      details: [
        'Elaboração e condução de práticas educacionais voltadas para o ensino de tecnologia.',
        'Disseminação de conhecimento através de minicursos, como "Introdução a Algoritmo em JavaScript".',
        'Criação de material didático e apoio pedagógico em ambientes escolares.'
      ]
    },
    {
      id: 'faculdade',
      year: '2019 - 2023',
      title: 'Graduação em Ciências da Computação',
      company: 'IF Baiano',
      logo: ifbaiano,
      logoBg: '#ffffff',
      description: 'Formação acadêmica no Instituto Federal Baiano (Campus Senhor do Bonfim). Desenvolvimento de projetos práticos, artigos científicos de segurança da informação e o TCC SaberFlix (plataforma educacional desenvolvida com a stack MERN).',
      details: [
        'Desenvolvimento da plataforma SaberFlix (MERN stack) como Trabalho de Conclusão de Curso (TCC).',
        'Publicação de artigo científico "Segurança da Informação no Contexto Escolar" na Editora Realize.',
        'Participação ativa em projetos práticos de desenvolvimento de software e GameDev (Unity/C#).',
        'Formação sólida em algoritmos, estruturas de dados, banco de dados (SQL/NoSQL) e engenharia de software.'
      ]
    }
  ];

  return (
    <div className="p-4 sm:p-8 pb-12 sm:pb-8 max-w-3xl mx-auto relative">
      <div className="flex items-center space-x-2 text-vscode-text/50 mb-6 font-mono text-xs sm:text-sm">
        <span>//</span>
        <span>Minha jornada até aqui</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12">
        Experiência
      </h1>

      <div className="relative border-l-2 border-vscode-border ml-2 sm:ml-4 space-y-8 sm:space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            key={exp.id}
            className="relative pl-5 sm:pl-8"
          >
            <div className="absolute w-4 h-4 bg-vscode-bg border-2 border-vscode-blue rounded-full -left-[9px] top-1.5 shadow-[0_0_10px_rgba(88,166,255,0.4)]"></div>

            {/* Header: logo + title */}
            <div className="flex items-start gap-2.5 sm:gap-3 mb-2">
              <div
                className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden border border-vscode-border flex items-center justify-center shadow-md mt-0.5"
                style={{ background: exp.logoBg }}
              >
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-vscode-blue font-mono text-[11px] sm:text-xs font-bold mb-0.5">{exp.year}</div>
                <h3 className="text-base sm:text-xl font-semibold text-white leading-tight break-words">{exp.title}</h3>
                <div className="text-vscode-text/50 text-xs mt-0.5">{exp.company}</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-vscode-text/70 leading-relaxed mb-3 sm:mb-4">
              {exp.description}
            </p>

            <button
              onClick={() => setSelectedExp(exp)}
              className="text-vscode-yellow text-sm font-medium flex items-center hover:underline focus:outline-none"
            >
              Ver mais informações <ChevronRight size={16} className="ml-1" />
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-vscode-panel border border-vscode-border rounded-xl shadow-2xl w-full max-w-2xl relative z-10 overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-vscode-border bg-vscode-bg/50">
                <div className="font-mono text-sm text-vscode-text/70 flex items-center gap-2">
                  <span className="text-vscode-blue">{'{}'}</span> detalhes.json
                </div>
                <button
                  onClick={() => setSelectedExp(null)}
                  className="text-vscode-text/50 hover:text-white hover:bg-white/10 p-1.5 rounded-md transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 max-h-[70vh] overflow-y-auto">
                {/* Modal: company identity */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl overflow-hidden border border-vscode-border flex items-center justify-center flex-shrink-0 shadow-lg"
                    style={{ background: selectedExp.logoBg }}
                  >
                    <img
                      src={selectedExp.logo}
                      alt={`${selectedExp.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white leading-tight">{selectedExp.title}</h2>
                    <div className="text-vscode-text/60 text-sm">{selectedExp.company}</div>
                    <div className="text-vscode-blue font-mono text-xs mt-1">{selectedExp.year}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-vscode-text font-semibold uppercase tracking-wider text-xs">Principais Atividades:</h4>
                  <ul className="space-y-3">
                    {selectedExp.details.map((detail: string, idx: number) => (
                      <li key={idx} className="flex items-start text-vscode-text/80 text-sm leading-relaxed">
                        <span className="text-vscode-green mr-3 mt-1">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 border-t border-vscode-border bg-vscode-bg/50 flex justify-end">
                <button
                  onClick={() => setSelectedExp(null)}
                  className="px-4 py-2 bg-vscode-blue/10 text-vscode-blue hover:bg-vscode-blue/20 rounded font-medium text-sm transition-colors border border-vscode-blue/30"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
