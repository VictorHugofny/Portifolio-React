import projetos from './projetos.json'
import { useEffect, useState} from 'react';
import './style.css'

function Projetos(){

    useEffect(()=>{
       
    },[])


    return(
    <div className='projetos-info' id="projetos">
        <br></br><br></br> 
        <h1 id='sobremim'>Projetos 🔧</h1>
        <div className='container'>
                    
            {
            projetos.map((projeto)=>{
                
                const background = {
                    background: `linear-gradient(to bottom, rgba(0, 20, 140, 0.404), rgba(3, 1, 017, 0.293)),url(${projeto.background})`,
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
                                <a target='blank' href={projeto.svn_url}> <button>Repositorio</button> </a>
                            </div>
                        </div>
                    </div>
                )})}
        </div>
    </div>
    )
}

export default Projetos;