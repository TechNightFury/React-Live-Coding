import React, { useState } from "react";
import { Link } from "react-router-dom";

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);
    
    return (
        <>
            <Link to='/'>Back</Link>
            
            <h3>Implement a Toggle Switch</h3>
            <small>Create a toggle switch between 'On' and 'Off' states.</small>
            <hr />

            <button onClick={() => setIsOn(!isOn)}>
                { isOn ? 'On' : 'Off' }
            </button>
        </>
    )
};

export default Toggle;