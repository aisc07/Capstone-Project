import {Routes, Route} from 'react-router-dom';
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import ShoppingCart from "./ShoppingCart";
import CheckoutPage from "./CheckoutPage";





export default function MainPage(){
        return(
            <Routes>
            <Route path = "/loginpage" element = {<LoginPage/>}/>
            <Route path = "/homepage" element = {<HomePage/>}/>
            <Route path = "/shoppingcart" element = {<ShoppingCart/>}/>
            <Route path = "/checkoutpage" element = {<CheckoutPage/>}/>
           
          </Routes>
        )
}

