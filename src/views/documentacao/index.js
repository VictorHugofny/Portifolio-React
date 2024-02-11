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
            <a href='/' target='_blank'>
                <div className='card-extra'>
                    <h1>Em Desenvolvimento</h1>
                </div>
            </a>
        </div>
    )

}

export default Home;