
import React, {useState} from "react";

const DropdownMenu = ({items}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [btnName, setBtnName] = useState('');
    return (
        <>
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