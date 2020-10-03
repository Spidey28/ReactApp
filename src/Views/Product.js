import React from "react";
import { useParams } from "react-router-dom";
import Loader from '../Components/Loader'
import { useAxiosGet } from "../Hooks/HttpRequest";


function Product() {

    const { id } = useParams()
    
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`;

    let content = null

    let product = useAxiosGet(url)

    if (product.error) {
        content = <p> Oops! Please refresh or try again later.</p>
    }

    if (product.loading) {
        content = <Loader/>
    }

    if (product.data) {
      content = (
        <div>
          <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
          <div>
            <img
              src={product.data.images[0].imageUrl}
              alt={product.data.name}
            />
            <div className="font-bold text-xl mb-3">$ {product.data.price}</div>
            <div>{product.data.description}</div>
          </div>
        </div>
      );
    }

    return (
        <div>
            {content}
        </div>
    )
    
}

export default Product;
