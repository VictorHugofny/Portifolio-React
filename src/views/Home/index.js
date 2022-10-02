import api from '../../services/api';
import Projetos from '../../componentes/Projetos'
import Academico from '../../componentes/Academico'
import { useEffect, useState} from 'react';
import Sobre from '../../componentes/Sobre'



function Home(){
    const [sobre, setSobre] = useState({});
    
    useEffect(()=>{
        async function carregarDados(){
            const response = await api.get()
            setSobre(response.data)
            console.log(response.data)
        }
        carregarDados();
    },[])

    return(

        <div>
            <Sobre/>
            <Projetos/>
            <Academico/>
        </div>

        
    )

}

export default Home;