import React, { useContext } from 'react'
import { AppContext } from '../Context/Context'

const About = () => {
  const {isDarkMode} = useContext(AppContext)

  return (
    <div className={`page ${isDarkMode ? 'dark' : 'light'}`}>About</div>
  )
}

export default About