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