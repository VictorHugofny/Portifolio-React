import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './views/Home';
import Extra from './views/Extra';
import Navbar from './componentes/Navbar';
import Documentacao from './views/documentacao';
import Jogos from './views/jogos';

function RoutesAPP(){
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/extra" element={<Extra/>}/>
                <Route path="/documentacao" element={<Documentacao/>}/>
                <Route path="/jogos" element={<Jogos/>}/>
            </Routes>
        </BrowserRouter>
    )}

export default RoutesAPP;