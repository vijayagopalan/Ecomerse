import React, { createContext, useReducer } from "react";
import { cartReducer } from "../reducer";

export const CartContext = createContext();
const initialstate = {
    cart: {
        cartItems: []
    }
};

export const CartProvider = (props) => {
    const [state, dispatch] = useReducer(cartReducer, initialstate);
    const value = { state, dispatch };
    // eslint-disable-next-line react/prop-types
    return <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
};