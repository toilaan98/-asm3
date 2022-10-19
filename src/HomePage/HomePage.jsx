import { fa0 } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Fragment } from "react"
import Footer from "../components/footer"
import Nav from "../components/Nav"
import Banner from "./banner"
import ProductsList from "./ListProducts"


function HomePage(){
return <Fragment>
<header>
<Nav/>
<Banner/>
</header>
<main>
<ProductsList/>
</main>
<footer style={{position : 'relative' , top: '200px'}}>
<Footer/>
</footer>

</Fragment>

}
export default HomePage