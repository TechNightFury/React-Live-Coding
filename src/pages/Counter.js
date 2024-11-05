import React, { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <header>
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