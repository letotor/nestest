import  argon2 from ('argon2')


export  hash = async(password)=>{ 
    return await argon2.hash(password) 

}

export verify = async(password,existingPassword)=>{
    return await argon2.verify(existingPassword,password)
}


