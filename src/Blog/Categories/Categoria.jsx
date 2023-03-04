import React from 'react';
import { PostCard } from '../components/PostCard';
import {getPostByCategorie} from '../helpers/getPostByCategorie';

export const Categoria = ({categoria}) => {
    const {name,id,slug} = categoria;
    const posts = getPostByCategorie(id);
    return (
        <div className="container mt-2 text-center animate__animated animate__fadeIn">
            <h3 className='general_color'>
                <b>{name}</b>
            </h3>
            <hr />
            <div className="row rows-cols-1 row-cols-md-3 g-3 d-flex align-items-center justify-content-center">
                {posts.map(post =>
                        <PostCard key={post.id} categorySlug={slug} {...post}/>
                    )}
            </div>
        </div>
    )
}
