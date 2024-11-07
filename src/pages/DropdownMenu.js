
import React, {useState} from "react";

const DropdownMenu = ({items}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)}>Dropdown Menu</button>
            {
                isOpen && 
                <ul>
                    {
                        items.map((item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        ))
                    }
                </ul>
            }
        </>
    ) 
};

const App = () => {
    const items = ['Apple', 'Pear', 'Melon', 'Cherry', 'Mango', 'Grape'];
    
    return <DropdownMenu items = {items} />
};

export default App;