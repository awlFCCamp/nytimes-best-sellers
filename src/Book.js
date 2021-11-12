import React from 'react'
import {Link } from 'react-router-dom'

function Book({book}) {
    const {rank,title,author,description,book_image,weeks_on_list,buy_links} = book
    return (
        <div className='flex mx-8 px-5 mb-2 border-b-2 border-gray-200 py-4'>
            <div className='flex w-2/12 text-8xl justify-end items-end text-gray-400 mr-8'>{rank}</div>
            <div className='flex flex-col w-6/12 text-left justify-end'>
                <p>{weeks_on_list===1?'NEW THIS WEEK':`${weeks_on_list} WEEKS ON THE LIST`}</p>
                <h3 className='font-bold text-xl'>{title}</h3>
                <p>By {author}</p>
                <p>{description}</p>
                <div className="dropdown inline-block relative">
                    <button className="bg-indigo-900 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span clasNames="mr-1">Buying Options</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                    </button>
                    <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li className=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href={`${buy_links[0].url}`}>Amazon</a></li>
                        <li className=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href={`${buy_links[1].url}`}>Apple Books</a></li>
                        <li className=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href={`${buy_links[2].url}`}>Barnes and Noble</a></li>
                    </ul>
                </div>
            </div>
            <div className='flex w-4/12'>
                <img src={book_image} alt={title} className='block w-48 h-56'/>
            </div>
        </div>
    )
}

export default Book
