import { createContext, useState } from "react";

const BlogContext = createContext()

const BlogContextProvider = ({children}) => {
    const [theme, setTheme] = useState('light')
    const changeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return(
        <BlogContext.Provider value={{theme, changeTheme}}>
        {children}
        </BlogContext.Provider>
    )
}


export {BlogContext, BlogContextProvider};