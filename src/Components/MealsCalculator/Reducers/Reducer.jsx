const Reducer = (state, action) => {
    console.log(state, action);
    if(action.type === 'FETCH_MEALS')
    {
        return {...state, meals: action.payload}
    };
    if(action.type === "ADD_TO_CART")
    {
        let cartItems = state.meals.filter(item => item._id === action.payload);
        return {...state, cart: [...state.cart, ...cartItems]}
    }
    if(action.type === 'UPDATE_COUNT')
    {
        let counter = state.cart.length;
        return {...state, count: counter}
    }
    if(action.type === 'CLEAR_CART')
    {
        return {...state, cart: []}
    }

    return state;
}

export default Reducer;

