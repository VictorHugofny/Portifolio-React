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
                        Sou <strong>Victor Hugo</strong>, desenvolvedor full-stack, atualmente sou <strong>Desenvolvedor III</strong> na <strong>EloGroup</strong>, onde utilizo <strong>Scrum</strong> e tecnologias como <strong>JavaScript, Typescript, React.js, Node, Stencil.js, Sydle e MongoDB</strong>. Também ministrei oficinas de programação e contribuo para documentações internas nos projetos que atuo.</p>
                </div>

                <div className='topo' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1200">
                    <div className='trabalho'>
                        <div className='itens'>
                            <img src={elogroupLogo} className='elogroupLogo'></img><br></br>
                            <div>
                                <p> Elogroup </p>
                                <strong> Developer 3</strong>
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
                                    <h3>Desenvolvimento de Portais Digitais e Automação de Processos</h3>
                                    <li>Atuando com SydleOne, JavaScript, Elasticsearch, Stenil.js, PostgreSQL, Typescript</li>
                                    <li>Desenvolvilmento de portais digitais personalizados para órgãos públicos </li>
                                    <li>Automação e Desenvolvilmento de processos e serviços com foco no tema meio ambiente</li>
                                </div>
                                <div className='conteudo-exp'>
                                    <h3>WebComponentes em Stencil.js e Sydle One</h3>
                                    <li>Atuação como Tech Lead em projetos de desenvolvimento de Web Components.</li>
                                    <li>Criação de Web Components para aplicações com Stencil.js e Sydle UI.</li>
                                    <li>Desenvolvimento de Web Components com foco na área GEO.</li>
                                </div>

                                <div className='conteudo-exp'>
                                    <h3>Frontend</h3>
                                    <li>React/Vue.js, Express.js e Node.js para criar aplicações web dinâmicas, robustas e escaláveis, com consumo de APIs que facilitam a comunicação entre o frontend e o backend.</li>
                                </div>

                                <div className='conteudo-exp'>
                                    <h3>Backend</h3>
                                    <li>
                                        Express.js para o desenvolvimento de APIs escaláveis.
                                    </li>
                                    <li>
                                        MongoDB e PostgreSQL para gerenciar eficientemente dados nos projetos de desenvolvimento.
                                    </li>
                                </div>

                                <div className='conteudo-exp'>
                                    <h3>Desenvolvimento Mobile e Jogos</h3>
                                    <li>
                                        React Native e Unity para criar aplicativos móveis multiplataforma e jogos imersivos.
                                    </li>
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
                                    <h3>Utilização de Metodologias Ágeis</h3>
                                    <li>Proficiente na aplicação de metodologias ágeis, com ênfase em Scrum, para uma gestão eficiente e flexível de projetos.</li>
                                </div>

                                <div className='conteudo-exp'>
                                    <h3>Criação de Documentação e Manuais Internos</h3>
                                    <li>Habilidade comprovada na elaboração de documentação abrangente e manuais internos para as tecnologias adotadas, garantindo clareza e consistência nos processos.</li>
                                </div>

                                <div className='conteudo-exp'>
                                    <h3>Ministração de Oficinas de Programação:</h3>
                                    <li>
                                        Experiência sólida na condução de oficinas práticas sobre programação em diversas linguagens, proporcionando um ambiente de aprendizado dinâmico e interativo.
                                    </li>
                                </div>

                                <div className='conteudo-exp'>
                                    <h3>Publicação de Artigo</h3>
                                    <li>
                                        Autor do artigo <a target='blank' href='https://editorarealize.com.br/artigo/visualizar/80791'> Segurança da Informação no Contexto Escolar" (Editora Realize, 2022)</a>, abordando estratégias e soluções relevantes para promover a segurança da informação em ambientes educacionais.                            </li>
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
