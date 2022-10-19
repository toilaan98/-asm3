import { Fragment } from "react"
import { useNavigate } from "react-router-dom"
import classes from './banner.module.scss'
const img = require('../images/banner1.jpg')
function Banner (){
    const navigate = useNavigate()
    const handleShopPage = ()=> {
      navigate('/shop',{replace : false})
    }
return<Fragment>
    <div className={classes.container}>
 <div>
    <img  src={img} alt = 'banner'/>
 </div>
 <div className={classes.title}>
 <p style={{paddingBottom : '15px',fontSize : '2.4rem',color : '#777F87'}}>NEW INSPIRATION 2020</p>
 <h2>"20% OFF ON NEW <br/> <br/> SEASON</h2>
<button onClick={handleShopPage}>Browse Collection</button>
 </div>
    </div>
    
    
</Fragment>
}
export default Banner