import React from 'react'

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

const RandomQuote = () => {

  const [quote, setQuote] = useState({ text: '', author: '' })

  function fetchNewQuote() {
    fetch("https://type.fit/api/quotes")
      .then(res => res.json())
      .then(
        (response) => {
          const randomNumber: number = Math.floor(Math.random() * response.length);
          setQuote(response[randomNumber]);
        }
      )
  }

  useEffect(() => {
    fetchNewQuote();
  }, []);


  return (
    <div className='container-random-quote'>
      <div className='quote-box'>
        <h3 className='quote'>{quote.text}</h3>
        <small className='author'>{quote.author}</small>
      </div>
    <div className='cta-btn-box'>
      <div>
        <Link to="/quote">
          <button className='btn'>Back to Quotes</button>
        </Link>
      </div>
      <div>
        <button className="btn" onClick={fetchNewQuote}>Generate new Quote</button>
      </div>
    </div>
</div>
  )

}

export default RandomQuote

