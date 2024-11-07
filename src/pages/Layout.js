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
                    <li>
                        <Link to='/todos'>Build a To-Do Lists.</Link>
                    </li>
                    <li>
                        <Link to='/data-fetch'>Fetch data from API.</Link>
                    </li>
                    <li>
                        <Link to='/searchbar'>Create a search Bar.</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default Layout;