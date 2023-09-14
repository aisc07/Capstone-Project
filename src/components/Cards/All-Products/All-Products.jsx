import { useEffect,useState } from 'react';
import AllProductsCard from './All-Products-Card';


export default function AllProducts() { 
  const [allProducts, setAllProducts] = useState([]);
      function fetchAllProducts(){
          fetch("https://fakestoreapi.com/products")
              .then((response) => response.json())
              .then((data) => {
                    // console.log(data)
                    setAllProducts(data)
                  });
                };
        useEffect(()=>{
        fetchAllProducts()
      } 
  ,[]);
   
  return (
        <div className='col-md-3'>
            {allProducts?.map(product =>< AllProductsCard key={product.id} product={product}/>)}
        </div>
  );
};