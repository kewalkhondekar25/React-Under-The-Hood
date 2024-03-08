import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../Context/Context';

const Navbar = () => {

    const nav = ["home", "about", "contact"];
    const {toggle, isDarkMode} = useContext(AppContext);
  return (
    <nav className={`navi ${isDarkMode ? 'dark' : 'light'}`}>
        <ul>
            {
                nav.map(item => {
                    return(
                        <Link to={`/${item}`} key={item}><li >{item}</li></Link>
                    )
                })
            }
        </ul>
        <div>
            <button onClick={toggle}>Mode</button>
        </div>
    </nav>
  )
}

export default Navbar
