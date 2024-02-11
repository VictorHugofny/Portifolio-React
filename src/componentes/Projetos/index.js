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
        <br></br> 
        <h1 id='sobremim'>Projetos 🔧</h1>

        <div className='container'>
            
            {
            projetos.map((projeto)=>{
                const background = {
                    background: `center bottom / contain no-repeat, url(${projeto.background})`,
                    "background-repeat": "repeat",
                    "background-size": "contain",
                }
                return(
                    <a href={projeto.homepage} target='blank'>
                        <div key = {projeto.id} className="card" style={background}>
                            
                            <div className='rodapeProjeto'>
                                <div className='rodapeCard'>
                                    <h1>{projeto.name}</h1>
                                    <p>{projeto.description}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                )})}
        </div>
    </div>
    )
}

export default Projetos;