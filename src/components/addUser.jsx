import { useState } from "react";
import {useNavigate} from 'react-router-dom';
const AddUser = () =>{
    let [name, setName]= useState("")
    let [age, setAge]=useState("")
    let [email,setEmail]=useState("")
    let [phoneNumber, setPhone]=useState("")
   let navigate = useNavigate()
    let handleSubmit = (e) =>{
        e.preventDefault();
        let adduserData={name,age,email,phoneNumber}
        fetch('http://localhost:4123/Users',{
            method:'POST',
            headers:{'content-Type':'application/json'},
            body:JSON.stringify(adduserData)

        })
        alert('add user ')
        navigate('/admin/add-user')
    }
    return(
        <div className="AddUser">
            <h1>Add A New User</h1>
            <div className="form_adduser">
            <form action="" onSubmit={handleSubmit}>
                <div className="name">
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="name"  placeholder="enter name"/>
                </div>
                <div className="age">
                    <input type="text" value={age} onChange={(e)=> setAge(e.target.value)} min='1'  placeholder=" enter age" />
                </div>
                <div className="email">
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}  placeholder="email address" />
                </div>
                <div className="phone">
                    <input type="tel" minLength='10' maxLength='10'  value={phoneNumber} onChange={(e)=> setPhone(e.target.value)} placeholder="enter phone number" />
                </div>
                <button className="addUser">Add user</button>

            </form>
            </div>
        </div>

    )
}
export default AddUser;