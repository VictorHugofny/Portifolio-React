import sobre from './sobre.json';
import './style.css';
import foto from '../../assets/foto.jpeg';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import elogroupLogo from '../../assets/elogroup.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState} from 'react';

function Sobre(){
    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <div className='inicio'  id="inicio">
            <div>
                <div className='nome-foto'>
                    <div  data-aos="fade-down" data-aos-duration = "900">
                        <img className='foto'  src={foto}></img>
                    </div>
                    
                    <div data-aos="fade-up" data-aos-duration = "900">
                        <h1>{sobre.name}</h1>
                        <p class="line anim-typewriter">I am Developer! 💙</p>

                        <div className='button'>
                            <a target="_blank" href="https://github.com/VictorHugofny"><button className='buttonsPerfil' id="primeiroButton"> <img src={github} width='20px'></img> GITHUB</button></a>
                            <a target="_blank" href="https://www.linkedin.com/in/victor-hugo-santana/"><button className='buttonsPerfil'><img src={linkedin} width='20px'></img> LINKEDIN</button></a>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration = "900">
                <p id='texto'>
                    Sou <strong>Victor Hugo</strong>, desenvolvedor full-stack tenho experiência na criação de portais digitais para órgãos públicos, com foco em automação de processos. Atualmente sou <strong>Desenvolvedor II</strong> na <strong>EloGroup</strong>, utilizei <strong>Scrum, SydleOne e Javascript</strong> para otimizar processos. Habilidades incluem <strong>Javascript, React.js, Node, Stencil.js, Sydle e MongoDB</strong>. Ministrei oficinas de programação e contribuí para documentações internas.</p> 
                </div>
                
            <div className='topo' data-aos="fade-right"
     
     data-aos-easing="ease-in-sine" data-aos-duration = "1200">
            <div className='trabalho'>
                <div className='itens'>
                    <img src={elogroupLogo}></img><br></br>
                    <div>
                        <p> Elogroup </p>
                        <strong> Developer 2 </strong> 
                    </div>
                </div>
                <div className='itens'>
                    <img src='https://images2.imgbox.com/52/bd/m1eeXjcG_o.png'></img>
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
            <div>
            
                
            </div>
            <div data-aos="fade-up" data-aos-duration = "800">

                <h1>Experiência 💎</h1>
                
                <div id='texto' className='experiencias'>
                
                    <p>🔹 Desenvolvimento Web.</p>
                    <p>🔹 Javascript</p>
                    <p>⠀⠀⠀🔹 Automação de processos.</p>
                    <p>⠀⠀⠀🔹 Desenvolvimento com React.js e Vue.js. </p>
                    <p>⠀⠀⠀🔹 Ministrei oficinas sobre a linguagem.</p>
                    <p>🔹 Utilização diaria do Scrum, metodologia ágil</p>
                    <p>🔹 Utilização da ferramenta Sydle para automação de processos.</p>
                    <p>🔹 Desenvolvimento de portais digitais para orgãos publicos.</p>
                    <p>🔹 Automações de processos com lowcode SydleOne.</p>
                    <p>🔹 Criação da documentação e manuais internos das tecnologias usadas.</p>
                    
                </div>
            </div>
            </div>
        </div>
    )
}

export default Sobre;
