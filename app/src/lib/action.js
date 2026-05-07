import { revalidatePath } from "next/cache"

export const createUser = async (formData) => {
    "use server"

    const newUser = Object.fromEntries(formData.entries())
    console.log(newUser)
    
    const res = await fetch(`http://localhost:5000/user`,{
        method: "POST",
        headers: {
            
        }
    })
    const data = await res.json()

    if(data.deletedCount > 0){
        revalidatePath('/user')
    }

    console.log(data)
}

export const deleteUser = async (id) => {
    "use server"
    
    const res = await fetch(`http://localhost:5000/user/${id}`,{
        method: "DELETE"
    })
    const data = await res.json()

    if(data.deletedCount > 0){
        revalidatePath('/user')
    }

    console.log(data)
}