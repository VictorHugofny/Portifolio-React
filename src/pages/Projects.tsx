import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, User, Calendar, ChevronRight } from 'lucide-react';
import imgSicar from '../assets/BANNER SICAR.png';
import imgSigerh from '../assets/sigerh.png';
import imgPortal from '../assets/portal-atos-autorizativos.png';
import imgSaberflix from '../assets/saberflix.png';
import imgKora from '../assets/KORA.png';
import imgUniWorld from '../assets/universitario-world.webp';

interface Project {
  id: string;
  name: string;
  featured?: boolean;
  description: string;
  longDescription: string;
  client?: string;
  role: string;
  language: string[];
  responsibilities: string[];
  metrics: string[];
  background?: string;
  homepage?: string;
  artigo?: string;
  year: string | number;
}

const projects: Project[] = [
  {
    id: 'sicar-pa-plus',
    name: 'SICAR/PA+ — Cadastro Ambiental Rural',
    featured: true,
    description: 'Plataforma de Cadastro Ambiental Rural do Pará, com ferramentas avançadas de geoprocessamento e análises automatizadas.',
    longDescription: 'Atuei como Tech Lead na modernização do módulo de cadastro geoespacial do SICAR/PA+, liderando a substituição de um sistema legado e desenvolvendo funcionalidades avançadas de geoprocessamento. Trabalhei com operações espaciais utilizando PostGIS, Turf.js e JSTS, integração com GeoServer para visualização cartográfica e implementação de análises ambientais automatizadas. O projeto exigiu forte atuação em arquitetura de software, liderança técnica e desenvolvimento para uma plataforma governamental de grande escala utilizada pela SEMAS-PA.',
    client: 'SEMAS-PA (Secretaria de Estado de Meio Ambiente e Sustentabilidade)',
    role: 'Tech Lead / Full Stack Developer',
    language: ['TypeScript', 'Javascript', 'SydleOne', 'Stencil.js', 'Node.js', 'PostGIS', 'GeoServer', 'Turf.js', 'JSTS', 'Azure DevOps'],
    responsibilities: [
      'Liderança técnica da equipe e definição da arquitetura do módulo de cadastro geoespacial',
      'Liderança na substituição completa do sistema legado CAROFF por uma solução escalável',
      'Desenvolvimento de novos fluxos para cadastro, edição e validação de geometrias',
      'Implementação de cálculos espaciais complexos e validações topológicas OGC usando Turf.js, JSTS e PostGIS',
      'Integração com GeoServer para publicação de camadas cartográficas e consumo de serviços de mapas',
      'Integração com modelos de análises espaciais automatizadas para apoiar a validação ambiental',
    ],
    metrics: ['🏛 Sistema Governamental', '🌍 Uso em escala estadual (Pará)', '⚡ Modernização do legado CAROFF', '📊 Automação de análises ambientais', '🛠 Arquitetura de serviços reutilizáveis'],
    background: imgSicar,
    homepage: 'https://www.semas.pa.gov.br/2026/05/12/governo-do-para-lanca-sicar-para-modernizar-a-gestao-ambiental-e-agilizar-a-regularizacao-rural/',
    year: '2023 - 2026',
  },
  {
    id: 'sigerh',
    name: 'SIGERH - PARÁ',
    featured: false,
    description: 'Sistema de gerenciamento de recursos hídricos com funcionalidades geoespaciais avançadas.',
    longDescription: 'O SIGERH é uma plataforma robusta desenvolvida para o estado do Pará, focada no monitoramento e gestão estratégica de recursos hídricos. O sistema integra dados complexos de bacias hidrográficas com visualizações em tempo real.',
    client: 'SEMAS-PA (Secretaria de Estado de Meio Ambiente e Sustentabilidade)',
    role: 'Tech Lead / Software Engineer',
    language: ['SYDLE', 'Stencil.js', 'Web Components', 'JavaScript', 'ElasticSearch'],
    responsibilities: [
      'Arquitetura de Web Components geoespaciais',
      'Gestão técnica da equipe de desenvolvimento',
      'Otimização de consultas geoespaciais e performance',
      'Definição de padrões de integração com a plataforma SYDLE',
    ],
    metrics: ['🏛 Sistema Governamental', '🌍 Uso estadual (PA)', '⚡ Alta complexidade', '📊 Processamento geoespacial'],
    background: imgSigerh,
    homepage: 'https://portal-dos-atos-autorizativos.semas.pa.gov.br/home',
    year: '2024',
  },
  {
    id: 'portal-atos',
    name: 'Portal dos Atos Autorizativos',
    featured: false,
    description: 'Portal institucional para processos ambientais e licenciamento eletrônico.',
    longDescription: 'Desenvolvimento de um portal centralizado para a gestão de atos autorizativos, permitindo que cidadãos e empresas acompanhem processos de licenciamento ambiental de forma transparente e ágil.',
    client: 'SEMAS-PA',
    role: 'Software Engineer',
    language: ['SYDLE', 'JavaScript', 'ElasticSearch'],
    responsibilities: [
      'Desenvolvimento de interfaces dinâmicas em SYDLE',
      'Modelagem de processos BPM complexos',
      'Integração com serviços externos de autenticação',
      'Implementação de regras de negócio para licenciamento ambiental',
    ],
    metrics: ['🏛 Governamental', '📄 Licenciamento eletrônico', '🏢 Uso institucional'],
    background: imgPortal,
    homepage: 'https://portal-dos-atos-autorizativos.semas.pa.gov.br/home',
    year: '2021/2022',
  },
  {
    id: 'saberflix',
    name: 'SaberFlix - TCC',
    featured: false,
    description: 'Plataforma educacional para catalogação de filmes educacionais.',
    longDescription: 'Projeto de conclusão de curso focado na curadoria e disponibilização de conteúdos audiovisuais acadêmicos. A plataforma permite aos professores criar trilhas de aprendizagem baseadas em documentários e curtas-metragens.',
    client: 'IF Baiano (Acadêmico)',
    role: 'Desenvolvedor Fullstack',
    language: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    responsibilities: [
      'Design da arquitetura fullstack (MERN)',
      'Integração com API TMDB (API de Filmes)',
      'Gestão de banco de dados NoSQL',
      'Criação de interface baseada em UX educacional',
    ],
    metrics: ['🎓 Projeto Acadêmico (Finalista)', '🎥 Educacional', '🚀 MERN Stack'],
    background: imgSaberflix,
    homepage: 'https://www.saberflix.net.br/',
    artigo: 'https://suap.ifbaiano.edu.br/media/edu/projeto_final/TCC_II_-_SABERFLIX-468450e2b8734f75a8c75af0c4ddad49.pdf',
    year: '2023',
  },
  {
    id: 'kora3d',
    name: 'Kora 3D',
    description: 'Presentes únicos feitos com impressão 3D em Montes Claros - MG.',
    role: 'Desenvolvedor Front-end',
    language: ['React', 'Three.js', 'Styled Components', 'Vercel'],
    background: imgKora,
    client: 'Kora 3D',
    year: 2026,
    homepage: 'https://kora-3d.vercel.app/',
    longDescription: 'Na Kora Design, materializamos sua vontade de presentear de forma singular. De utilidades domésticas a Action Figures, cada peça é criada com tecnologia de impressão 3D e enviada para todo o Brasil diretamente de Montes Claros/MG. A plataforma oferece uma experiência imersiva com visualização de modelos 3D.',
    responsibilities: [
      'Desenvolvimento de interface interativa com integração de modelos 3D usando Three.js',
      'Criação de um catálogo responsivo para exibição de produtos personalizados',
      'Implementação de botões flutuantes e fluxos de contato direto para WhatsApp e Instagram',
      'Otimização de performance e deploy automatizado na Vercel',
    ],
    metrics: ['Experiência de usuário imersiva com visualização 3D em tempo real', 'Conversão estratégica focada em redes sociais', 'Design responsivo otimizado para navegação mobile'],
  },
  {
    id: 'universitario-world',
    name: 'Universitario World',
    featured: false,
    description: 'Projeto experimental de jogo acadêmico com elementos de gamificação.',
    longDescription: 'Um jogo interativo desenvolvido para simular a vida acadêmica e engajar estudantes em atividades digitais. Foco em lógica de jogo, física e interações 3D.',
    client: 'Experimental',
    role: 'Game Developer',
    language: ['Unity', 'C#'],
    responsibilities: [
      'Desenvolvimento de scripts de comportamento em C#',
      'Design de níveis e mecânicas de gamificação',
      'Otimização de performance em dispositivos móveis',
      'Integração de assets 3D e sistemas de partículas',
    ],
    metrics: ['🎮 Game Dev', '🕹 Unity Engine', '✨ Gamificação'],
    background: imgUniWorld,
    homepage: 'https://youtu.be/DYop9lguBeo?si=cgtj0IEc1xsEsyo4',
    artigo: 'https://youtu.be/DYop9lguBeo?si=cgtj0IEc1xsEsyo4',
    year: '2020',
  },
];

// ─── Project Modal ──────────────────────────────────────────────────────────

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 30 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative z-10 w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#0D1117] border border-vscode-border rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Hero Banner */}
        {project.background && (
          <div className="relative h-44 flex-shrink-0 overflow-hidden">
            <img src={project.background} alt={project.name} className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D1117]" />
            {project.featured && (
              <span className="absolute top-4 left-4 px-3 py-1 bg-vscode-yellow/20 border border-vscode-yellow/40 text-vscode-yellow text-xs font-bold uppercase tracking-wider rounded-full">
                ⭐ Em destaque
              </span>
            )}
          </div>
        )}

        {/* Header bar */}
        <div className="flex items-center justify-between px-6 pt-4 pb-2 flex-shrink-0">
          <span className="font-mono text-xs text-vscode-text/50">// {project.id}.json</span>
          <button
            onClick={onClose}
            className="text-vscode-text/50 hover:text-white hover:bg-white/10 p-1.5 rounded-md transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto px-6 pb-6 flex-1">
          <h2 className="text-2xl font-bold text-white mb-1">{project.name}</h2>

          {/* Meta row */}
          <div className="flex flex-wrap gap-4 text-sm text-vscode-text/60 mb-6">
            {project.client && (
              <span className="flex items-center gap-1.5">
                <User size={13} />
                {project.client}
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {project.year}
            </span>
            <span className="px-2 py-0.5 bg-vscode-blue/10 border border-vscode-blue/20 text-vscode-blue text-xs rounded-full font-mono">
              {project.role}
            </span>
          </div>

          {/* Long description */}
          <p className="text-vscode-text/80 leading-relaxed mb-8">{project.longDescription}</p>

          {/* Metrics chips */}
          {project.metrics?.length > 0 && (
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-vscode-text/40 mb-3">Destaques</h4>
              <div className="flex flex-wrap gap-2">
                {project.metrics.map((m, i) => (
                  <span key={i} className="text-xs px-3 py-1.5 bg-vscode-panel border border-vscode-border rounded-full text-vscode-text/80">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Responsibilities */}
          {project.responsibilities?.length > 0 && (
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-vscode-text/40 mb-3">Responsabilidades</h4>
              <ul className="space-y-2">
                {project.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-vscode-text/75 leading-relaxed">
                    <ChevronRight size={14} className="text-vscode-green mt-0.5 flex-shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech stack */}
          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-vscode-text/40 mb-3">Tecnologias</h4>
            <div className="flex flex-wrap gap-2">
              {project.language.map((lang) => (
                <span key={lang} className="text-xs px-2.5 py-1 bg-vscode-bg border border-vscode-border rounded font-mono text-vscode-purple">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 pt-2 border-t border-vscode-border">
            {project.homepage && (
              <a
                href={project.homepage}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-vscode-blue/10 hover:bg-vscode-blue/20 text-vscode-blue border border-vscode-blue/30 rounded-lg text-sm font-medium transition-colors"
              >
                <ExternalLink size={14} /> Ver Projeto
              </a>
            )}
            {project.artigo && (
              <a
                href={project.artigo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-vscode-panel hover:bg-vscode-border text-vscode-text border border-vscode-border rounded-lg text-sm font-medium transition-colors"
              >
                <ExternalLink size={14} /> Ver Artigo / TCC
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="p-4 sm:p-8 pb-24 md:pb-8 max-w-6xl mx-auto">
      <div className="flex items-center space-x-2 text-vscode-text/50 mb-4 font-mono text-xs sm:text-sm">
        <span>//</span>
        <span>Meus projetos em destaque</span>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2 sm:gap-3">
          Projetos <span className="text-vscode-blue font-mono text-xl sm:text-2xl">{'</>'}</span>
        </h1>
        <a
          href="https://github.com/VictorHugofny"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-vscode-panel border border-vscode-border rounded hover:bg-vscode-border transition-colors text-xs sm:text-sm self-start sm:self-auto"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          Ver todos no GitHub
        </a>
      </div>

      <p className="text-vscode-text/80 mb-6 sm:mb-8 max-w-2xl text-xs sm:text-sm leading-relaxed">
        Alguns projetos que desenvolvi para resolver problemas reais e aprimorar minhas habilidades.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project, i) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            key={project.id}
            className="bg-vscode-panel border border-vscode-border rounded-xl overflow-hidden flex flex-col group hover:border-vscode-blue/40 transition-colors"
          >
            {/* Card banner */}
            {project.background ? (
              <div className="h-36 overflow-hidden relative">
                <img src={project.background} alt={project.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-vscode-panel to-transparent" />
                {project.featured && (
                  <span className="absolute top-2 right-2 px-2 py-0.5 bg-vscode-yellow/20 border border-vscode-yellow/40 text-vscode-yellow text-[10px] font-bold uppercase tracking-wider rounded-full">
                    ⭐ Destaque
                  </span>
                )}
              </div>
            ) : (
              <div className="h-20 bg-gradient-to-br from-vscode-bg to-vscode-panel flex items-center justify-center border-b border-vscode-border">
                <span className="font-mono text-vscode-text/20 text-sm">{project.id}.tsx</span>
              </div>
            )}

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-base font-semibold text-white mb-2 leading-tight">{project.name}</h3>
              <p className="text-vscode-text/60 text-sm flex-1 mb-4 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.language.slice(0, 3).map((lang) => (
                  <span key={lang} className="text-[11px] px-2 py-0.5 bg-vscode-bg border border-vscode-border rounded font-mono text-vscode-text/70">
                    {lang}
                  </span>
                ))}
                {project.language.length > 3 && (
                  <span className="text-[11px] px-2 py-0.5 bg-vscode-bg border border-vscode-border rounded font-mono text-vscode-text/40">
                    +{project.language.length - 3}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-vscode-border/50">
                <a
                  href={project.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="text-vscode-blue hover:text-vscode-blue/70 flex items-center gap-1 text-sm transition-colors"
                >
                  <ExternalLink size={13} /> Ver projeto
                </a>
                <button
                  onClick={() => setSelected(project)}
                  className="text-xs font-medium text-vscode-yellow hover:text-vscode-yellow/70 flex items-center gap-1 transition-colors"
                >
                  Mais detalhes <ChevronRight size={13} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}
