import React, {useState} from 'react';

const SearchBar = ({items}) => {
    const [query, setQuery] = useState('');
    const filteredItems = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));

    return (
        <>
            <input 
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder='Search...'
            />

            <ul>
                {
                    filteredItems.length ? filteredItems.map((item, index) => (
                        <li keys={index}>
                            {item}
                        </li>
                    )) : <p>No search results</p>
                }
            </ul>
        </>
    )
};

const App = () => {
    const items = ['download', 'react', 'devtools', 'for', 'better', 'development', 'experience'];

    return <SearchBar items = {items} />
};

export default App;