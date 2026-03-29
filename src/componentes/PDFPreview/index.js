import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { IconPDF, IconExternal } from '../Sobre/SVGIcons';

// Renders the modal at document.body level — avoids z-index / scroll capture bugs
const ModalPortal = ({ children }) => {
    return ReactDOM.createPortal(children, document.body);
};

const PDFPreview = ({ pdfUrl, title, thumbnailUrl }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Detect mobile once — user-agent doesn't change during a session
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Lock/unlock body scroll in sync with modal state
    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : '';
        // Always restore on unmount (covers navigation / component teardown)
        return () => {
            document.body.style.overflow = '';
        };
    }, [isModalOpen]);

    // Escape key closes modal
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && isModalOpen) closeModal();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isModalOpen]);

    return (
        <div className="pdf-preview-container">
            {/* Clean preview card */}
            <div className="pdf-preview-card" onClick={openModal}>
                <div className="pdf-thumbnail-wrapper">
                    {thumbnailUrl ? (
                        <img src={thumbnailUrl} alt={title} className="pdf-thumbnail" />
                    ) : (
                        <div className="pdf-placeholder">
                            <IconPDF />
                            <span>Visualizar Documento</span>
                        </div>
                    )}
                    <div className="pdf-card-overlay">
                        <button className="preview-trigger-btn">
                            <IconExternal /> Abrir Preview
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal via Portal — rendered directly on document.body */}
            {isModalOpen && (
                <ModalPortal>
                    <div
                        className="pdf-modal-overlay"
                        onClick={closeModal}
                        onTouchMove={(e) => e.stopPropagation()}
                    >
                        <div
                            className="pdf-modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="pdf-modal-header">
                                <div className="pdf-modal-title">
                                    <IconPDF />
                                    <h3>{title}</h3>
                                </div>
                                <div className="pdf-modal-actions">
                                    <a
                                        href={pdfUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="pdf-action-btn primary"
                                    >
                                        Abrir em nova guia
                                    </a>
                                    <button className="pdf-modal-close" onClick={closeModal}>&times;</button>
                                </div>
                            </div>
                            <div className="pdf-modal-body">
                                {isMobile ? (
                                    <div className="mobile-pdf-fallback">
                                        <IconPDF />
                                        <p>O visualizador de PDF pode variar em dispositivos móveis.</p>
                                        <a href={pdfUrl} target="_blank" rel="noreferrer" className="academico-btn">
                                            Clique aqui para ver o documento completo
                                        </a>
                                    </div>
                                ) : (
                                    <object
                                        data={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                                        type="application/pdf"
                                        width="100%"
                                        height="100%"
                                    >
                                        <div className="pdf-fallback">
                                            <p>Seu navegador não suporta a visualização direta.</p>
                                            <a href={pdfUrl} target="_blank" rel="noreferrer" className="academico-btn">
                                                Baixar PDF
                                            </a>
                                        </div>
                                    </object>
                                )}
                            </div>
                        </div>
                    </div>
                </ModalPortal>
            )}
        </div>
    );
};

export default PDFPreview;
