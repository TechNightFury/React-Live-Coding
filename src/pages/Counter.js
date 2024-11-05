import React, { useState } from "react";
import { Link } from "react-router-dom";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <header>
                <Link to='/'>Back</Link>
                <h3>Create a counter component.</h3>
                <small>Create a simple counter component that increase or decrease the count when clicking buttons.</small>
            </header>
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increase</button>
                <button onClick={() => setCount(count - 1)}>Decrease</button>
            </div>        
        </>
    )
};

export default Counter;