import './style.css'

function Navbar(){
    
    return(
        <nav class="navMenu">
            <a href="/#inicio">Sobre</a>
            <a href="/#projetos">Projetos</a>
            <a href="/#academico">Acadêmico</a>
            {/* <a href="/extra">Outros</a> */}
        </nav>
    )
}

export default Navbar;