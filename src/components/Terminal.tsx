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
      const raw = input.trim();
      const cmd = raw.toLowerCase();
      let response: React.ReactNode = '';

      // ── Konami tracker ──────────────────────────────────────────────────────
      const KONAMI = ['up','up','down','down','left','right','left','right','b','a'];
      const konamiState = (window as any).__konamiIdx ?? 0;
      const konamiMap: Record<string, string> = {
        '↑': 'up', '↓': 'down', '←': 'left', '→': 'right', 'b': 'b', 'a': 'a',
        'up': 'up', 'down': 'down', 'left': 'left', 'right': 'right',
      };
      if (konamiMap[cmd] !== undefined) {
        const next = konamiState + (konamiMap[cmd] === KONAMI[konamiState] ? 1 : 0);
        (window as any).__konamiIdx = next === KONAMI.length ? 0 : (konamiMap[cmd] === KONAMI[next === 0 ? 0 : next - 1] ? next : 0);
        if (next === KONAMI.length) {
          (window as any).__konamiIdx = 0;
          response = (
            <div className="space-y-1">
              <span className="text-vscode-yellow font-bold">🎮 KONAMI CODE ATIVADO!</span>
              <div className="text-vscode-green">+30 vidas desbloqueadas. Você é definitivamente um dev de verdade.</div>
              <div className="text-vscode-text/60 text-xs">↑↑↓↓←→←→BA — clássico desde 1986.</div>
            </div>
          );
          addTerminalHistory(raw, response);
          setInput('');
          return;
        }
      }

      switch (cmd) {
        // ── Navegação ──────────────────────────────────────────────────────────
        case 'help':
          response = (
            <div className="mt-1 space-y-3">
              <div>
                <div className="text-vscode-text/50 text-xs mb-1.5">// navegação</div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-0.5">
                  {[['about','Sobre mim'],['projects','Projetos'],['experience','Experiência'],['stack','Tecnologias'],['articles','Publicações'],['contact','Contato'],['github','Abrir GitHub']].map(([c, d]) => (
                    <span key={c} className="text-vscode-green text-sm">{c} <span className="text-vscode-text/50">— {d}</span></span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-vscode-text/50 text-xs mb-1.5">// perguntas (terminal IA)</div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-0.5">
                  {[['skills','Minhas habilidades'],['liderança','Experiência de liderança'],['projetos','Projeto favorito'],['formação','Formação acadêmica'],['contato','Como me contatar'],['stack?','Meu stack técnico']].map(([c, d]) => (
                    <span key={c} className="text-vscode-purple text-sm">{c} <span className="text-vscode-text/50">— {d}</span></span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-vscode-text/50 text-xs mb-1.5">// easter eggs 👀</div>
                <div className="text-vscode-text/40 text-xs">Tem alguns comandos secretos… descubra!</div>
              </div>
              <span className="text-vscode-text/50 text-xs">clear — limpar terminal</span>
            </div>
          );
          break;

        case 'about': openFile('about.tsx'); response = 'Abrindo about.tsx...'; break;
        case 'projects': openFile('projects.tsx'); response = 'Abrindo projects.tsx...'; break;
        case 'experience': openFile('experience.tsx'); response = 'Abrindo experience.tsx...'; break;
        case 'stack': openFile('stack.ts'); response = 'Abrindo stack.ts...'; break;
        case 'articles': openFile('articles.md'); response = 'Abrindo articles.md...'; break;
        case 'contact': openFile('contact.ts'); response = 'Abrindo contact.ts...'; break;
        case 'github':
          window.open('https://github.com/VictorHugofny', '_blank');
          response = 'Abrindo GitHub...';
          break;
        case 'clear': clearTerminal(); setInput(''); return;

        // ── Terminal IA ───────────────────────────────────────────────────────
        case 'skills':
        case 'skills?':
        case 'quais são suas skills?':
        case 'quais suas skills':
          response = (
            <div className="space-y-1">
              <div className="text-vscode-text/70 text-xs mb-1">// principais habilidades</div>
              <div className="flex flex-wrap gap-1.5">
                {['TypeScript','JavaScript','React.js','Node.js','Stencil.js','Web Components','PostGIS','GeoServer','Turf.js','JSTS','MongoDB','PostgreSQL','Azure DevOps','SydleOne'].map(s => (
                  <span key={s} className="px-2 py-0.5 bg-vscode-panel border border-vscode-border rounded text-xs text-vscode-purple font-mono">{s}</span>
                ))}
              </div>
            </div>
          );
          break;

        case 'liderança':
        case 'lideranca':
        case 'você tem experiência com liderança?':
        case 'tem experiencia de lideranca':
          response = (
            <div className="space-y-1 text-sm">
              <span className="text-vscode-green">✓</span>
              <span className="text-vscode-text"> Sim! Atuo como </span>
              <span className="text-vscode-blue font-medium">Tech Lead na EloGroup desde 2021</span>
              <span className="text-vscode-text">, liderando squads em projetos governamentais de alta complexidade.</span>
              <div className="text-vscode-text/60 text-xs mt-1">Code reviews, definição de arquitetura, oficinas técnicas e mentoria de devs.</div>
            </div>
          );
          break;

        case 'projetos':
        case 'projetos?':
        case 'projeto favorito':
        case 'qual seu projeto favorito':
        case 'qual seu projeto favorito?':
          response = (
            <div className="space-y-1 text-sm">
              <div><span className="text-vscode-yellow">⭐</span> <span className="text-white font-medium">SICAR/PA+</span> <span className="text-vscode-text/60">— Cadastro Ambiental Rural do Pará</span></div>
              <div className="text-vscode-text/70 text-xs leading-relaxed">Trabalhei com geoprocessamento real, PostGIS, análises espaciais e liderança técnica para um sistema governamental utilizado em escala estadual. Complexo, impactante e com dados ambientais de todo o Pará 🗺️</div>
            </div>
          );
          break;

        case 'stack?':
        case 'stack principal':
        case 'qual sua stack':
        case 'qual sua stack?':
          response = (
            <div className="text-sm space-y-1">
              <div className="text-vscode-text/50 text-xs">export const myStack = {'{'}</div>
              <div className="pl-4 space-y-0.5">
                <div><span className="text-vscode-blue">frontend</span>: <span className="text-vscode-green">"React, TypeScript, Stencil.js"</span>,</div>
                <div><span className="text-vscode-blue">backend</span>: <span className="text-vscode-green">"Node.js, Express, SydleOne"</span>,</div>
                <div><span className="text-vscode-blue">geo</span>: <span className="text-vscode-green">"PostGIS, Turf.js, JSTS, GeoServer"</span>,</div>
                <div><span className="text-vscode-blue">db</span>: <span className="text-vscode-green">"PostgreSQL, MongoDB"</span>,</div>
              </div>
              <div className="text-vscode-text/50 text-xs">{'}'}</div>
            </div>
          );
          break;

        case 'formação':
        case 'formacao':
        case 'onde se formou':
        case 'qual sua formação':
          response = (
            <div className="text-sm space-y-1">
              <div><span className="text-vscode-purple font-medium">Ciências da Computação</span> <span className="text-vscode-text/60">— IF Baiano, Senhor do Bonfim</span></div>
              <div className="text-vscode-text/60 text-xs">TCC: SaberFlix (MERN stack) · Artigo: Segurança da Informação no Contexto Escolar · Formado em 2023</div>
            </div>
          );
          break;

        case 'contato':
        case 'como te contatar':
        case 'como entrar em contato':
          response = (
            <div className="text-sm space-y-1">
              <div><span className="text-vscode-blue">email</span>: <span className="text-vscode-yellow">victorhugofny@gmail.com</span></div>
              <div><span className="text-vscode-blue">linkedin</span>: <span className="text-vscode-yellow">linkedin.com/in/victor-hugo-santana</span></div>
              <div><span className="text-vscode-blue">github</span>: <span className="text-vscode-yellow">github.com/VictorHugofny</span></div>
            </div>
          );
          break;

        case 'ls':
        case 'ls src':
          response = (
            <div className="grid grid-cols-3 gap-2 text-xs font-mono mt-1">
              {['about.tsx','projects.tsx','experience.tsx','stack.ts','articles.md','contact.ts'].map(f => (
                <span key={f} className="text-vscode-blue">{f}</span>
              ))}
            </div>
          );
          break;

        case 'pwd':
          response = <span className="text-vscode-green font-mono">/portfolio/victor-hugo/src</span>;
          break;

        // ── Easter Eggs ───────────────────────────────────────────────────────
        case 'whoami':
          response = (
            <div className="space-y-1 text-sm">
              <div className="text-vscode-green font-mono">victor-hugo@portfolio.dev</div>
              <div className="text-vscode-text/70 text-xs">Software Engineer · Tech Lead · Geek · Gamer · Desenvolvedor de soluções que impactam o mundo real 🌍</div>
              <div className="text-vscode-text/40 text-xs font-mono mt-1">uid=1 gid=1 groups=devs,leaders,geeks</div>
            </div>
          );
          break;

        case 'matrix': {
          const chars = '01アイウエオカキクケコサシスセソタチツテト';
          const rain = Array.from({ length: 8 }, () =>
            Array.from({ length: 12 }, () => chars[Math.floor(Math.random() * chars.length)]).join(' ')
          );
          response = (
            <div className="font-mono text-[11px] leading-relaxed">
              {rain.map((row, i) => (
                <div key={i} className={i % 2 === 0 ? 'text-vscode-green' : 'text-vscode-green/40'}>{row}</div>
              ))}
              <div className="text-vscode-green font-bold mt-1">Wake up, Neo... 🐇</div>
            </div>
          );
          break;
        }

        case 'sudo hire me':
        case 'sudo hire-me':
          response = (
            <div className="space-y-1">
              <div className="text-vscode-text/60 text-xs">[sudo] password for victor: ••••••••</div>
              <div className="text-vscode-green font-bold text-sm">✓ Acesso root concedido.</div>
              <div className="text-vscode-yellow font-bold">🎉 CONTRATADO! Parabéns pela excelente escolha!</div>
              <div className="text-vscode-text/60 text-xs mt-1">Para oficializar, envie um email para victorhugofny@gmail.com 😄</div>
            </div>
          );
          break;

        case '↑↑↓↓←→←→ba':
        case 'konami':
          response = (
            <div className="space-y-1">
              <span className="text-vscode-yellow font-bold">🎮 KONAMI CODE!</span>
              <div className="text-vscode-green">Você conhece o código. Definitivamente um gamer e dev de verdade.</div>
            </div>
          );
          break;

        default:
          response = <span className="text-red-400">'{cmd}' não reconhecido. Digite help.</span>;
      }

      addTerminalHistory(raw, response);
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
