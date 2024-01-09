import projetos from './projetos.json'
import { useEffect, useState} from 'react';
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projetos(){

    useEffect(() => {
        AOS.init();
      }, [])


    return(
    <div className='projetos-info' id="projetos" data-aos="fade-up" data-aos-duration = "900">
        <br></br><br></br> 
        <h1 id='sobremim'>Projetos 🔧</h1>
        <div className='container'>
                    
            {
            projetos.map((projeto)=>{
                const background = {
                    background: `linear-gradient(rgb(0 46 196 / 26%), rgb(0, 0, 5)) center bottom / contain no-repeat, url(${projeto.background})`,
                    "background-repeat": "no-repeat",
                    "background-size": "contain",
                    "background-position": "bottom"
                }
                return(
                    
                    <div key = {projeto.id} className="card" style={background}>
                        <div className='top'> 
                            <h1>{projeto.name}</h1>
                            <img className='language' src={projeto.language[1]} width='24px'></img>
                            <img className='language' src={projeto.language[0]} width='24px'></img>
                        </div>
                        
                        <div className='rodapeProjeto'>
                            <div>
                                <strong>{projeto.description}</strong>
                            </div>
                        
                            <div className='buttons'>
                                <a target='blank' href={projeto.homepage}> <button>Pagina</button> </a>
                                {projeto.repositorio && (
                                    <a target='blank' href={projeto.repositorio}> <button>Repositorio</button> </a>
                                )}
                            </div>
                        </div>
                    </div>
                )})}
        </div>
    </div>
    )
}

export default Projetos;