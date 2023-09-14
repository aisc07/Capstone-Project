import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

 
export default function AllProductsCard({product}){
        // console.log(product)
    return(


        <div className='all-products' >
            <div className='d-flex'>
         
    <Card>

                <Link to = '/view-product'><Card.Img className='product-img' variant="top"  src={product.image}/></Link>
<br/>
          <Card.Body className='product-body'>
                <Card.Title className='product-price'>{"$"}{product.price}</Card.Title>
                <Link to = '/view-product' className='product-title-link'> <Card.Title>{product.title}</Card.Title></Link>
                {/* <Card.Header>{"Rating: "}{product.rating.rate}</Card.Header> */}
                {/* <Card.Footer>{"Count: "}{product.rating.count}</Card.Footer> */}
                <Card.Text className='product-description'>{product.description}</Card.Text>
                <Button className='product-btn' variant="primary" >Add to Cart</Button>
          </Card.Body>
    </Card>
          </div>  
          </div>
    )
};