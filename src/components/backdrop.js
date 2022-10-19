import { Fragment } from "react";
import classes from "./backdrop.module.scss";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { popupAction } from "../store";
import { useNavigate } from "react-router-dom";
function ProductsDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
 
  function BackDrop() {
    
    
    const showDetail = useSelector((state) => state.popup.itemPopup);
    console.log(showDetail);
    return (
      <div className={classes.wraps}>
        <div className={classes.container}>
          <span className={classes.hidden}
            onClick={() => dispatch(popupAction.popupHide())}
            >
            x
          </span>
          <div className={classes.itemContainer}>
            <div className={classes.item}>
              <img src={showDetail.img1} alt={showDetail.category} />
            </div>
            <div className={classes.item}>
            <h4>{showDetail.name}</h4>
             <p>{showDetail.long_desc}</p>
             <button onClick={()=>{
                navigate('/detail',{replace : false})
    dispatch(popupAction.itemDetail(showDetail))
    
             }}>View Detail</button>
             </div>
                     </div>
        </div>
        return{" "}
      </div>
    );
  }
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop />,
        document.getElementById("backdrop-root")
      )}
    </Fragment>
  );
}
export default ProductsDetail;
