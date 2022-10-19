import { Fragment } from "react"
import Footer from "../components/footer"
import SignupUser from "./Logup"


function LoginPage(){
return <Fragment>
  
    <main>
      <SignupUser/>
    </main>
    <footer style={{position : 'relative',    bottom: '489px'}}>
        <Footer/>
    </footer>
</Fragment>
}
export default LoginPage