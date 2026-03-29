import Projetos from '../../componentes/Projetos'
import Academico from '../../componentes/Academico'
import { useEffect } from 'react';
import Sobre from '../../componentes/Sobre'
import Footer from '../../componentes/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home(){
    useEffect(()=>{
        AOS.init();
    },[])

    return(

        <div>
            <Sobre/>
            <br></br><br></br>
            <Projetos/>
            <Academico/>
            <Footer/>
        </div>

        
    )

}

export default Home;