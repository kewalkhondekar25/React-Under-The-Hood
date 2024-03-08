import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Navbar from "./Component/Navbar"
import { AppProvider } from "./Context/Context"


const ThemeIndex = () => {
    return (
        <AppProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </AppProvider>
    )
}

export default ThemeIndex