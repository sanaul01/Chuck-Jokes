import React, { useEffect, useState } from 'react';
import Joke from '../Joke/Joke';

const Jokes = () => {
    const [jokes, setJokes] = useState([]);
    useEffect(() => {
        fetch("https://api.chucknorris.io/jokes/search?query=all")
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setJokes(data.result))
    }, [])
    return (
        <div className="jokes">
            <h3>Jokes available:{jokes.length} </h3>
            {
                jokes.map(joke => <Joke
                    key={joke.value}
                    joke={joke}
                />)
            }
        </div>
    );
};

export default Jokes;