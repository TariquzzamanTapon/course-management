import { useContext } from "react"
import { AuthContext } from "../../../AuthProvider/AuthProver"

// save a user to database
export const saveUser = user => {
    const currentUser = {
        name: user.displayName,
        email: user.email,
    }

    fetch(`http://localhost:5000/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    })
        .then(res => res.json())
        .then(data => console.log(data))
}



// get useContext data
export const useAuth = ()=>{
    const auth = useContext(AuthContext);
    return auth;
}