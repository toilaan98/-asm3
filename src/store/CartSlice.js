import { createSlice } from "@reduxjs/toolkit";
import {
  SaveFormLocalStorage,
  setFormLocalstorage,
} from "../LocalStorage/localStore";

export const CartItemSlice = createSlice({
  name: "CartItem",
  initialState: {
    products: [],
    quantity: 1,
    totalPrice: 0,
  },
  reducers: { 
    addIncrement(state, action) { console.log(action.payload);
      let arrProducts = SaveFormLocalStorage("arrProducts");
      state.quantity++;

      if (typeof action.payload === "number") {
        const newItem = action.payload;

        const existing = arrProducts.findIndex(
          (item, index) => index === newItem
        );

        if (typeof existing === "number") {

     
          arrProducts[existing].quantity++
          arrProducts[existing].total =
            parseInt(arrProducts[existing].total) +
            parseInt(arrProducts[existing].price);

   

          state.products = [...arrProducts];
          // console.log(state.products);
          setFormLocalstorage("arrProducts", state.products);
        }
      }
    },
    decrement(state, action) {
      let arrProducts = SaveFormLocalStorage("arrProducts");
      if (state.quantity > 1) {
        state.quantity = state.quantity - 1;
      }
   
      if (typeof action.payload === "number") {
        const newItem = action.payload;

        const existing = arrProducts.findIndex((item,index) =>index === newItem);
      
        if ( arrProducts[existing].quantity > 0) {
        
         
            console.log(true);
            arrProducts[existing].quantity--
            arrProducts[existing].total =
              parseInt(arrProducts[existing].total) -
              parseInt(arrProducts[existing].price);
  
     
  
            state.products = [...arrProducts];
            
            // console.log(state.products);
            setFormLocalstorage("arrProducts", state.products);
         
        }else{
          state.products = [...arrProducts];
          state.products.splice(existing,1)
          setFormLocalstorage("arrProducts", state.products);
        }
      }
    },
    DeleteProduct(state, action) {
      console.log(action.payload);

      const newItem = action.payload;

      const existing = state.products.findIndex((item) => item === newItem);
      if (existing) {
        if (existing) {
          const newItem = state.products;
          newItem.splice(existing, 1);
        }
        setFormLocalstorage("arrProducts", state.products);
      }
    },
    addToCart(state, action) {
      let arrProducts = SaveFormLocalStorage("arrProducts");
      const newItem = action.payload;

      const existing = arrProducts.find((item) => item.id === newItem.id);
     console.log(existing);

      if (existing) {
     
        existing.quantity = existing.quantity + action.payload.quantity;
        existing.total =
          parseInt(existing.total) +
          parseInt(action.payload.price) * action.payload.quantity;
  
        setFormLocalstorage("arrProducts", state.products);
      } else {
        state.products = [...arrProducts]
        state.products.push({
          id: newItem.id,
          quantity: newItem.quantity,
          price: newItem.price,
          total: newItem.price * newItem.quantity,
          name: newItem.name,
          img: newItem.img,
        });

        setFormLocalstorage("arrProducts", state.products);
      }
    },
    addLocalStorage(state, action) {},
  },
});
