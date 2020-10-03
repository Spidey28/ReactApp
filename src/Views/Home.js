import React from "react";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequest";
// import HelloWorld from "../Components/HelloWorld";


function Home() {
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`;
    
    let content = null;

    let products = useAxiosGet(url)

    if (products.error) {
        content = <p> Oops! Please refresh or try again later.</p>
    }

    if (products.loading) {
        content = <Loader/>
    }

    if (products.data) {
      content = (
          products.data.map((product) => 
            <div key={product.id}>
                <ProductCard 
                    product={product}
                />
            </div>
        )
      );
    }

    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-2xl mb-3">
                Best Sellers
            </h1>
            <div className="md:flex flex-wrap md:-mx-3">
                { content } 
            </div>
        </div>
    )
}

export default Home