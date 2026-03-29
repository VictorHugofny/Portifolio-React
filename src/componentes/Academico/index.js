import './style.css'
import { useEffect } from 'react';
import PDFPreview from '../PDFPreview';
import YouTubePlayer from '../YouTubePlayer';

function Academico() {
    useEffect(() => {
        // Redundant initialization removed - Now handled in App.js
    }, [])

    return (
        <div className="academico-section" id="academico">
            <h1 className="academico-title">Experiências Acadêmicas</h1>

            <div className="academico-grid">
                {/* Card 0: TCC */}
                <div className="academico-card" data-aos="fade-up" data-aos-duration="600">
                    <div className="academico-card-header">
                        <span className="academico-badge">TCC - Trabalho de Conclusão de Curso</span>
                        <h3 style={{ fontSize: '1.4rem' }}>SaberFlix: Plataforma educacional para catalogação de filmes educacionais</h3>
                    </div>
                    <div className="academico-card-body">
                        <p className="academico-authors"><strong>Autor:</strong> Victor Hugo de Carvalho Santana</p>
                        <p className="academico-publisher">Publicado em: IF Baiano - Senhor do Bonfim (2023)</p>

                        <div className="academico-embed pdf-embed">
                            <PDFPreview 
                                pdfUrl="https://suap.ifbaiano.edu.br/media/edu/projeto_final/TCC_II_-_SABERFLIX-468450e2b8734f75a8c75af0c4ddad49.pdf"
                                title="SaberFlix: Plataforma educacional"
                            />
                        </div>
                    </div>
                    <div className="academico-card-footer">
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <a target="_blank" rel="noreferrer" href="https://suap.ifbaiano.edu.br/media/edu/projeto_final/TCC_II_-_SABERFLIX-468450e2b8734f75a8c75af0c4ddad49.pdf" className="academico-btn">Ver TCC (PDF)</a>
                            <a target="_blank" rel="noreferrer" href="https://www.saberflix.net.br/" className="academico-btn secondary">Ver Plataforma</a>
                        </div>
                    </div>
                </div>
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
                            <PDFPreview 
                                pdfUrl="https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf"
                                title="Segurança da Informação no Contexto Escolar"
                            />
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

                        <YouTubePlayer
                            videoId="h5i7P6rqAhU"
                            title="Introdução a Algoritmo em JavaScript"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Academico;