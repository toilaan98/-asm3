import { Fragment } from "react";
import Footer from "../components/footer";
import CheckOut from "./checkOut";

function CheckOutPage() {
  return (
    <Fragment>
     
    
        <CheckOut />
        <footer style={{paddingTop : '30px'}}>
      <Footer/>
   </footer>
    </Fragment>
  );
}
export default CheckOutPage;
