import React, { useContext } from 'react'
import ThemeContext from '../content/ThemeContext'

const Header = () => {
    const {theme,setTheme}=useContext(ThemeContext)
  return (
    <div>
        <h1>Active Theme:{theme}</h1>
        <button onClick={()=>setTheme(theme==="light" ? "dark" :"light")}>Change Theme</button>
    </div>
  )
}

export default Header