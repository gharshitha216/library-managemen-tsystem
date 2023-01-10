import { Link } from "react-router-dom";
import '../styles/landingpage.css';
const LandingPage = () => {
    return (
        <div className="landingpage">
            <div className="selectLoginType">
                <div className="select">
                    <h1>Libaray Managment System</h1>
                    <div className="login">
                        <div className="admin_Login">
                            <div className="img_alogin">
                                <img height="90" width="90" src="images/admin_image.png" alt="" />
                            </div>
                            <div className="link_alogin">
                                <Link to='/admin-login'><button className="but1">Adimn Login</button></Link>
                            </div>
                        </div>
                        <div className="user_login">
                            <div className="img_userlogin">
                                <img height="90" width="90" src="images/user_image.png" alt="" />
                            </div>
                            <Link to='/User-login'> <button className="but2"> User Login </button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default LandingPage;
