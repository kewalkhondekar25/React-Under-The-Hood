import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducers/Reducer";

const initialState = {
    meals: [],
    cart: [],
    count: 0,
    total: 0
}

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    //fetch meals
    const fetchMeals = async () => {
        try {
            const res = await axios.get("https://vegan-meals-api.vercel.app/api/v1/meals");
            const data = res.data;
            dispatch({type: "FETCH_MEALS", payload: data})
        } catch (error) {
            console.log(error);
        }
    }

    //add to cart
    const addToCart = (_id, category, title, description, price, image, quant) => {
        alert('Meal added to Cart');
        dispatch({type: 'ADD_TO_CART', payload: {_id, category, title, description, price, image, quant}});
    }

    //clear cart
    const clearCart = () => {
        dispatch({type: 'CLEAR_CART'})
    }
    //update count
    const updateCount = () => {
        dispatch({type: 'UPDATE_COUNT'})
    }
    //update quant
    const handleIncrement = (id) => {
        dispatch({type: 'HANDLE_INCREMENT', payload: id})
    }
    const handleDecrement = (id) => {
        dispatch({type: 'HANDLE_DECREMENT', payload: id})
    }
    useEffect(() => {
        fetchMeals();
    }, [])

    useEffect(() => {
        fetchMeals();
        updateCount();
    }, [state.cart])

    return <AppContext.Provider value={{
        ...state,
        addToCart,
        clearCart,
        handleIncrement,
        handleDecrement

    }}>
        {children}
    </AppContext.Provider>
}

export {AppContext, AppProvider}