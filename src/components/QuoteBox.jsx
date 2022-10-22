import React, { useState } from 'react';
import quotes from '../quotes.json';

const QuoteBox = ({index}) => {

  return (
    <div className='quoteBox'>
      <div className='text'>
        <i className="fa-sharp fa-solid fa-quote-left"></i>
        <p>{quotes[index].quote}</p>
      </div>
      <div className='author'>
        <h1>{quotes[index].author}</h1>

      </div>
    </div>
  );
};

export default QuoteBox;


