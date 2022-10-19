import { Fragment } from "react"
import Footer from "../components/footer"
import DetailProduct from "./detailProduct"

function DetailPage(){
return <Fragment>
    <header>
    </header>
    <main>
        <DetailProduct/>
    </main>
    <footer style={{paddingTop : '2%',position : 'relative'}}>
        <Footer/>
    </footer>
</Fragment>
}
export default DetailPage