 import { createContext, useContext, useState } from "react"

export const UserContext = createContext()

const UserProvider = ({children}) =>{

    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(null)


    // const storedToken = localStorage.getItem("token")
    // setToken(storedToken)


    return(
        <UserContext.Provider value = {{user, setUser, isAuthenticated, setIsAuthenticated}}>
        {children}
        </UserContext.Provider>
    )
}


export default UserProvider



export const useUserContext = () => useContext(UserContext)