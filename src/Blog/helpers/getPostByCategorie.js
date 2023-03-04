import { useFetch } from "../../hooks";
const url = 'https://msgmanager.tk/api/posts/'

export const getPostByCategorie = (categorie) =>{
    const{data} = useFetch(url)
    
    return data.filter(post => post.categories.includes(categorie))
}