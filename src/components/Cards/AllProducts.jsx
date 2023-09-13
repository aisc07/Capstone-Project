import { useEffect,useState } from 'react';
import AllProductsCard from './AllProductsCard';

function AllProducts() { 
  const [allProducts, setAllProducts] = useState([]);
      function fetchAllProducts(){
          fetch("https://fakestoreapi.com/products")
              .then((response) => response.json())
              .then((data) => {
                    console.log(data)
                    setAllProducts(data)
                  });
                };
        useEffect(()=>{
        fetchAllProducts()
      } 
  ,[]);
   
  return (
    <div>
    {/* <h2>hi</h2> */}
        {allProducts?.map(product =><AllProductsCard key={product.id} product={product}/>)}
    </div>
 
  )
}

export default AllProducts;