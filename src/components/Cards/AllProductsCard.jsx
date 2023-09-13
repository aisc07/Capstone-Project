import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function AllProductsCard({product}){
       console.log(product)
    return(
       
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image}/>
      
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Header>{product.price}</Card.Header>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary">See more</Button>
      </Card.Body>
    </Card>
)};