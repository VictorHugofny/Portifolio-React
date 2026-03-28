import React, { useEffect, useState } from 'react';
import projetos from './projetos.json';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
    IconReact, IconNode, IconDatabase, IconJS, IconSydle, 
    IconStencil, IconExternal, WebComponents, IconElastic,
    IconUnity, IconCSharp, IconMongoDB, IconExpress
} from '../Sobre/SVGIcons';

// Componente para Tags de Tecnologia com Ícones
const TechTag = ({ tech }) => {
    const getIcon = (name) => {
        const iconMap = {
            'React': <IconReact />,
            'Node.js': <IconNode />,
            'MongoDB': <IconMongoDB />,
            'Express.js': <IconExpress />,
            'JavaScript': <IconJS />,
            'SYDLE': <IconSydle />,
            'Stencil.js': <IconStencil />,
            'Web Components': <WebComponents />,
            'ElasticSearch': <IconElastic />,
            'Unity': <IconUnity />,
            'C#': <IconCSharp />,
            'SQL/NoSQL': <IconDatabase />
        };
        return iconMap[name] || <IconDatabase />;
    };

    return (
        <span className="tech-tag">
            <span className="tag-icon">{getIcon(tech)}</span>
            {tech}
        </span>
    );
};

// Componente Modal de Projeto
const ProjectModal = ({ isOpen, onClose, project }) => {
    useEffect(() => {
        const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen || !project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content project-modal glass-morphism" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>&times;</button>
                
                <div className="modal-header-hero" style={{ backgroundImage: `url(${project.background})` }}>
                    <div className="modal-header-overlay">
                        <h2>{project.name}</h2>
                        {project.client && <span className="client-badge">{project.client}</span>}
                    </div>
                </div>

                <div className="modal-body-content">
                    <div className="modal-main-info">
                        <div className="info-group">
                            <span className="info-label">Papel no Projeto</span>
                            <p className="info-value">{project.role}</p>
                        </div>
                        <div className="info-group">
                            <span className="info-label">Ano</span>
                            <p className="info-value">{project.year}</p>
                        </div>
                    </div>

                    <div className="modal-description">
                        <h3>Sobre o Projeto</h3>
                        <p>{project.longDescription}</p>
                    </div>

                    <div className="modal-responsibilities">
                        <h3>Responsabilidades Principais</h3>
                        <ul>
                            {project.responsibilities.map((res, i) => (
                                <li key={i}>{res}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="modal-tech-stack">
                        <h3>Tecnologias Utilizadas</h3>
                        <div className="tag-grid">
                            {project.language.map((tech, i) => (
                                <TechTag key={i} tech={tech} />
                            ))}
                        </div>
                    </div>

                    <div className="modal-metrics">
                        <h3>Destaques e Métricas</h3>
                        <div className="metrics-grid">
                            {project.metrics.map((metric, i) => (
                                <div key={i} className="metric-item">
                                    {metric}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="modal-actions">
                        {project.homepage && (
                            <a href={project.homepage} target="_blank" rel="noreferrer" className="btn-action primary">
                                🔗 Ver Projeto Online
                            </a>
                        )}
                        <button onClick={onClose} className="btn-action secondary">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Componente Timeline
const ProjectTimeline = ({ projects, onSelect }) => {
    return (
        <div className="project-timeline-container" data-aos="fade-up">
            <h3 className="timeline-title">Trajetória de Projetos</h3>
            <div className="timeline-line">
                {projects.sort((a, b) => b.year - a.year).map((proj, index) => (
                    <div key={proj.id} className="timeline-item" onClick={() => onSelect(proj)}>
                        <div className="timeline-dot"></div>
                        <span className="timeline-year">{proj.year}</span>
                        <span className="timeline-name">{proj.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

function Projetos() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        AOS.init();
    }, []);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    const featuredProject = projetos.find(p => p.featured);
    const regularProjects = projetos.filter(p => !p.featured);

    return (
        <section className='projetos-section' id="projetos">
            <div className='container'>
                <div className='section-header' data-aos="fade-down">
                    <h2 className='section-title'>Projetos 🔧</h2>
                    <p className='section-subtitle'>Soluções entregues com foco em performance e inovação</p>
                </div>

                {/* Projeto em Destaque */}
                {featuredProject && (
                    <div className='featured-project-container' data-aos="fade-up">
                        <h3 className="sub-title">Em Destaque</h3>
                        <div className='featured-card glass-morphism' onClick={() => openModal(featuredProject)}>
                            <div className='featured-image'>
                                <img src={featuredProject.background} alt={featuredProject.name} />
                                <div className='featured-badge'>DESTAQUE</div>
                            </div>
                            <div className='featured-content'>
                                <h3>{featuredProject.name}</h3>
                                <p>{featuredProject.description}</p>
                                <div className='tech-stack-mini'>
                                    {featuredProject.language.slice(0, 5).map((tech, i) => (
                                        <TechTag key={i} tech={tech} />
                                    ))}
                                </div>
                                <div className='featured-actions'>
                                    <button className='btn-details' onClick={(e) => { e.stopPropagation(); openModal(featuredProject); }}>
                                        📖 Ver Detalhes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Grid de Projetos Regulares */}
                <div className='project-grid'>
                    {regularProjects.map((project, index) => (
                        <div 
                            key={project.id} 
                            className="project-card-container"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="project-card glass-morphism">
                                <div className="card-top">
                                    <img src={project.background} alt={project.name} />
                                    <div className="card-hover-overlay">
                                        <div className="overlay-content">
                                            <p>{project.description}</p>
                                            <div className="overlay-btns">
                                                {project.homepage && (
                                                    <a href={project.homepage} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                                                        🔗 Ver Projeto
                                                    </a>
                                                )}
                                                <button onClick={() => openModal(project)}>
                                                   📖 Detalhes
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <h4>{project.name}</h4>
                                    <div className="card-techs">
                                        {project.language.slice(0, 3).map((tech, i) => (
                                            <TechTag key={i} tech={tech} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Linha do Tempo */}
                <ProjectTimeline projects={projetos} onSelect={openModal} />
            </div>

            <ProjectModal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                project={selectedProject} 
            />
        </section>
    );
}

export default Projetos;