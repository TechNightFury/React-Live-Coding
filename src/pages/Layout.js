import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/counter'>Create a counter.</Link>
                    </li>
                    <li>
                        <Link to='/toggle'>Implement a Toggle Switch.</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default Layout;