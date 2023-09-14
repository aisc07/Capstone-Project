import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function SingleProductCard({product}){
       console.log(product)


    return(
        <div className="row">
          <div className="row row-cols-1 row-cols-md-3 g-4">
    <Card >
        <Card.Img variant="top"  src={product.image}/>
        {/* height="500" */}
      <Card.Body>
        <Card.Title>{"$"}{product.price}</Card.Title>
        <Card.Subtitle>{product.title}</Card.Subtitle>
        <br/>
        {/* <Card.Header>{"Rating: "}{product.rating.rate}</Card.Header> */}
        {/* <Card.Footer>{"Count: "}{product.rating.count}</Card.Footer> */}
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary">Add to Bag</Button>
      </Card.Body>
    </Card>
          </div>

        </div>
      // <div className="all">
        // {/* style={{ width: '18rem' }} */}
        
    
      // </div>
       
      
)};