import React, {useState,useEffect} from 'react';
import Book from './Book';
import axios from 'axios';

function Nonfiction() {
    const [books,setBooks] = useState([]);
    const term = 'nonfiction'
    const URL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-${term}.json?api-key=${process.env.REACT_APP_API_KEY}`

    useEffect(()=>{
        const fetchBooks = async () =>{
            const res = await axios.get(URL)
            setBooks(res.data.results.books);
            console.log(res.data.results.books)
        }
        fetchBooks()
    },[])
   
    return (
        <div>
            <h1 className='font-bold text-center sm:text-3xl md:text-4xl lg:text-5xl tracking-wider text-gray-700 py-10'>Hardcover Nonfiction</h1>
            <section>
                {books.map((book,id)=>(<Book book={book} key={id}/>))}
            </section>
        </div>
        )
}

export default Nonfiction
