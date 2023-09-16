import React from 'react';
import BookCard from '../component/BookCard';
import NavBar from '../component/NavBar';
import { BookList } from '../DbFile/BookList';
const HomePage = () => {

    return (<>
        <NavBar />
        <div className="BookCardBody">
            {
                BookList.map((item,index) => (

                    <BookCard key={index + "book"} BookId={item.BookId} BookImgSrc={item.BookImgSrc} BookName={item.BookName} BookPrice={item.BookPrice} BookPriceDisCount={item.BookPriceDisCount} BookPublisher={item.BookPublisher} />
                    ))
            }
        </div>

    </>)
}

export default HomePage;