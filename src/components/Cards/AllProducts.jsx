import { useEffect, useState } from 'react';
// import AllProductsCard from './AllProductsCard';

function AllProducts() { 
      function fetchAllProducts(){
         fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
          .then((data) => {
           console.log(data[0].title)
          // setAllProducts(allProducts)
          });
          
      }
      
      const [allProducts, setAllProducts] = useState([]);
        useEffect(()=>{fetchAllProducts()}
          ,[]);
   
  return (
    <h2>hi</h2>
        // allProducts?.map(product =><AllProductsCard key={product.id} product={product}/>)
   
        // return musicData.map(music=><MusicCard music={music}/>)
 
  )
}

export default AllProducts;