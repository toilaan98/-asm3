import { Fragment } from "react"
import Footer from "../components/footer"
import Nav from "../components/Nav"
import CartProduct from "./cartProduct"

function CartPage(){
return <Fragment>
    <header></header>
    <main>
    <CartProduct/>
    </main>
    <footer style={{paddingTop : '30px'}}>
      <Footer/>
   </footer>
</Fragment>
}
export default CartPage