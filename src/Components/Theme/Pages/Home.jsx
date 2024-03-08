import React, { useContext } from 'react'
import { AppContext } from '../Context/Context'

const Home = () => {
  const {isDarkMode} = useContext(AppContext)
  return (
    <div className={`page ${isDarkMode ? 'dark' : 'light'}`}>
        this is home
    </div>
  )
}

export default Home
