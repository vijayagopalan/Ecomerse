import React, { createContext, useReducer } from "react";

export const CartContext = createContext();
const initialstate = {
    cart: {
        cartItems: []
    }
};
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": return { ...state, cart: { ...state.cart, cartItems: [...state.cart.cartItems, action.payload] } };
        default: return state;
    }
}
export const CartProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialstate);
    const value = { state, dispatch };
    // eslint-disable-next-line react/prop-types
    return <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
};