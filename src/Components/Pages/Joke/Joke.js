import React from 'react';
import "./Joke.css"

const Joke = (props) => {
    const {value} = props.joke
    return (
        <div className="joke">
            <h3>joke {value}</h3>
        </div>
    );
};

export default Joke;