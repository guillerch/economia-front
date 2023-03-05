import { Routes, Route } from 'react-router-dom';
import { useFetch } from '../../../hooks';
import { Categoria } from '../Categoria';

export const CategoriesRoute = () => {
    const url = 'https://msgmanager.tk/api/categories/';
    const { data } = useFetch(url);
    
    if (!data) {
    // Si data es undefined, muestra un mensaje de carga o un spinner.
    return <div>Loading...</div>;
    }
    const categoriesRoute = data.map((categorie) => (
        <Route
        key={categorie.slug} // agregando un key prop único
        path={`/${categorie.slug}`}
        element={<Categoria categoria={categorie} />}
        />
        )
        
    );

    return <Routes>{categoriesRoute}</Routes>
};