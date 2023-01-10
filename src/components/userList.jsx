import userEvent from "@testing-library/user-event"
import { useEffect, useState } from "react"
import '../styles/userList.css'

const UserList =()=>{
    let [user, setUser] = useState([])
    useEffect( () =>{
        let fetchData= async ()=>{
            let response = await fetch(" http://localhost:4123/Users")
            let data = await response.json()
            setUser(data)
        }
        fetchData()
    },[])
    let handleDelete = (id,name) =>{
    setUser(user.filter( (x) => x.id !== id))
    alert(`${name} has been deleted`)
}

    return(
        <div className="userList">
            <h1>User List : {user.length}</h1>
            <div className="user_section">
                {user.map((data)=>(
                <div className="user">
                <h2>{data.name}</h2>
                <h3>Age: {data.age}</h3>
                <h3>Email: {data.email}</h3>
                <h3>PhoneNumber: {data.phoneNumber}</h3>
                <button onClick={ () => handleDelete(data.id,data.name)}>Delete</button>
                </div>
                ))}
            </div>
        </div>
    )
}
export default UserList