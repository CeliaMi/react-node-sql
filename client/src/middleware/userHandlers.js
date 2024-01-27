import { login, register } from "../services/UserService";



export const handlerLoginUser = async ( loginuser ) =>{


    const res = await login(loginuser)
        return res  
    
    // const token = res.headers.authorization;
    // console.log('Token:', token)
    // user = { res, token}
    // return user;
}

export const handlerRegisterUser = async ( newUser ) =>{
    const res = await register(newUser)
    return res;
}

