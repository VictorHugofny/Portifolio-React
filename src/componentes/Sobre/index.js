import sobre from './sobre.json'
import './style.css'
<script crossOrigin='anonymous' src="https://unpkg.com/typeit@8.7.0/dist/index.umd.js" defer></script>


function Sobre(){


    return(
        <div className='inicio'>
            <div>
                <div className='nome-foto'>
                    <img className='foto' src={sobre.foto}></img>
                    <div>
                        <h1>{sobre.name}</h1>
                        <p class="line anim-typewriter">I am Developer! ❤️</p>
                   
                        <div className='button'>
                            <button className='buttonsPerfil' id="primeiroButton"> <img src='https://cdn.icon-icons.com/icons2/2429/PNG/512/github_logo_icon_147285.png' width='20px'></img> GITHUB</button>
                            <button className='buttonsPerfil'><img src='https://cdn-icons-png.flaticon.com/512/3536/3536505.png' width='20px'></img> LINKEDIN</button>
                        </div>
                        
                    </div>
                    
                </div>
                <p id='texto'>Sou <strong> Victor Hugo</strong>, estudante de Ciencia da computação no IFBaiano, Sou <strong> desenvolvedor </strong> e uso tecnologias como <strong>Javascript, React, Vue.js, Node, HTML e CSS </strong>e essa pagina foi construida por mim como <strong> portifolio </strong> usando o framework <strong> React.js</strong>, Atualmente estou estagiando como programador <strong>Fullstack na Elogroup</strong></p> 
            <div className='topo'>
            <div className='trabalho'>
                <div className='itens'>
                    <img src='https://media-exp1.licdn.com/dms/image/C4E0BAQHJ6MGWfi7L-Q/company-logo_100_100/0/1656940868172?e=1669248000&v=beta&t=7QguwsYQ4yHgkKcYvDxQ_ELzcCB2wVePdXaNEeFIncQ'></img><br></br>
                    <div>
                        <p> Elogroup </p>
                        <strong> Intern | Developer </strong> 
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
                </div>
            </div>
            <div>
            
                
            </div>
            <div>

                <h1 id='texto'>Experiencias 💎</h1>
                <div id='texto' className='experiencias'>
                    <p>🔹 Desenvolvimento de paginas Web.</p>
                    <p>🔹 Ministrei oficinas sobre Javascript.</p>
                    <p>🔹 Javascript para automação de processos.</p>
                    <p>🔹 Utilização do Scrum, metodologia ágil</p>
                    <p>🔹 Desenvolvimento do portal da SEFA e SEMAS do Pará.</p>
                    <p>🔹 Desenvolvimento da documentação e manuais internos.</p>
                    <p>🔹 Utilização da ferramenta Sydle para automação de processos.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Sobre;