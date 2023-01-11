import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import '../styles/adduser.css';
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
        <div className="user_form">
        <div className="AddUser">
            
            <div className="form_adduser">
            <h1>Add A New User</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="name">
                    {/* <h6>Name</h6> */}
                    {/* <p>Full Name</p> */}
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="name"  placeholder="enter name"/>
                </div>
                <div className="age">
                    {/* <p>Enter Age</p> */}
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
        </div>

    )
}
export default AddUser;