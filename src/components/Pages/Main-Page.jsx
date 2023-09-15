import {Routes, Route} from 'react-router-dom';
import SignInPage from './Sign-In-Page';
import HomePage from './Home-Page';
import CheckoutPage from './Checkout-Page';
import ViewProduct from './View-Product-Page';
import ShoppingBag from './Shopping-Bag';


export default function MainPage(){
        return(

            <div className="main-page">
                    <Routes>
                        <Route path = 'sign-in-page' element = {<SignInPage/>}/>
                        <Route path = '/' element = {<MainPage/>}/>
                        <Route path = '/home-page' element = {<HomePage/>}/>
                        <Route path = '/shopping-bag' element = {<ShoppingBag/>}/>
                        <Route path = '/checkout-page' element = {<CheckoutPage/>}/>
                        <Route path = '/view-product' element = {<ViewProduct/>}/>

                    </Routes>
            </div>
        );
};

