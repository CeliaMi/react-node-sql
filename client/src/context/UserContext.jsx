 import { createContext, useContext, useState } from "react"

export const UserContext = createContext()

const UserProvider = ({children}) =>{

    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(null)

    const loginContext = async (data) => {
        try{
        const res = await handlerLoginUser(loginUser)
        if (res.data.sesiondata.token) {
        setIsAuthenticated(true)
        localStorage.setItem('token', res.data.sesiondata.token)
        localStorage.setItem('role', res.data.sesiondata.user.role)
        setToken(localStorage.getItem('token'))
        setUser(res.data.sesiondata)
        }

    } catch (error) {
        console.log('Login failed.');
    }

    // const storedToken = localStorage.getItem("token")
    // setToken(storedToken)


    return(
        <UserContext.Provider value = {{user, loginContext, isAuthenticated, token}}>
        {children}
        </UserContext.Provider>
    )
}
}

export default UserProvider



export const useUserContext = () => useContext(UserContext)