import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadBook = () =>{
    let [book, setBook] = useState([])
    //to get routr parameter
    let params = useParams()
    useEffect(()=>{
        let fetchData = async () =>{
            let response = await fetch(`http://localhost:4123/books/${params.id}`)
            let data = await response.json()
            setBook(data)
        }
        fetchData()
    })
    return(
        <div className="readBook">
            <h1>Read Book</h1>
            <div className="read">
            <h2>{book.title}</h2>
            </div>
            <div className="card_footer">
            <p>{book.shortDescription}</p>
            <p>{book.longDescription}</p>
            </div>
        </div>
    )
}
export default ReadBook;                                