import { Fragment } from 'react'
import classes from  './footer.module.scss'
function Footer(){
    return<Fragment>
        <div className={classes.container}>
            <div className={classes.title}>
                <h1>CUSTOMER SERVICES</h1>
                <p>Help & Contact us</p>
                <p>Returns & Refunds</p>
                <p> Online Stores</p>
                <p> Terms & Conditions</p>
            </div>
            <div className={classes.title}>
                <h1>COMPANY</h1>
                <p>What We Do</p>
                <p>Avaiable Services</p>
                <p>Lastest Posts</p>
                <p>FAQs</p>

            </div>
            <div className={classes.title}>
                <h1>SOCIAL MEDIA</h1>
                <p>Twitter</p>
                <p>Telegram</p>
                <p>Facebook</p>
                <p> Pinterest</p>
            </div>
        </div>
    </Fragment>
}
export default Footer