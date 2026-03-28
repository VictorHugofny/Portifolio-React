import './style.css'

function Navbar(){
    return(
        <nav className="navMenu">
            <div className="container navContainer">
                <a href="#inicio">Sobre</a>
                <a href="#projetos">Projetos</a>
                <a href="#academico">Experiências</a>
            </div>
        </nav>
    )
}

export default Navbar;