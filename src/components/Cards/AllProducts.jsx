import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AllProducts() {
  // const [allProducts, setAllProducts]=useState(null);

  //   useEffect(()=>{
  //     async function fetchAllProducts(){

  //     try{
  //         const response = await fetch('https://fakestoreapi.com/products');
  //         const result = await response.json;
  //         setAllProducts(result)


  //                         // .then(res=>res.json())
  //                         // .then(json=>console.log(json))
    
  //         }catch (error) {
  //         console.error(error);
  //       }};              
  //    fetchAllProducts();
  // },[])


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default AllProducts;