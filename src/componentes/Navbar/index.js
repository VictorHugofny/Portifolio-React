import './style.css'
import { useTheme, THEMES } from '../../contexts/ThemeContext';

function Navbar(){
    const { theme, toggleTheme } = useTheme();
    const isClean = theme === THEMES.CLEAN;

    return(
        <nav className="navMenu">
            <div className="container navContainer">
                <a href="#inicio">Sobre</a>
                <a href="#projetos">Projetos</a>
                <a href="#academico">Experiências</a>

                <button
                    className="theme-toggle-btn"
                    onClick={toggleTheme}
                    aria-label={isClean ? 'Mudar para tema escuro' : 'Mudar para tema clean'}
                    title={isClean ? 'Tema Escuro' : 'Tema Clean'}
                >
                    <span className="toggle-icon" aria-hidden="true">
                        {isClean ? '🌙' : '☀️'}
                    </span>
                    <span className="toggle-label">{isClean ? 'Dark' : 'Clean'}</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;