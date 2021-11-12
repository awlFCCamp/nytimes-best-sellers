import React, {useState,useEffect} from 'react';
import axios from 'axios';

const useBooks = (term) =>{
    const [books,setBooks] = useState([]);
    const URL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-${term}.json?api-key=${process.env.REACT_APP_API_KEY}`
    const fetchBooks = async () =>{
        const res = await axios.get(URL)
        setBooks(res.data.results.books);
        
    }

    useEffect(()=>{
        
        fetchBooks()
    },[term])
    return {books}
}

export default useBooks