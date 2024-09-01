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
        <br></br> 
        <div className='container'>
            {
            projetos.map((projeto)=>{
                const background = {
                    background: `url(${projeto.background}) center center / cover no-repeat`,
                    backgroundSize: "cover",       // Ajusta a imagem para cobrir o elemento
                    backgroundRepeat: "no-repeat", // Garante que a imagem não se repita
                  };
                return(
                    <a href={projeto.homepage} target='blank'>
                        <div class="card">
                            <div class="img" style={background}>
                            </div>


                            <div class="content">
                                <p class="desc">{projeto.description}</p>
                            </div>
                            <h1 className='nameProject'>{projeto.name}</h1>
                            <div class="arrow">
                                
                                <span>&#8673;</span>
                            </div>
                        </div>
                    </a>
                )})}
        </div>
    </div>
    )
}

export default Projetos;