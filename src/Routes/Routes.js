import { Navigate } from "react-router-dom"
import CartPage from "../CartPage/CartPage"
import CheckOutPage from "../CheckoutPage/CheckOutPage"
import DetailPage from "../DetailPage/DetailPage"
import HomePage from "../HomePage/HomePage"
import SignIn from "../loginPage/loginPage"
import LoginPage from "../logupPage/loginPage"




import ShopPage from "../ShopPage/shopPage"

const Publicroutes = [

  {path : '/home' ,component : HomePage},
  {path : '/cart' ,component : CartPage},
  {path : '/checkout' ,component : CheckOutPage},
  {path : '/detail' ,component : DetailPage},
  {path : '/login' ,component : SignIn},
  {path : '/register' ,component : LoginPage},
  {path : '/shop' ,component : ShopPage},
]  
export default  Publicroutes 
//   <Route path='./home' element={<HomePage/>}/>
// <Route path='./cart' element={<CartPage/>}/>
// <Route path='./checkout' element={<CheckOutPage/>}/>
// <Route path='./detail' element={<DetailPage/>}/>
// <Route path='./login' element={<LoginPage/>}/>
// <Route path='./register' element={<ResgisterPage/>}/>
// <Route path='./shop' element={<ShopPage/>}/>