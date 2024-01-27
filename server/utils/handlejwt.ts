import jwt from 'jsonwebtoken'
import { JWT_SECRET } from './config'


export const tokenSign = async (user : any) =>{
    const sign = jwt.sign(
        {
            id: user.id,
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn: "2h",
        }
    )
    return sign

}

export const verifyToken = async (tokenJwt: any) =>{
    try{
    return jwt.verify(tokenJwt, JWT_SECRET)
    }catch(error){
        return null
    }
    
}
