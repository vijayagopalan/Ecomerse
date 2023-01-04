export const productsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST': return { ...state, loading: true };
    case 'FETCH_SUCCESS': return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL': return { ...state, error: action.payload, loading: false };
    default: return state;
  }
}

export const productReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST': return { ...state, loading: true };
    case 'FETCH_SUCCESS': return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL': return { ...state, error: action.payload, loading: false };
    default: return state;
  }
}

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const newItem = action.payload;
      const existingItem = state.cart.cartItems.find((item) => item._id === newItem._id);
      const cartItems = existingItem ? state.cart.cartItems.map((item) => item._id === existingItem._id ? newItem : item) : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "REMOVE_FROM_CART": {
      const cartItems = state.cart.cartItems.filter((item) => item._id !== action.payload._id);
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default: { return state }
  }
}