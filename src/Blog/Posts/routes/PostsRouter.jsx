import { useFetch } from "../../../hooks";
import { Post } from "../Post";


export const PostsRouter = ({ id }) => {
    const url = `https://msgmanager.tk/api/posts/${id}/`;
    const { data } = useFetch(url);
    if (!data.points) {
        return <div>Loading...</div>;
    }
    return <Post key={data.id} {...data}/>;
};