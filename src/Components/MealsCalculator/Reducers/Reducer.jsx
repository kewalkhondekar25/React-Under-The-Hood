const Reducer = (state, action) => {

    console.log(state, action);

    if(action.type === 'FETCH_MEALS'){
        return {...state, meals: action.payload}
    };

    if(action.type === "ADD_TO_CART"){
        const {_id, category, title, description, price, image, quant} = action.payload;
        let sameItem = state.cart.find(item => item._id === _id);
        if(sameItem){
            let tempItem = state.cart.map(item => {
                if(item._id === _id){
                    let newQuant = item.quant + quant;
                    return {...item, quant: newQuant}
                }else{
                    return item
                }
            })
            console.log(tempItem);
            return {...state, cart: tempItem}
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
    if(action.type === 'HANDLE_INCREMENT'){
        let tempQuant = state.cart.map(item => {
            if(item._id === action.payload){
                let newQuant = item.quant + 1;
                return {...item, quant: newQuant}
            }else{
                return item
            }
        })
        return {...state, cart: tempQuant}
    }
    if(action.type === 'HANDLE_DECREMENT'){
        let tempQuant = state.cart.map(item => {
            if(item._id === action.payload){
                let newQuant = item.quant - 1;
                return {...item, quant: newQuant}
            }else{
                return item
            }
        })
        return {...state, cart: tempQuant}
    }
    
    return state;
}

export default Reducer;

