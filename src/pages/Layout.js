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
                        <Link to='/searchbar'>Create a Search Bar.</Link>
                    </li>
                    <li>
                        <Link to='/dropdown'>Build a Dropdown Menu.</Link>
                    </li>
                    <li>
                        <Link to='/dropdown'>Build a Dropdown Menu.</Link>
                    </li>
                    <li>
                        <Link to='/tabs'>Implement a Tabs Component.</Link>
                    </li>
                    <li>
                        <Link to='/modal'>Create a Modal Component.</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default Layout;