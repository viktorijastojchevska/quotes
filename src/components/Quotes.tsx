import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MyTable } from "./MyTable";
import { UUID } from 'uuid-generator-ts';
import RandomQuote from './RandomQuote';


const Quotes = () => {
    const [rows, setRows] = useState<Quote[]>([])

    interface Quote {
        id: number;
        author: string;
        text: string;
        age: number;
    }

    useEffect(() => {
        fetch('https://type.fit/api/quotes')
            .then((res) => res.json())
            .then((response) => {
                const randomNumber: number = Math.floor (Math.random() * (response.length - 11));
                return Promise.all(response.filter((r:any) => r.author !== null).slice(randomNumber, randomNumber + 10).map((quote: any) => {
                    return fetch(`https://api.agify.io/?name=${quote.author.split(' ')[0]}`)
                        .then((res) => {
                            if (!res.ok) {
                                // 429 - rate limits
                                const temp: Quote = {
                                    id: 1,
                                    author: 'name',
                                    text: 'name',
                                    age: 1
                                };
                                return temp;
                            }
                            return res.json()
                        })
                        .then((response) => {
                            quote.age = response.age;
                            quote.id = new UUID().getDashFreeUUID();
                            return quote
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }));
            })
            .then(quotes => setRows(quotes))
            .catch((error) => {
                console.log(error);
            })
    }, []);

    

return (
        <div>
            <div>
                <MyTable rows={rows} />
            </div>
            <div>
                <Link to="/random-quote">
                    <button onClick={RandomQuote}>Generate Random Quote</button>
                </Link>
            </div>
        </div>
    )

}


export default Quotes
  
 
  