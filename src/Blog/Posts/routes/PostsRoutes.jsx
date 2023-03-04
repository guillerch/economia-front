import { Routes, Route } from 'react-router-dom';
import { useFetch } from "../../../hooks";
import { PostsRouter } from "./PostsRouter";

export const PostsRoutes = () => {
    const url = "https://msgmanager.tk/api/posts/";
    const { data } = useFetch(url);

    if (!data) {
    // Si data es undefined, muestra un mensaje de carga o un spinner.
    return <div>Loading...</div>;
    }
    const postsRoute = data.map((post) => (
    <Route
        key={post.id} // agregando un key prop único
        path={`/${post.id}`}
        element={<PostsRouter id={post.id} />}
    />
    ));
    return <Routes>{postsRoute}</Routes>;
};