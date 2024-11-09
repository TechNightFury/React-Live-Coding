
import React, {useState} from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({items}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [btnName, setBtnName] = useState('');
    
    return (
        <>
            <Link to='/'>Back</Link>
            <header>
                <h3>Build a Dropdown Menu</h3>
                <small>Create a dropdown menu component that displays a list of items when clicked.</small>
            </header>

            <button onClick={() => setIsOpen(!isOpen)}>{!btnName ? 'Dropdown Menu' : btnName}</button>
            {
                isOpen &&
                <div>
                    <ul>
                        {
                            items.map((item, index) => (
                                <li key={index} onClick={() => {
                                    setIsOpen(false);
                                    setBtnName(item);
                                }}>
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                </div> 
            }
        </>
    ) 
};

const App = () => {
    const items = ['', 'Apple', 'Pear', 'Melon', 'Cherry', 'Mango', 'Grape'];
    
    return <DropdownMenu items = {items} />
};

export default App;