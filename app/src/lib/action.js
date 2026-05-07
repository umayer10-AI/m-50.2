import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const createUser = async (formData) => {
    "use server"

    const newUser = Object.fromEntries(formData.entries())
    console.log(newUser)
    
    const res = await fetch(`http://localhost:5000/user`,{
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(newUser)
    })
    const data = await res.json()

    if(data.insertedId){
        revalidatePath('/user')
    }

    console.log(data)
}

export const updateUser = async (id,formData) => {
    "use server"

    const newUser = Object.fromEntries(formData.entries())
    console.log(newUser)
    
    const res = await fetch(`http://localhost:5000/user/${id}`,{
        method: "PATCH",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(newUser)
    })
    const data = await res.json()

    if(data.modifiedCount > 0){
        revalidatePath('/user')
        redirect("/user")
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