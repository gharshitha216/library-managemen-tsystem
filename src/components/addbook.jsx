import { useState } from "react";
import {useNavigate} from "react-router-dom"

const Addbook = () =>{
    let [title, setTitle]=useState("")
    let[authors,setAuthors]=useState("")
    let[categories,setCategories]=useState("")
    let[pageCount,setPageCount]=useState("")
    let[shortDescription, setShortdescription]=useState("")
    let[longDescription, setLongdescription]=useState("")
    let[thumbnailUrl,setThumbnailUrl]=useState("")
    let navigate = useNavigate()
    let handleSubmit = (e) =>{
        e.preventDefault();
        //data to be posted
        let bookData = {title,authors,categories,pageCount,shortDescription,longDescription,thumbnailUrl}
        //data posting to server
        fetch(' http://localhost:4123/books',{
            method:'POST',
            headers:{'content-Type':'application/json'},
            body:JSON.stringify(bookData)

        })
         alert('book added succesfully')
         navigate('/admin/book-listS')

    }
    return(
        <div className="add_form">
            <form action="" onSubmit={handleSubmit}>
                <div className="title">
                    <input value={title} onChange={(e) => setTitle(e.target.value)} className="add_title" type="text" required placeholder="catogary of books" />
                </div>
                <div className="authors">
                <input value={authors} onChange={(e) => setAuthors(e.target.value)}  className="add_title" type="text" required placeholder="authors" />
                </div>
                <div className="categories">
                <input value={categories} onChange={(e) => setCategories(e.target.value)}  className="add_categore" type="text" required placeholder="catogary of books" />
                </div>
                <div className="pageCount">
                <input value={pageCount} onChange={(e) => setPageCount(e.target.value)}  className="add_pagecount" type="text" required placeholder="page count" />
                </div>
                <div className="shortdescription">
                <textarea value={shortDescription} onChange={(e) => setShortdescription(e.target.value)} 
                 name="" 
                 id="" cols="30"
                  rows="5"
                  placeholder="shortdescription"></textarea>
                </div>
                <div className="longDescription">
                 <textarea value={longDescription} onChange={(e) => setLongdescription(e.target.value)} 
                 name="" 
                 id="" cols="30"
                  rows="5"
                  placeholder="longdescription"></textarea>
                </div>
                <div className="thumbnailUrl">
                <input value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)}  className="add_input" type="text" required placeholder="catogary of books" />
                </div>
                <button className="add_btu">Add Book</button>
            </form>
        </div>
    );
}
export default Addbook;
