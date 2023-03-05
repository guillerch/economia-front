import { HashRouter ,Route, Routes,Navigate } from 'react-router-dom';
import { Bayas } from "../Bayas/Bayas";
import { CategoriesRoute } from "../Blog/Categories/routes/CategoriesRoute";
import { PostsRoutes } from "../Blog/Posts/routes/PostsRoutes";
import { Crianza } from "../Crianza/Crianza";
import { Politica, Terminos, Cookies } from "../Legal";
import { PokeAsistente } from "../PokeAsistente";
import { Navbar } from "./Navbar";


export const AppRoutes = () => {
    
    return (
        <>
        <Navbar/>
        <div className="container">

            <Routes>
            <Route path = '/' element={<PokeAsistente/>}/>
            <Route path = 'bayas' element={<Bayas/>}/>
            <Route path = 'crianza' element={<Crianza/>}/>
            {/* Rutas del blog */}
            <Route path='/*' element={<CategoriesRoute/>}/>
            <Route path='post/*' element={<PostsRoutes/>}/>
            {/* Rutas de politicas y terminos */}
            <Route path = 'politicas' element={<Politica/>}/>
            <Route path = 'terminos' element={<Terminos/>}/>
            
            {/* en caso de no existir la ruta */}
            <Route path="/*" element={<Navigate to="/crianza" />} />
            </Routes>

        </div>
        <Cookies/>
        </>
    )
}