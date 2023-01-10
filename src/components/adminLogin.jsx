import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adminLogin.css';
import AdminNavbar from "./adminNavbar";

const AdminLogin = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate()

    let login = (e) => {
        e.preventDefault();
        let data = { email, password }//data from input
        console.log(data);
        //admin
        if (email === "admin@gmail.com" && password === "1234") {
            navigate('/admin/')
        }
        else {
            alert('invalid credentials');
        }
    }
        return (
           
            <div className="adminLogin">
                 {/* <AdminNavbar/> */}
                <div className="form_container">
                    <h1>Login as Admin</h1>
                    <div className="form_input">
                        <form onSubmit={login}>
                            <div className="admin_login">
                            <div className="email">
                                <div className="email_lable">
                                <label htmlFor="email">Email: </label>  
                                </div>
                                <div className="email_input"> 
                                <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)} placeholder="email address" className="form_control my-4" />
                                </div>
                            </div>
                            <div className="password">
                                <div className="password_lable">
                                <label htmlFor="password">password:</label>
                                </div>
                                <div className="password_input">
                                <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} placeholder="enter password" className="form_control my-5" />
                                </div>
                             </div>
                            <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    export default AdminLogin;