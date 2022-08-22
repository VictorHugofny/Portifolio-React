import sobre from './sobre.json'
import './style.css'

function Sobre(){


    return(
        <div className='inicio'>
            <div>
                <div className='nome-foto'>
                    <img className='foto' src={sobre.foto}></img>
                    <div>
                        <h1>{sobre.name}</h1>
                        
                        <div>
                            <button>GITHUB</button>
                            <button>LINKEDIN</button>
                        </div>
                        
                    </div>
                    
                </div>

            <div className='trabalho'>
                <div className='itens'>
                    <img src='https://media-exp1.licdn.com/dms/image/C4E0BAQHJ6MGWfi7L-Q/company-logo_100_100/0/1656940868172?e=1669248000&v=beta&t=7QguwsYQ4yHgkKcYvDxQ_ELzcCB2wVePdXaNEeFIncQ'></img><br></br>
                    <div>
                        <p> Elogroup </p>
                        <strong> Intern | Developer </strong> 
                    </div>
                </div>
                <div className='itens'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/9/9c/Instituto_Federal_Baiano_-_Marca_Vertical_2015.svg'></img>
                    <div>
                        <p> Instituto Federal Baiano</p>
                        <strong>Ciencia da computação</strong>
                    </div>
                    
                </div>
            </div>
                
            <h1>Sobre mim</h1>
            <p>Sou <strong> Victor Hugo</strong>, estudante de Ciencia da computação no IFBaiano, Sou <strong> desenvolvedor </strong> e uso tecnologias como <strong>Javascript, React, Vue.js, Node, HTML e CSS </strong>e essa pagina foi construida por mim como <strong> portifolio </strong> usando o framework <strong> React.js</strong>, Atualmente estou estagiando como programador <strong>Fullstack na Elogroup</strong></p> 
            </div>
        </div>
    )
}

export default Sobre;