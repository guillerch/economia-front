import { useFetch } from "../../hooks";
const url = 'https://msgmanager.tk/api/posts/'

export const getPostById = (id) =>{
    const{data} = useFetch(url)
    
    return data.find(post => post.id === id)
}