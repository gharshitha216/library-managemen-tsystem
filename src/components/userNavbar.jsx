import {Link} from "react-router-dom";
const UserNavbar = () =>{
    return(
        <div className="adminNavbar">
        <div className="navbar">
            <h1>User Portal</h1>
        </div>
        <div className="nav_links">
            <ul>
                <li><Link to="/user/">Dashboard</Link></li>
                <li><Link to="/user/book-List">Book List</Link></li>
                <li><Link to="/"><button> Logout </button></Link></li>
            </ul>
        </div>
    </div>
    );
}
export default UserNavbar;