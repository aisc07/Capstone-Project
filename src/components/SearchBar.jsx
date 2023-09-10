import {Link} from 'react-router-dom'

export default function SearchBar(){
    return(
        <div id="navbar">
              
            <Link to = "/loginpage">Login</Link>
            <Link to = "/homepage">Home</Link> 
            <Link to = "/shoppingcart">Shopping Cart</Link>
            <Link to = "/checkoutpage">Checkout</Link>

        </div>
    );
}











// import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


// function SearchBar() {
//   return (
//     <Navbar className="bg-body-tertiary justify-content-between">
//       <Form inline>
//         <InputGroup>
//           <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
//           <Form.Control
//             placeholder="Username"
//             aria-label="Username"
//             aria-describedby="basic-addon1"
//           />
//         </InputGroup>
//       </Form>
//       <Form inline>
//         <Row>
//           <Col xs="auto">
//             <Form.Control
//               type="text"
//               placeholder="Search"
//               className=" mr-sm-2"
//             />
//           </Col>
//           <Col xs="auto">
//             <Button type="submit">Submit</Button>
//           </Col>
//         </Row>
//       </Form>
//     </Navbar>
//   );
// }

// export default SearchBar;