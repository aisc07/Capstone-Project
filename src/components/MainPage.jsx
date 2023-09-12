import {Routes, Route} from 'react-router-dom';
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import ShoppingCart from "./ShoppingCart";
import CheckoutPage from "./CheckoutPage";

export default function MainPage(){
        return(

            <div id="mainpage">
                <Routes>
                    <Route path = "/loginpage" element = {<LoginPage/>}/>
                    <Route path = "/" element = {<MainPage/>}/>
                    <Route path = "/homepage" element = {<HomePage/>}/>
                    <Route path = "/shoppingcart" element = {<ShoppingCart/>}/>
                    <Route path = "/checkoutpage" element = {<CheckoutPage/>}/>
                </Routes>
            </div>
          
        )
}

