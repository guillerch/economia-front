import { useFetch } from "../../hooks";


export const CategoriesRoutes = () => {
    const url = 'https://msgmanager.tk/api/categories/'
    const {data} = useFetch(url)
    return {data}
}
