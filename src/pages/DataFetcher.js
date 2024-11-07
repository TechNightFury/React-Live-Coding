import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const DataFetcher = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log('loading...');
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
                setLoading(true);
            });
    }, []);

    return (
        <>
            <Link to='/'>Back</Link>
            <header>
                <h3>Fetch Data from an API</h3>
                <small>Create a component fetching data from an API and displaying it in a list.</small>
            </header>
            <main>
                <p>{ loading ? 'Received!' : 'Loading...' }</p>
                <ul>
                {
                    data.map((item, index) => (
                        <li key={index}>
                            {item.title}
                        </li>
                    ))
                }
                </ul>
            </main>
        </>
    )
};

export default DataFetcher;