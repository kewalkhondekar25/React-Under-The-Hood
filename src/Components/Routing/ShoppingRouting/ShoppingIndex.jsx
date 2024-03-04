import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Electronics from './Electronics'
import Fashion from './Fashion'
import Footware from './Footware'
import FakeStoreApi from '../../Hooks/FakeStoreApi'

const ShoppingIndex = () => {
    return (
        <Router>
            <ul>
                <li><Link to="/electronics">Electronics</Link></li>
                <li><Link to="/fashion">Fashion</Link></li>
                <li><Link to="/footware">Footware</Link></li>
                <li><Link to="/fakestore">Fake Store</Link></li>
            </ul>
            <Routes>
                {/* <Route path='/' element={<ShoppingIndex />} /> */}
                <Route path='/electronics' element={<Electronics />} />
                <Route path='/fashion' element={<Fashion />} />
                <Route path='/footware' element={<Footware />} />
                <Route path='/fakestore' element={<FakeStoreApi/>}/>
            </Routes>
        </Router>
    )
}

export default ShoppingIndex