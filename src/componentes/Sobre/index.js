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
import iconeSoftware from '../../assets/iconeDesenvolvilmento.png';
import iconeSocial from '../../assets/social.png';
import './ProfileImage.css'; // CSS separado
import Background3D from '../Background3D';


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
                <br></br>
                <div className='hero-content'>
                    <div className='mockup-glow-container' data-aos="fade-down" data-aos-duration="900">
                        <ProfileImage />
                    </div>                    <div className='hero-text-block' data-aos="fade-up" data-aos-duration="900">
                        <p className='hero-greeting'>Opa! Sou o <span className='highlight-purple'>Victor Hugo</span></p>
                        <h1 className='hero-main-title'>
                            Construindo sistemas que <span className='highlight-purple outline-text'>evoluem</span>
                        </h1>
                        <h2 className='hero-subtitle'>Software Enginee(IV) e Techlead na EloGroup.</h2>

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

                <div data-aos="zoom-in" data-aos-duration="900">

                    <p id='texto'>
                        Sou <strong>Victor Hugo, Desenvolvedor IV (Sênior) e Tech Lead</strong> na <strong>EloGroup</strong>, com atuação em soluções digitais voltadas para órgãos públicos, especialmente na área ambiental. Tenho experiência com <strong>SYDLE One</strong>, desenvolvimento de <strong>Web Components</strong> com <strong>Stencil.js</strong>, além de tecnologias como <strong>JavaScript, TypeScript, Node.js, PostgreSQL, Elasticsearch</strong> e <strong>MongoDB</strong>. Atuo com <strong>Scrum</strong>, especificando tarefas, conduzindo code reviews. Também ministrei oficinas de programação e contribuo ativamente com documentação técnica nos projetos.
                    </p>
                </div>

                <div className='topo' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1200">
                    <div className='trabalho'>
                        <div className='itens'>
                            <img src={elogroupLogo} className='elogroupLogo'></img><br></br>
                            <div>
                                <p> Elogroup </p>
                                <strong>  Desenvolvedor IV / Tech Lead (Sênior) </strong>
                            </div>
                        </div>
                        <div className='itens'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Instituto_Federal_Baiano_-_Marca_Vertical_2015.svg/1200px-Instituto_Federal_Baiano_-_Marca_Vertical_2015.svg.png'></img>
                            <div>
                                <p> Instituto Federal Baiano</p>
                                <strong>Ciencia da computação 🎓</strong>
                            </div>

                        </div>


                    </div>
                    <div className='iconesL'>
                        <img src='https://img.icons8.com/color/344/javascript--v1.png' width='45px'></img>
                        <img src='https://img.icons8.com/color/344/vue-js.png' width='45px'></img>
                        <img src='https://img.icons8.com/officel/344/react.png' width='45px'></img>
                        <img src='https://img.icons8.com/fluency/452/node-js.png' width='45px'></img>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEUAAAD///8dHR2lpaXl5eW5ubnp6enGxsb6+vry8vLS0tK3t7c9PT12dnZnZ2eXl5cPDw/a2trNzc0UFBRiYmLAwMAyMjKJiYmPj4+enp5RUVGtra0sLCwiIiJCQkItLS1NTU1zc3Olivw1AAACEklEQVR4nO3d626CQBCGYagInvF8rFbv/yZrE3fB+sNYZzLTzftcwfcFgd1hm2YfqcsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACeW2+Gg0JKtbSu82Bb5rJ21o3ubXrC/a721qVapjP5fnk+tK7VGClcwKu5da9opNIvzw/WxSKdK5jna+tiwUCp4Ni6WDBupyqqrpDOp3WxqN/0c/YGE9JcwuJonUVHvAtL6yRKpvES+rlvZE1CQUcLEFl1aHiyTqJleCvYsw6ipro1nFkHUZN+w/R/pfFJM7JOoiW+LfxsdYQ1b/wv6yha4vwi1VVbe+W9sM6ipL17SrPjrx3wOw5bTwPEhuwkce5v1i0+iSr9dRSfJq6sGz0QnwiX7v4xxUJ6qt93VzHbCFf0uH6oZb+u+bsXs58vpN3BrHzDXUV/T1QJ+6pp6PF3KuHcPJYn1lmUTGPFgXUULad4Ea2TqFml/jPNzqFhbZ1ETbgTu9ZB1IQloJ+TCtLSbxjmIpV1EC3H8KTpWCfREsfobg5jSItv/FS/Ks9DwcI6iZK4okn0hT9p7RGtszQuu46Qbmt+7uf40Unp3J6bDfBU62Cimy+u9fOsf3KxLhZVz8P+74LxpIKo3tm6VstSoaCzfeHqeeLXrNw8YwK5vyTp9YthsqttAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAV3wDiqUZ1a+a7UIAAAAASUVORK5CYII=' width='45px'></img>

                        <img src='https://seeklogo.com/images/S/stencil-logo-2361B95AA4-seeklogo.com.png' width='50px'></img>
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
