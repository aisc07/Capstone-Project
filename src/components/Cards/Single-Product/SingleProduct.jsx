import { useState,useEffect } from "react";
import SingleProductCard from "./SingleProductCard";

export default function SingleProduct(){
        const [singleProduct, setSingleProduct] = useState([]);

            function fetchSingleProduct(){
                fetch("https://fakestoreapi.com/products/id")
                    .then((response) => response.json())
                    .then((data) => {
                          console.log(data)
                          setSingleProduct(data)
                        });
                      };
              useEffect(()=>{
              fetchSingleProduct()
            } 
        ,[]);
       
         
        return (
            <div>
                {singleProduct?.map(product =><SingleProductCard onClick={product.id} key={product.id} product={product}/>)}
            </div>
        );
    };