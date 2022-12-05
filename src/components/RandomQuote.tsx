import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';


const RandomQuote = () => {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  // http://api.quotable.io/random

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);  
          setAuthor(quote.author);
        }
      )
  },[]);

  let fetchNewQuote = () => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);  
          setAuthor(quote.author);
        }
      )
  }
    return (
      <div>
        <div>
          <h3>{quote}</h3>
          <small>{author}</small>
        </div>
          <div>
            <Link to="/quote">
              <button>Back to Quotes</button>
            </Link>
          </div>
          <div>
              <button className="btn" onClick={fetchNewQuote}>Generate new Quote</button>
          </div>
        </div> 
    )
}

export default RandomQuote