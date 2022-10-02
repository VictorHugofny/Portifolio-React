
import './style.css'

function Academico(){
    
    return(

<div className="trabalhos">
    <h1>Trabalhos Acadêmicos</h1>
    <p>Abaixo meus trabalhos e estudos como artigos e minicursos</p>

    <div className="trabalhos"> 

        <h2>ARTIGO: "SEGURANÇA DA INFORMAÇÃO NO CONTEXTO ESCOLAR"</h2> 
        <p>Escrito por Victor Hugo de Carvalho Santana, Douglas Silva Santos, Luis Henrique de Almeida Gomes</p> 
        <h3>Editora Realize</h3> <a> Publicado em 17 de janeiro de 2022</a>
        <object data="https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf#zoom=92" type="application/pdf" width="90%" height="600" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="">
            <p>Seu navegador não tem um plugin pra PDF</p>
        </object>
        <a target="_blank" href="https://editorarealize.com.br/artigo/visualizar/80791"><button> <p className="btntext"> Publicação </p></button></a>
    </div>
    <div className="trabalhos"> 
        <h2>MINICURSO - INTRODUÇÃO A ALGORITMO EM JAVASCRIPT</h2> 
        <p>Ministrado por Victor Hugo, Douglas Silva, Marcos Santos</p> 
        <a> Publicado em 26 de março de 2021</a>

        <figure>
            <div className="boxVideo">
                <iframe width="250" height="180" src="https://www.youtube.com/embed/h5i7P6rqAhU" frameborder="0" allowfullscreen></iframe> 
            </div>
        </figure>

        <figure>
            <div className="boxVideo">
                <iframe width="250" height="180" src="https://www.youtube.com/embed/HBbky2hqbOg" frameborder="0" allowfullscreen></iframe> 
            </div>
        </figure>


    </div>

</div>
    )
}

export default Academico;