import { useState,useEffect } from "react";
import '../styles/bookList.css'
import { useNavigate } from "react-router-dom";

const BookList =()=>{
    let [books, setBooks] = useState([]);
    useEffect(()=>{
        let fetchData = async () =>{
            let response = await fetch("http://localhost:4123/books")
            let data = await response.json()
            setBooks(data)
        };
        fetchData();
    },[books])
    let handleDelete = (id,title) =>{
        fetch(`http://localhost:4123/books/${id}`,{
            method:'DELETE'
        })
        alert(`${title} will be deleted permanently` )
        // setBooks(books.filter((x)=> x.id !== id));
        // alert(`${title} has been deleted`)
    }
    // to delete permanently we will use
    let navigate = useNavigate()
    let handleread = (id) =>{
        navigate(`/admin/book-List/${id}`)
    }
    
    return(
        <div className="bookList">
            <h1>Book List:{books.length}</h1>
            <div className="book_section">
               
                {books.map((data)=>(
                    <div className="books">
                    <div className="image">
                        {/* <img src="../data/db.json/thumbnailUrl" alt="" /> */}
                        <img height="200" width="200"  src={data.thumbnailUrl} alt="" />
                        {/* <h3>images:{data.thumbnailUrl}</h3> */}
                        </div>
                    <div className="book_detailes">
                         <h3>{data.title}</h3>
                         <h5>pageCount:{data.pageCount}</h5>
                         <h5>Authors:  {data.authors.toString()}</h5>
                         <h5>categories:{data.categories.toString()}</h5>
                         <button className="Read_book" onClick={ () => handleread(data.id)} >Read More</button>
                        <button className="delete_book" onClick={ () => handleDelete(data.id,data.title)}>Delete</button>
                     </div>
                     </div>
                 ))} 
           </div> 
        </div>
        
    );
}
export default BookList