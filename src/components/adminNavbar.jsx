import { Link } from "react-router-dom"
import '../styles/adminNavbar.css';
const AdminNavbar=()=>{
    return(
        <div className="adminNavbar">
            <div className="navbar">
                <h1>Admin Portal</h1>
            </div>
            <div className="nav_links">
                <ul>
                    <li><Link to="/admin/">Dashboard</Link></li>
                    <li>
                        <Link to="/admin/add-book">Add Books</Link>
                    </li>
                    <li>
                        <Link to="add-user">Add User</Link>
                    </li>
                    <li>
                        <Link to="/admin/book-List">Book List</Link>
                    </li>
                    <li>
                        <Link to="/admin/user-List">User List</Link>
                    </li>
                    <li>
                        <Link to="/"><button> Logout </button></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default AdminNavbar