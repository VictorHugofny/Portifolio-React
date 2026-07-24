import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileText } from 'lucide-react';

const articles = [
  {
    id: 'saberflix',
    type: 'TCC',
    title: 'SaberFlix: Plataforma educacional para catalogação de filmes educacionais',
    authors: ['Victor Hugo de Carvalho Santana'],
    publisher: 'IF Baiano — Senhor do Bonfim',
    year: '2023',
    links: [
      { label: 'Ver plataforma', url: 'https://www.saberflix.net.br/' },
      { label: 'PDF', url: 'https://suap.ifbaiano.edu.br/media/edu/projeto_final/TCC_II_-_SABERFLIX-468450e2b8734f75a8c75af0c4ddad49.pdf' },
    ],
  },
  {
    id: 'seguranca',
    type: 'Artigo',
    title: 'Segurança da Informação no Contexto Escolar',
    authors: [
      'Victor Hugo de Carvalho Santana',
      'Douglas Silva Santos',
      'Luis Henrique de Almeida Gomes',
      'Damon Ferreira Farias',
    ],
    publisher: 'Editora Realize',
    year: '2022',
    links: [
      { label: 'Ver publicação', url: 'https://editorarealize.com.br/artigo/visualizar/80791' },
      { label: 'PDF', url: 'https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf' },
    ],
  },
];

const typeColor: Record<string, string> = {
  TCC: 'text-vscode-purple border-vscode-purple/30 bg-vscode-purple/10',
  Artigo: 'text-vscode-green border-vscode-green/30 bg-vscode-green/10',
};

export default function Articles() {
  return (
    <div className="p-4 sm:p-6 pb-24 md:pb-8 max-w-2xl mx-auto">
      <div className="flex items-center gap-2 text-vscode-text/40 mb-6 font-mono text-xs">
        <span>#</span>
        <span>articles.md</span>
      </div>

      <h1 className="text-xl font-bold text-white mb-6">Publicações Acadêmicas</h1>

      <div className="space-y-3">
        {articles.map((article, i) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-vscode-panel border border-vscode-border rounded-lg p-4 hover:border-vscode-text/20 transition-colors"
          >
            <div className="flex items-start gap-3">
              {/* Icon */}
              <div className="mt-0.5 flex-shrink-0 text-vscode-text/30">
                <FileText size={16} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Type badge + year */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border font-mono ${typeColor[article.type]}`}>
                    {article.type}
                  </span>
                  <span className="text-vscode-text/30 text-xs font-mono">{article.year}</span>
                </div>

                {/* Title */}
                <h2 className="text-sm font-semibold text-white leading-snug mb-1.5">
                  {article.title}
                </h2>

                {/* Authors */}
                <p className="text-xs text-vscode-text/50 mb-3 leading-relaxed">
                  {article.authors.join(' · ')}
                  <span className="text-vscode-text/30"> — {article.publisher}</span>
                </p>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {article.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-xs text-vscode-blue hover:text-vscode-blue/70 transition-colors"
                    >
                      <ExternalLink size={11} />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
