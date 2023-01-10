import AdminNavbar from "./adminNavbar";
import {Routes, Route } from "react-router-dom"
import AdminDashboard from "./adminDashboard";
import BookList from "./bookList";
import UserList from "./userList";
import ReadBook from "./readBook"
import Addbook from "./addbook";
import AddUser from "./addUser";

const AdminPortal =()=>{
    return(
        <div className="adminPortal">
            <AdminNavbar/>
            <Routes>
            <Route path="/" element={<AdminDashboard/>}/>
            <Route path="/book-List" element={<BookList/>}/>
            <Route path="/user-List" element={<UserList/>}/>
            <Route path="/book-List/:id" element={<ReadBook/>}/> 
            <Route path="/add-book" element={<Addbook/>}/>
            <Route path="/add-user" element={<AddUser/>}/>
            </Routes>
        </div>
    )
}
export default AdminPortal;