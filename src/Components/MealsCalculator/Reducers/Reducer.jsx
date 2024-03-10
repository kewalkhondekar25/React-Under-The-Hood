const Reducer = (state, action) => {

    console.log(state, action);

    if(action.type === 'FETCH_MEALS'){
        return {...state, meals: action.payload}
    };

    if(action.type === "ADD_TO_CART"){
        const {_id, category, title, description, price, image, quant} = action.payload;
        let sameItems = state.cart.find(item => item._id === _id)
        if(sameItems){
            let tempItems = state.cart.map(item => {
                if(item._id === _id){
                    let newQuant = item.quant + quant
                    return {...item, quant: newQuant}
                }else{
                    return item
                }
            })
            return {...state, cart: tempItems}
        }else{
            let tempCart = {
                _id, 
                category, 
                title, 
                description, 
                price, 
                image,
                quant
            };
            return {...state, cart: [...state.cart, tempCart]}
        }
        return {...state}
    }
    if(action.type === 'UPDATE_COUNT'){
        let counter = state.cart.length;
        return {...state, count: counter}
    }
    if(action.type === 'CLEAR_CART'){
        return {...state, cart: []}
    }

    return state;
}

export default Reducer;

