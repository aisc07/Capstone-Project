import { useEffect, useState } from "react"

const [sortProducts, setSortProducts] = useState("")

export default function SortProducts(){
  function fetchSortProducts(){
    fetch('https://fakestoreapi.com/products?sort=desc')
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setSortProducts(data)
            });
        };
        useEffect(()=>{
            fetchSortProducts()
        },[]);
   
        return(
        <div>
            {/* {sortProducts?.map(product)=>{key={product.id} product={product}}} */}
        </div>
    );
};