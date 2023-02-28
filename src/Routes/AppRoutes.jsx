import { Route,Routes,Navigate } from "react-router-dom";
import React from 'react'
import { Bayas } from "../Bayas/Bayas";
import { Crianza } from "../Crianza/Crianza";
import { Politica } from "../Legal/Politica";
import { Terminos } from "../Legal/Terminos";
import { PokeAsistente } from "../PokeAsistente";
import { Navbar } from "./Navbar";
import { Cookies } from "../Legal/Cookies";

export const AppRoutes = () => {
    return (
        <>
        <Navbar/>
        <div className="container">
            <Routes>
                <Route path = 'bayas' element={<Bayas/>}/>
                <Route path = 'crianza' element={<Crianza/>}/>
                <Route path = 'politicas' element={<Politica/>}/>
                <Route path = 'terminos' element={<Terminos/>}/>
                <Route path = '/' element={<PokeAsistente/>}/>
                {/* en caso de no existir la ruta */}
                <Route path = '/*' element={<Navigate to ='/'/>}/>
            </Routes>
        </div>
        <Cookies/>
        </>
    )
}

