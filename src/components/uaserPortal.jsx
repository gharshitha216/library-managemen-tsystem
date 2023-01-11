import { Routes,Route } from "react-router-dom"
import UserDashboard from "./userDashboard";
import UserNavbar from "./userNavbar";
import BookList from "./bookList";
import ReadBook from "./readBook";
const UserPortal = () =>{
    return(
        <div className="userportal">
            <UserNavbar/>
            <Routes>
                <Route path="/" element={<UserDashboard/>}/>
                <Route path="/book-List" element={<BookList/>}/>
                <Route path="/book-List/:id" element={<ReadBook/>}/> 
            </Routes>

        </div>
    )
}
export default UserPortal;