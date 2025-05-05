import sobre from './sobre.json';
import './style.css';
import foto from '../../assets/foto.jpeg';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import elogroupLogo from '../../assets/elogroup.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import iconeSoftware from '../../assets/iconeDesenvolvilmento.png';
import iconeSocial from '../../assets/social.png'

function Sobre() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='inicio' id="inicio">
            <div>
                <div className='nome-foto'>
                    <div data-aos="fade-down" data-aos-duration="900">
                        <img className='foto' src={foto}></img>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="900">
                        <h1>{sobre.name}</h1>
                        <p class="line anim-typewriter">Desenvolvedor</p>

                        <div className='button'>
                            <a target="_blank" href="https://github.com/VictorHugofny"><button className='buttonsPerfil' id="primeiroButton"> <img src={github} width='20px'></img> GITHUB</button></a>
                            <a target="_blank" href="https://www.linkedin.com/in/victor-hugo-santana/"><button className='buttonsPerfil'><img src={linkedin} width='20px'></img> LINKEDIN</button></a>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="900">

                    <p id='texto'>
                        Sou <strong>Victor Hugo</strong>, Desenvolvedor III e Tech Lead na <strong>EloGroup</strong>, com atuação em soluções digitais voltadas para órgãos públicos, especialmente na área ambiental. Tenho experiência com <strong>SYDLE One</strong>, desenvolvimento de <strong>Web Components</strong> com <strong>Stencil.js</strong>, além de tecnologias como <strong>JavaScript, TypeScript, Node.js, PostgreSQL, Elasticsearch</strong> e <strong>MongoDB</strong>. Atuo com <strong>Scrum</strong>, especificando tarefas, conduzindo code reviews. Também ministrei oficinas de programação e contribuo ativamente com documentação técnica nos projetos.
                    </p>
                </div>

                <div className='topo' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1200">
                    <div className='trabalho'>
                        <div className='itens'>
                            <img src={elogroupLogo} className='elogroupLogo'></img><br></br>
                            <div>
                                <p> Elogroup </p>
                                <strong> Desenvolvedor III & Tech Lead</strong>
                            </div>
                        </div>
                        <div className='itens'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Instituto_Federal_Baiano_-_Marca_Vertical_2015.svg/1200px-Instituto_Federal_Baiano_-_Marca_Vertical_2015.svg.png'></img>
                            <div>
                                <p> Instituto Federal Baiano</p>
                                <strong>Ciencia da computação</strong>
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
                <h1 id='sobremim'>Experiências 💎</h1>

                <div className='expeirencias'>
                    <div data-aos="fade-up" data-aos-duration="800">

                        <div className='cards-experiencia'>
                            <div className='topo-card'>
                                <img src={iconeSoftware} width="40px" />
                                <h2>Desenvolvimento de Software</h2>
                            </div>

                            <div className='tab-experiencia'>
                                <div className='conteudo-exp'>
                                    <h3>Tech Lead e Desenvolvimento em SYDLE One</h3>
                                    <li>Atuação como Tech Lead, promovendo boas práticas com foco em automação de processos, arquitetura técnica e integração de serviços digitais.</li>
                                    <li>Desenvolvimento de portais digitais personalizados na plataforma SYDLE One, com aplicação direta em projetos como SIGERH, SICAR e Licenciamento Ambiental da SEMAS-PA.</li>
                                </div>

                                <div className='conteudo-exp'>
                                    <h3>Web Components Geoespaciais</h3>
                                    <li>Criação de Web Components reutilizáveis com Stencil.js, JavaScript, TypeScript e Node.js, integrados ao SYDLE One.</li>
                                    <li>Exploração de conceitos GIS como projeções geográficas, análises espaciais e sobreposição de geometrias, utilizando ferramentas como QGIS.</li>
                                    <li>Desenvolvimento de POCs e soluções inovadoras, indo além dos limites convencionais da plataforma SYDLE.</li>
                                </div>

                                <div className='conteudo-exp'>
                                    <h3>Frontend</h3>
                                    <li>Desenvolvimento de interfaces modernas e responsivas com React.js, Vue.js e Stencil.js.</li>
                                    <li>Integração de serviços por meio de APIs REST e foco na experiência do usuário.</li>
                                </div>

                                <div className='conteudo-exp'>
                                    <h3>Backend</h3>
                                    <li>Criação de APIs performáticas com Node.js e Express.js.</li>
                                    <li>Trabalho com bancos relacionais e não relacionais, como PostgreSQL, MongoDB e Elasticsearch.</li>
                                </div>

                                <div className='conteudo-exp'>
                                    <h3>Mobile e Desenvolvimento de Jogos</h3>
                                    <li>Criação de apps multiplataforma com React Native.</li>
                                    <li>Desenvolvimento de jogos 2D/3D com Unity e Godot, aplicando conceitos de lógica e interatividade.</li>
                                </div>
                            </div>
                        </div>



                    </div>

                    <div data-aos="fade-up" data-aos-duration="800">

                        <div className='cards-experiencia'>
                            <div className='topo-card'>
                                <img src={iconeSocial} width="40px" />
                                <h2>Habilidades Pessoais</h2>
                            </div>

                            <div className='tab-experiencia'>
                                <div className='conteudo-exp'>
                                    <h3>Liderança Técnica e Mentoria</h3>
                                    <li>Condução de code reviews, apoio contínuo ao time e onboarding técnico com foco em Web Components e SYDLE.</li>
                                    <li>Fomento à colaboração e à autonomia da equipe, garantindo alinhamento técnico e qualidade nas entregas.</li>
                                </div>

                                <div className='conteudo-exp'>
                                    <h3>Metodologias Ágeis</h3>
                                    <li>Atuação diária com Scrum, participando de plannings, refinamentos e sprints, sempre com foco em entregas de valor e melhoria contínua.</li>
                                </div>

                                <div className='conteudo-exp'>
                                    <h3>Comunicação e Documentação</h3>
                                    <li>Produção de documentação técnica clara e completa, repasses estruturados e apresentações técnicas para stakeholders internos e externos.</li>
                                </div>

                                <div className='conteudo-exp'>
                                    <h3>Compartilhamento de Conhecimento</h3>
                                    <li>Facilitador de oficinas e workshops sobre desenvolvimento de software, promovendo ambientes de aprendizado prático e colaborativo.</li>
                                </div>

                                <div className='conteudo-exp'>
                                    <h3>Produção Acadêmica</h3>
                                    <li>
                                        Autor do artigo <a target='_blank' href='https://editorarealize.com.br/artigo/visualizar/80791'>“Segurança da Informação no Contexto Escolar”</a> (Editora Realize, 2022), abordando práticas de proteção de dados no ambiente educacional.
                                    </li>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sobre;
