import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    const { removeFromDom } = props;
    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/product/' +id)
            .then(res => {
                removeFromDom(id)
            })
        }
    return (
        <div>
            {props.product.map((product, idx)=>{



                return <Link to={'/product/'+product._id} > <p key={idx}>{product.title}</p> 
                 <button onClick={(e)=>{deleteProduct(product._id)}}>
                Delete
            </button>
            </Link> 
                
                 
            })}
        </div>
    )
}