import sobre from './sobre.json';
import './style.css';
import foto from '../../assets/foto.jpeg';
import avatar from '../../assets/logo-cartoon.png'
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import elogroupLogo from '../../assets/elogroup.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import './ProfileImage.css'; // CSS separado
import Background3D from '../Background3D';
import { IconJS, IconTS, IconReact, IconNode, IconDatabase, IconIFBaiano, IconExternal } from './SVGIcons';


function ProfileImage() {
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowLogo(prev => !prev);
        }, 3000); // troca a cada 3 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <div data-aos="fade-down" data-aos-duration="1900" className="profile-container">
            <img
                src={foto}
                alt="Profile"
                className={`profile-image ${showLogo ? 'hidden' : 'visible'}`}
            />
            <img
                src={avatar}
                alt="Avatar"
                className={`profile-image ${showLogo ? 'visible' : 'hidden'}`}
            />
        </div>
    );
}


function Sobre() {
    useEffect(() => {
        AOS.init();
    }, []);

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
                        <h2 className='hero-subtitle'>Software Engineer (IV) e Tech Lead na EloGroup.</h2>

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
                                <div className='tech-item-mini'><IconReact /> <span>React</span></div>
                                <div className='tech-item-mini'><IconNode /> <span>Node.js</span></div>
                                <div className='tech-item-mini'><IconDatabase /> <span>SQL/NoSQL</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='work-experience-section' id='experiencias'>
                    <h2 className='section-title'>Work Experience</h2>
                    <div className='work-grid'>
                        {/* Card 1 */}
                        <div className='work-card mockup-glow-container' data-aos="fade-up" data-aos-duration="800">
                            <div className='work-icon-wrapper'>
                                <span role="img" aria-label="star" style={{ fontSize: '24px', filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.8))' }}>⭐</span>
                            </div>
                            <div className='work-card-content'>
                                <h3>Tech Lead / Sênior</h3>
                                <p>EloGroup - Liderança técnica e Integração ambiental.</p>
                                <a href="#projetos"><button className='btn-know-more'>KNOW MORE</button></a>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className='work-card mockup-glow-container' data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                            <div className='work-icon-wrapper' style={{ background: 'rgba(234, 179, 8, 0.05)' }}>
                                <span role="img" aria-label="bulb" style={{ fontSize: '24px', filter: 'drop-shadow(0 0 10px rgba(234, 179, 8, 0.8))' }}>💡</span>
                            </div>
                            <div className='work-card-content'>
                                <h3>SYDLE One & BPM</h3>
                                <p>Desenvolvimento em portais personalizados e automações SIGERH.</p>
                                <a href="#projetos"><button className='btn-know-more'>KNOW MORE</button></a>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className='work-card mockup-glow-container' data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                            <div className='work-icon-wrapper' style={{ background: 'rgba(56, 189, 248, 0.05)' }}>
                                <span role="img" aria-label="coffee" style={{ fontSize: '24px', filter: 'drop-shadow(0 0 10px rgba(56, 189, 248, 0.8))' }}>☕</span>
                            </div>
                            <div className='work-card-content'>
                                <h3>Web Components</h3>
                                <p>Projeções GIS, Stencil.js, CSS Modules e Micro-frontends.</p>
                                <a href="#projetos"><button className='btn-know-more'>KNOW MORE</button></a>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className='work-card mockup-glow-container' data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                            <div className='work-icon-wrapper' style={{ background: 'rgba(168, 85, 247, 0.05)' }}>
                                <span role="img" aria-label="mobile" style={{ fontSize: '24px', filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.8))' }}>📱</span>
                            </div>
                            <div className='work-card-content'>
                                <h3>Backend & Mobile</h3>
                                <p>Criação de APIs, Bancos MongoDB/PG e Cross-Platform.</p>
                                <a href="#projetos"><button className='btn-know-more'>KNOW MORE</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sobre;
