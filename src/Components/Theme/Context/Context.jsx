import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggle = () => {
        setIsDarkMode(prev => !prev);
    }

    return <AppContext.Provider value={{
        isDarkMode,
        toggle
    }}>
        {children}
    </AppContext.Provider>
}

export { AppContext, AppProvider }