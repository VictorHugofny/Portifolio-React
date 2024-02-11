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
        <div className='div-extra'>

            <a href='/documentacao'>
                <div className='card-extra' id='programacao'>
                    <h1>Programação e Documentações</h1>
                    <p>Documentações/paginas escritas por mim</p>
                </div>
            </a>

            <a href='/jogos'>
                <div className='card-extra' id='gameplay'>
                    <h1>Um pouco sobre jogos</h1>
                    <p>Gameplays e um pouco sobre esse meu hobby</p>
                </div>
            </a>
            <a href='https://www.youtube.com/channel/UC0LxIVk-V0k6LsX_Z251iMw' target='_blank'>
                <div className='card-extra' id='youtube'>
                    <h1>Lyrics Video</h1>
                </div>
            </a>
            <a href='https://www.youtube.com/channel/UCmplSMpzK73aHzJQeR45gOQ' target='_blank'>
                <div className='card-extra' id='youtube'>
                    <h1>Acadêmico</h1>
                </div>
            </a>
        </div>
    )

}

export default Home;