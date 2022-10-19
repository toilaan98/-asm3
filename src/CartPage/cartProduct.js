import {
  faArrowLeft,
  faArrowRight,
  faGift,
  faSquareCaretLeft,
  faSquareCaretRight,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SaveFormLocalStorage } from "../LocalStorage/localStore";
import { ActitonCartItem } from "../store";
import classes from "./cartProduct.module.scss";
import DecimalFormat, { RoundingMode } from "decimal-format";
function CartProduct() {

  const navigate = useNavigate()
  const df = new DecimalFormat("#,##0");
  df.setRoundingMode(RoundingMode.HALF_EVEN);
  const dispatch = useDispatch();
const quantity = useSelector(state => state.cart.products)
console.log(quantity);
  const products = localStorage.getItem("arrProducts")
    ? SaveFormLocalStorage("arrProducts")
    : null;
// console.log(products);
  const numberOfCartItems =
    !!products &&
    products.reduce((curNumber, item) => {
      return curNumber + item.total;
    }, 0);

const handleCheckOut = ()=> {
  navigate('/checkout',{replace : true})
}
  return (
    <div className={classes.Wrapper}>
      <div className={classes.shopBanner}>
        <div>
          <h1>Cart</h1>
        </div>
        <div>
          <p>Cart</p>
        </div>
      </div>
      <h3 style={{ textAlign: "left" }}>SHOPPING CART</h3>
      <div className={classes.ContainerProducts}>
        <div className={`${classes.itemLayout}`}>
          <h2 style={{ paddingBottom: "20px" }}>CART TOTAL</h2>

          {!!products &&
            products.map((item, index) => (
              <div className={classes.two} key={index}>
                <div className={classes.des}>
                  {item.name} x {<span>{item.quantity} item</span>}
                </div>{" "}
                <div className={classes.des}>{df.format(item.total)} VND</div>{" "}
                <br />
              </div>
            ))}

          <hr />
          <div style={{ fontSize: "25px", paddingBottom: "50px" }}>
            {" "}
            <span style={{ fontWeight: "500" }}>TOTAL :</span>{" "}
            <span style={{ fontWeight: "500" }}>
              {df.format(numberOfCartItems)} VND
            </span>
          </div>

          <div>
            <input
              style={{ width: "300px", height: "43px", fontSize: "20px" }}
            />
          </div>
          <div>
            <button
              style={{
                width: "300px",
                height: "43px",
                fontSize: "16px",
                background: "black",
                color: "white",
              }}>
              {" "}
              <FontAwesomeIcon icon={faGift} /> Apply Couupon
            </button>
          </div>
        </div>
        <div className={`${classes.itemLayout} ${classes.itemNavbar}`}>
          <div className={classes.itemc}>
            <p>IMAGE</p>
          </div>
          <div className={classes.itemc}>
            {" "}
            <p>PRODUCTS</p>
          </div>

          <div className={classes.itemc}>
            <p>PRICE</p>
          </div>
          <div className={classes.itemc}>
            <p>QUANTITY</p>
          </div>
          <div className={classes.itemc}>
            <p>TOTAL</p>
          </div>
          <div className={classes.itemc}>
            <p>REMOVE</p>
          </div>
        </div>
        {!!products &&
          products.map((item, index) => (
            <Fragment key={index}>
              <div
                key={index}
                className={`${classes.itemLayout} ${classes.itemNavbar}`}>
                <div className={classes.itemc}>
                  <img src={item.img} alt="image1" />
                </div>
                <div style={{ paddingTop: "43px" }}>
                  {" "}
                  <h4>{item.name}</h4>
                </div>
                <div style={{ paddingTop: "50px" }}>
                  <p>{df.format(item.price)} VND</p>
                </div>
                <div style={{ paddingTop: "68px" }}>
                  <div>
                    <span
                      onClick={() => dispatch(ActitonCartItem.decrement(index))}>
                      <FontAwesomeIcon icon={faSquareCaretLeft} />
                    </span>
                    <span style={{ padding: "0px 10px 0px 10px" }}>
                      {item.quantity}
                    </span>
                    <span
                      onClick={() =>
                        dispatch(ActitonCartItem.addIncrement(index))
                      }>
                      <FontAwesomeIcon icon={faSquareCaretRight} />
                    </span>
                  </div>
                </div>
                <div style={{ paddingTop: "68px" }}>{df.format(item.total)} VND</div>
                <div style={{ paddingTop: "68px" }}>
                <span onClick={()=>dispatch(ActitonCartItem.DeleteProduct(index)) }><FontAwesomeIcon icon={faTrashCan} /></span>
                  
                </div>
              </div>
            </Fragment>
          ))}

        <div className={`${classes.itemLayout} ${classes.navbar}`}> 
        <div style={{paddingRight :'280px'}}> <p><FontAwesomeIcon icon={faArrowLeft}/> Continue shopping </p> </div>
        <div style={{paddingTop : '17px',paddingLeft :'280px'}}><button  onClick={handleCheckOut} style={{width : '200px',height : '40px'}}>Proceed to checkout <FontAwesomeIcon icon={faArrowRight}/> </button> </div>
        </div>
      </div>
    </div>
  );
}
export default CartProduct;
