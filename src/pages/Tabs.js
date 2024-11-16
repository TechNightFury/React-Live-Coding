import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Tabs = ({ tabs }) => {
    const [ activeTab, setActiveTab ] = useState(0);

    return (
        <>
            <div>
                {
                    tabs.map((tab, index) => (
                        <button key={index} className={index === activeTab ? 'active' : ''} onClick={() => setActiveTab(index)}>{tab.label}</button>
                    ))
                }
            </div>
            <div>{tabs[activeTab].content}</div>
        </>
    )
};

const App = () => {
    const tabs = [
        { label: 'title1', content: <h1>title1</h1> },
        { label: 'title2', content: <h2>title2</h2> },
        { label: 'title3', content: <h3>title3</h3> }
    ];

    return (
        <>
            <header>
                <Link to='/'>Back</Link>
                <h3>
                    Implement a Tabs Component
                </h3>
                <small>Create a tabs component where each tab displays different content when selected.</small>
            </header>
            <main>
                <Tabs tabs={tabs} />
            </main>
        </>
    )
};

export default App;