import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext);
}

const AppProvider = ({children}) => {
    const [name, setName] = useState("arjun")

    return <AppContext.Provider value={{
        name,
        setName
    }}>
        {children}
    </AppContext.Provider>
}

export default AppProvider