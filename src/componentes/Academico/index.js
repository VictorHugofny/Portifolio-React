import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Academico(){
    useEffect(() => {
        AOS.init();
    }, [])
    
    return(
        <div className="academico-section" id="academico">
            <h1 className="academico-title">Experiências Acadêmicas</h1>

            <div className="academico-grid">
                {/* Card 1: Artigo */}
                <div className="academico-card" data-aos="fade-up" data-aos-duration="600"> 
                    <div className="academico-card-header">
                        <span className="academico-badge">Artigo Científico</span>
                        <h3>Segurança da Informação no Contexto Escolar</h3>
                    </div>
                    <div className="academico-card-body">
                        <p className="academico-authors"><strong>Autores:</strong> Victor Hugo de Carvalho Santana, Douglas Silva Santos, Luis Henrique de Almeida Gomes e Damon Ferreira Farias</p> 
                        <p className="academico-publisher">Publicado em: Editora Realize (2022)</p>
                        
                        <div className="academico-embed pdf-embed">
                            <object data="https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf#zoom=92" type="application/pdf" width="100%" height="400">
                                <p>Seu navegador não tem um plugin de PDF. <a target="_blank" rel="noreferrer" href="https://editorarealize.com.br/artigo/visualizar/80791">Clique aqui para acessar.</a></p>
                            </object>
                        </div>
                    </div>
                    <div className="academico-card-footer">
                        <a target="_blank" rel="noreferrer" href="https://editorarealize.com.br/artigo/visualizar/80791" className="academico-btn">Ver Publicação</a>
                    </div>
                </div>

                {/* Card 2: Minicurso */}
                <div className="academico-card" data-aos="fade-up" data-aos-duration="800"> 
                    <div className="academico-card-header">
                        <span className="academico-badge">Minicurso</span>
                        <h3>Introdução a Algoritmo em JavaScript</h3> 
                    </div>
                    <div className="academico-card-body">
                        <p className="academico-authors"><strong>Ministrado por:</strong> Victor Hugo, Douglas Silva, Marcos Santos</p> 
                        <p className="academico-publisher">Publicado em: 26 de Março de 2021</p>
                        
                        <div className="academico-embed video-embed">
                            <iframe src="https://www.youtube.com/embed/h5i7P6rqAhU" frameBorder="0" allowFullScreen title="Minicurso JS"></iframe> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Academico;