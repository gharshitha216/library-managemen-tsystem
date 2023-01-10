import { useNavigate } from "react-router-dom";
import '../styles/userLogin.css'
const UserLogin = () =>{
    let navigate = useNavigate()
    let login =() => {
        navigate('/user/')
    }
    return(
        <div className="userLogin">
        <div className="userform">
            <h1>Login as User</h1>
            <div className="Userform_input ">
                <form onSubmit={login}>
                    <div className="user_Login">
                    <div className="email_user">
                        
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="email" required placeholder="email address" className="form_control my-4" />
                    </div>
                    <div className="user_password">
                        <label htmlFor="password">password</label>
                        <input type="password"  required placeholder="enter password" className="form_control my-5" />
                    </div>
                    <button className="btn">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    )
}
export default UserLogin;