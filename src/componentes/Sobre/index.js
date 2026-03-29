import sobre from './sobre.json';
import './style.css';
import foto from '../../assets/foto.jpeg';
import avatar from '../../assets/cartoon.png'
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import elogroupLogo from '../../assets/elogroup.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import './ProfileImage.css'; // CSS separado
import Background3D from '../Background3D';
import {
    IconJS, IconTS, IconReact, IconNode, IconDatabase,
    IconExternal, IconStencil, IconAzure, IconGeo,
    IconAutomation, IconSydle, IconDefault, RestApi, WebComponents,
    IconStar, IconBook, IconPalette, IconRocket, IconTool, IconLink
} from './SVGIcons';


const experienceData = [
    {
        id: 'tech-lead',
        title: 'Tech Lead & Arquitetura Técnica',
        shortDesc: 'Atuação como Tech Lead com foco em arquitetura de soluções, automação de processos e integração de serviços digitais.',
        icon: <IconStar />,
        fullContent: {
            intro: 'Atuação como Tech Lead promovendo boas práticas de desenvolvimento e arquitetura técnica.',
            topics: [
                'Participação ativa no planejamento técnico e definição de arquitetura',
                'Organização e gestão técnica das tarefas da equipe',
                'Definição de padrões técnicos e boas práticas',
                'Uso de metodologias ágeis (Scrum)',
                'Apoio na tomada de decisões técnicas',
                'Foco em automação de processos e integração de serviços digitais'
            ]
        }
    },
    {
        id: 'sydle',
        title: 'Desenvolvimento em SYDLE One',
        shortDesc: 'Desenvolvimento de portais digitais personalizados e soluções escaláveis na plataforma SYDLE One.',
        icon: <IconTool />,
        fullContent: {
            intro: 'Desenvolvimento de soluções digitais completas utilizando a plataforma SYDLE One.',
            sections: [
                { title: 'Projetos relevantes', items: ['SIGERH', 'SICAR', 'Licenciamento Ambiental (SEMAS-PA)'] },
                { title: 'Principais atividades', items: ['Criação de portais personalizados', 'Desenvolvimento de automações BPM', 'Integração entre sistemas', 'Construção de soluções escaláveis', 'Implementação de regras de negócio', 'Suporte técnico e evolução contínua das soluções'] }
            ]
        }
    },
    {
        id: 'geo',
        title: 'Web Components Geoespaciais',
        shortDesc: 'Criação de Web Components reutilizáveis com foco em mapas e cálculos geoespaciais.',
        icon: <IconGeo />,
        fullContent: {
            intro: 'Desenvolvimento de Web Components reutilizáveis com foco em aplicações geoespaciais.',
            sections: [
                { title: 'Tecnologias utilizadas', items: ['Stencil.js', 'TypeScript', 'JavaScript', 'Node.js'] },
                { title: 'Conceitos aplicados', items: ['Projeções geográficas', 'Sobreposição de geometrias', 'Análises espaciais', 'Manipulação de coordenadas geográficas'] },
                { title: 'Ferramentas utilizadas', items: ['QGIS', 'Bibliotecas de cálculos geográficos'] },
                { title: 'Atividades principais', items: ['Criação de componentes reutilizáveis', 'Integração com mapas e dados espaciais', 'Implementação de cálculos geográficos', 'Desenvolvimento de soluções GIS personalizadas'] }
            ]
        }
    },
    {
        id: 'api',
        title: 'APIs e Backend',
        shortDesc: 'Desenvolvimento de APIs REST e integração de serviços digitais.',
        icon: <IconLink />,
        fullContent: {
            intro: 'Desenvolvimento de APIs e serviços backend robustos e performáticos.',
            sections: [
                { title: 'Tecnologias utilizadas', items: ['Node.js', 'Express.js'] },
                { title: 'Banco de dados', items: ['PostgreSQL', 'MongoDB', 'Elasticsearch'] },
                { title: 'Atividades principais', items: ['Criação de APIs REST', 'Integração entre sistemas', 'Manipulação de dados', 'Otimização de consultas', 'Implementação de lógica de negócio', 'Suporte a aplicações frontend e mobile'] }
            ]
        }
    },
    {
        id: 'frontend',
        title: 'Frontend e Experiência do Usuário',
        shortDesc: 'Desenvolvimento de interfaces modernas e responsivas.',
        icon: <IconPalette />,
        fullContent: {
            intro: 'Criação de interfaces modernas com foco em usabilidade e experiência do usuário.',
            sections: [
                { title: 'Tecnologias utilizadas', items: ['React.js', 'Vue.js', 'Stencil.js'] },
                { title: 'Principais atividades', items: ['Desenvolvimento de interfaces responsivas', 'Integração com APIs REST', 'Criação de componentes reutilizáveis', 'Otimização de performance', 'Implementação de boas práticas de UI/UX'] }
            ]
        }
    },
    {
        id: 'mentoria',
        title: 'Mentoria e Documentação Técnica',
        shortDesc: 'Apoio ao time com code reviews, onboarding e documentação técnica.',
        icon: <IconBook />,
        fullContent: {
            intro: 'Atuação contínua no suporte técnico ao time e disseminação de conhecimento.',
            sections: [
                { title: 'Principais atividades', items: ['Condução de code reviews', 'Onboarding técnico de novos membros', 'Produção de documentação técnica detalhada', 'Criação de guias técnicos', 'Realização de apresentações técnicas', 'Apoio à evolução técnica da equipe'] }
            ]
        }
    },
    // {
    //     id: 'inovacao',
    //     title: 'POCs e Inovação Técnica',
    //     shortDesc: 'Criação de protótipos e soluções inovadoras além do convencional.',
    //     icon: <IconRocket />,
    //     fullContent: {
    //         intro: 'Exploração de soluções técnicas além do uso convencional da plataforma.',
    //         sections: [
    //             { title: 'Principais atividades', items: ['Desenvolvimento de Proof of Concepts (POCs)', 'Criação de soluções experimentais', 'Exploração de limites técnicos da plataforma SYDLE One', 'Proposição de novas abordagens técnicas', 'Colaboração com equipes internas e externas'] }
    //         ]
    //     }
    // }
];

function Modal({ isOpen, onClose, experience }) {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen || !experience) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content mockup-glow-container" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>&times;</button>
                <div className="modal-header">
                    <div className="modal-icon-wrapper">
                        {experience.icon}
                    </div>
                    <h2>{experience.title}</h2>
                </div>
                <div className="modal-body">
                    <p className="modal-intro">{experience.fullContent.intro}</p>

                    {experience.fullContent.topics && (
                        <ul className="modal-list">
                            {experience.fullContent.topics.map((topic, i) => (
                                <li key={i}>{topic}</li>
                            ))}
                        </ul>
                    )}

                    {experience.fullContent.sections && experience.fullContent.sections.map((section, i) => (
                        <div key={i} className="modal-section">
                            <h3>{section.title}</h3>
                            <ul className="modal-list">
                                {section.items.map((item, j) => (
                                    <li key={j}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


function ProfileImage() {
    // const [showLogo, setShowLogo] = useState(false);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setShowLogo(prev => !prev);
    //     }, 3000); // troca a cada 3 segundos
    //     return () => clearInterval(interval);
    // }, []);

    // return (
    //     <div className="profile-container">
    //         <img
    //             src={foto}
    //             alt="Profile"
    //             className={`profile-image ${showLogo ? 'hidden' : 'visible'}`}
    //         />
    //         <img
    //             src={avatar}
    //             alt="Avatar"
    //             className={`profile-image ${showLogo ? 'visible' : 'hidden'}`}
    //         />
    //     </div>
    // );
    return (
        <div className="profile-container">
            <img
                src={avatar}
                alt="Avatar"
                className="profile-image"
            />
        </div>
    );
}


function Sobre() {
    const [selectedExp, setSelectedExp] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        AOS.init();
    }, []);

    const openModal = (exp) => {
        setSelectedExp(exp);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <section className='inicio-wrapper' id="inicio" style={{ position: 'relative', overflow: 'hidden' }}>
            <Background3D />
            <div className='inicio' style={{ position: 'relative', zIndex: 1 }}>
                <div className='hero-content'>
                    <div className='mockup-glow-container' data-aos="fade-down" data-aos-duration="900">
                        <ProfileImage />
                    </div>
                    <div className='hero-text-block' data-aos="fade-up" data-aos-duration="900">
                        <p className='hero-greeting'>Opa! Sou o <span className='highlight-purple'>Victor Hugo</span></p>
                        <h1 className='hero-main-title'>
                            Construindo sistemas que <span className='highlight-purple outline-text'>evoluem</span>
                        </h1>
                        <h2 className='hero-subtitle'>Software Engineer e Tech Lead na EloGroup.</h2>

                        <div className='button hero-buttons'>
                            <a target="_blank" rel="noreferrer" href="https://github.com/VictorHugofny">
                                <button className='buttonsPerfil' id="primeiroButton">
                                    <img src={github} width='20px' alt="GitHub" /> GITHUB
                                </button>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/victor-hugo-santana/">
                                <button className='buttonsPerfil'>
                                    <img src={linkedin} width='20px' alt="LinkedIn" /> LINKEDIN
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="900" id='texto'>
                    <p>
                        Sou <strong>Victor Hugo, Desenvolvedor IV (Sênior) e Tech Lead</strong> na <strong>EloGroup</strong>, atuando na construção de soluções digitais para órgãos públicos, com foco na área ambiental.
                    </p>
                    <p>
                        Trabalho com <strong>arquitetura e desenvolvimento</strong> utilizando tecnologias como <strong>JavaScript, TypeScript, Node.js</strong> e bancos de dados relacionais e não relacionais.
                    </p>
                    <p>
                        Também participo da <strong>definição técnica das soluções</strong>, condução de code reviews e disseminação de conhecimento por meio de documentação e oficinas técnicas.
                    </p>
                </div>

                <div className='professional-summary' data-aos="fade-up" data-aos-duration="1200">
                    {/* Card 1: Experiência Profissional */}
                    <div className='summary-card'>
                        <div className='card-header'>
                            <img src={elogroupLogo} alt="EloGroup" className='company-logo' />
                            <div className='title-area'>
                                <h3>EloGroup</h3>
                                <span className='badge-senior'>Software Engineer</span>
                            </div>
                        </div>
                        <div className='card-body'>
                            <h4 className='main-role'>Tech Lead e Desenvolvedor</h4>
                            <p className='simple-text'>
                                Liderança técnica em projetos de impacto ambiental e governo digital.
                            </p>

                            <p className='simple-text'>
                                Envolvendo o desenvolvimento de Web-components de soluções geograficas (mapas)
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Formação Acadêmica */}
                    <div className='summary-card'>
                        <div className='card-header'>
                            <img
                                src="https://ifbaiano.edu.br/portal/wp-content/themes/ReitoriaIfbaianoPortal/imagens/marca-if-baiano.svg"
                                alt="IF Baiano"
                                className='company-logo'
                            />
                            <div className='title-area'>
                                <h3>IF Baiano</h3>
                                <div className='status-tag'>Formado</div>
                            </div>
                        </div>
                        <div className='card-body'>

                            <h4 className='main-role'>
                                Graduado em Ciência da Computação
                            </h4>

                            <a href="https://suap.ifbaiano.edu.br/media/edu/projeto_final/TCC_II_-_SABERFLIX-468450e2b8734f75a8c75af0c4ddad49.pdf" target="_blank" rel="noreferrer" className="external-link">
                                <p className='simple-text'>
                                    TCC: Plataforma Saberflix <IconExternal />
                                </p>
                            </a>

                            <a href="https://editorarealize.com.br/artigo/visualizar/80791" target="_blank" rel="noreferrer" className="external-link">
                                <p className='simple-text'>
                                    Artigo: Segurança em Escolas (Ed. Realize) <IconExternal />
                                </p>
                            </a>

                            <div className='card-info-summary'>
                                <p className='simple-text-mini'>
                                    Bolsista PIBID: Oficinas de tecnologia em escolas públicas.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Card 3: Tecnologias Principais */}
                    <div className='summary-card'>
                        <div className='card-header'>
                            <div className='title-area'>
                                <h3>Tecnologias Principais</h3>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className='tech-grid-small'>
                                <div className='tech-item-mini'><IconJS /> <span>JavaScript</span></div>
                                <div className='tech-item-mini'><IconTS /> <span>TypeScript</span></div>
                                <div className='tech-item-mini'><IconSydle /> <span>Sydle One</span></div>
                                <div className='tech-item-mini'><IconStencil /> <span>Stencil.js</span></div>
                                <div className='tech-item-mini'><WebComponents /> <span>Web Components</span></div>
                                <div className='tech-item-mini'><IconGeo /> <span>Cálculos GEO</span></div>
                                <div className='tech-item-mini'><IconReact /> <span>React</span></div>
                                <div className='tech-item-mini'><IconNode /> <span>Node.js</span></div>
                                <div className='tech-item-mini'><IconDatabase /> <span>SQL/NoSQL</span></div>
                                <div className='tech-item-mini'><IconAzure /> <span>Azure DevOps</span></div>
                                <div className='tech-item-mini'><IconAutomation /> <span>Automação</span></div>
                                <div className='tech-item-mini'><RestApi /> <span>REST APIs</span></div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='work-experience-section' id='experiencias'>
                    <h2 className='section-title'>Experiência</h2>
                    <div className='work-grid'>
                        {experienceData.map((exp, index) => (
                            <div
                                key={exp.id}
                                className='work-card mockup-glow-container'
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay={index * 100}
                            >
                                <div className='work-icon-wrapper'>
                                    {exp.icon}
                                </div>
                                <div className='work-card-content'>
                                    <h3>{exp.title}</h3>
                                    <p>{exp.shortDesc}</p>
                                    <button style={{ marginLeft: '0px' }}
                                        className='btn-know-more'
                                        onClick={() => openModal(exp)}
                                    >
                                        Saiba mais
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                experience={selectedExp}
            />
        </section>
    );
}

export default Sobre;
