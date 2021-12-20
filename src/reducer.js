export const initialState = {
    cart: [],
};

// Selector
export const getCartTotal = (cart) => 
    cart?.reduce(( amount, item ) => amount + item.price, 0);
    
    // Development -> Deployment -> Production

const reducer = (state, action) => {
    console.log(action);
   switch (action.type) {
      case "ADD_TO_CART":
            return{
                ...state,    // ... Spread Operator to use a Variable multiple times 
                cart: [...state.cart, action.item],
            };
      default:
          return state;
    }
};

export default reducer;