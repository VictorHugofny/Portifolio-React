import api from '../../services/api';
import Projetos from '../../componentes/Projetos'
import Academico from '../../componentes/Academico'
import { useEffect, useState} from 'react';
import Sobre from '../../componentes/Sobre'
import Footer from '../../componentes/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

function Home(){
    const [sobre, setSobre] = useState({});
    
    useEffect(()=>{
        AOS.init();
        
        async function carregarDados(){
            const response = await api.get()
            setSobre(response.data)
            console.log(response.data)
        }
        carregarDados();
    },[])

    return( 
        <div> 
            <div className='div-extra'>
                <a href='https://steamcommunity.com/id/HugoFUNNY/' target='_blank'>
                    <div className='card-extra' id='steam'>
                        <h1>Meu perfil na Steam</h1>
                    </div>
                </a>
            </div>

            
            <figure className='videos'>
                <h1>CS2 - JOGADAS</h1> <br></br><br></br>
                <div className="boxVideo">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_yu9E5bLSF8?si=8CzlMuK2-x1Wr7K6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                
                </div>

                <div className="boxVideo">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/YyOWEPDoTd8?si=Ww_IuznwKlaDlTJs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                
                </div>
                
                <div className="boxVideo">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/7yFAXiTOQ20?si=OaZ28erxGDQVpcUY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="boxVideo">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/KWGVW2Vkbko?si=OzPdONp-sFV7aLUF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                </div>

                <div className="boxVideo">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/YR71Sd6-zTY?si=QwSnXHCkwYIJG7Bi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </figure>
        </div>
    )

}

export default Home;