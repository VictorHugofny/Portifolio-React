import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

function Home(){
    useEffect(()=>{
        AOS.init();
    },[])

    return( 
        <div className='div-extra'>
            <a href='/' target='_blank' rel="noreferrer">
                <div className='card-extra'>
                    <h1>Em Desenvolvimento</h1>
                </div>
            </a>
        </div>
    )

}

export default Home;