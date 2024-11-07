import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const SearchBar = ({items}) => {
    const [query, setQuery] = useState('');
    const filteredItems = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));

    return (
        <>
            <header>
                <Link to='/'>Back</Link>
                <h3>Create a Search Bar</h3>
                <small>Create a search bar component that filters a list of items as the user types</small>
            </header>
            <hr />
            <main>
                <input 
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder='Search...'
                />

                <ul>
                    {
                        filteredItems.length ? filteredItems.map((item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        )) : <p>No search results</p>
                    }
                </ul>
            </main>
        </>
    )
};

const App = () => {
    const items = ['download', 'react', 'devtools', 'for', 'better', 'development', 'experience'];

    return <SearchBar items = {items} />
};

export default App;