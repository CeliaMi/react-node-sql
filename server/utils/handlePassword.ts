import bcrypt from 'bcryptjs'


export const encrypt  = async(passwordPlain :string ) =>{
    const hash : string = await bcrypt.hash(passwordPlain, 10)
    return hash
}


export const compare = async(passwordPlain : string, hashPassword : string) => {
     return await bcrypt.compare(passwordPlain, hashPassword)
 }