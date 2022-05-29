import { createContext, useEffect,useState } from "react";
const ThemeContext=createContext()
export const ThemeProvider=({children}) =>{
    let localTheme=localStorage.getItem('theme');
    const [theme,setTheme] =useState(localTheme);
    useEffect(()=>{
        console.log(theme);
        localStorage.setItem('theme',theme);
    },[theme]);
const values ={
    theme,
        setTheme,
};
return(
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
)


}
export default ThemeContext;