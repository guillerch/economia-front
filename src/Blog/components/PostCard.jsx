import { Link } from "react-router-dom"


export const PostCard = ({
    categoryName,
    thumbnail,
    title,
    id,}) => {
    return (
        <div className="card general_color mx-1 pt-2 mb-2" style={{width: '18rem'}}>
            <img src={`${thumbnail}`} className="card-img-top" alt={title}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <Link to={`/post/${id}`} className="btn btn-outline-info card-btn">Ir al post</Link>
            </div>
        </div>
    )
}
