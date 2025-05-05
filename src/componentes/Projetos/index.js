import projetos from './projetos.json'
import { useEffect, useState } from 'react';
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projetos() {

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div className='projetos-info' id="projetos" data-aos="fade-up" data-aos-duration="900">
            <br></br>
            <h1 id='sobremim'>Projetos 🔧</h1>


            <br></br>
            <div className='project-grid'>
                {
                    projetos.map((projeto) => {

                        return (

                            <div className="project-card">
                                <div className="project-image">
                                    <img src={projeto.background} alt="Projeto" />
                                </div>
                                <div className="project-content">
                                    <h3 className="project-title">{projeto.name}</h3>
                                    <p className="project-description">
                                        {projeto.description}
                                    </p>
                                    <div className="project-tags">
                                        {projeto.language.map((lang, index) => (
                                            <span key={index}>{lang}</span>
                                        ))}
                                    </div>
                                    <div className="project-links">
                                        <a href={projeto.homepage} target="_blank" rel="noopener noreferrer">🔗 Ver Projeto</a>
                                            {projeto.repositorio ?
                                                <a href={projeto.repositorio} target="_blank" rel="noopener noreferrer">💻 Código</a>
                                                
                                            :null}
                                    </div>
                                </div>
                            </div>

                        )
                    })}
            </div>
        </div>
    )
}

export default Projetos;