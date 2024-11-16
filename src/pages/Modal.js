import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    if (!isOpen) return null;
    
    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>Close</button>
                {children}
            </div>
        </div>,
        document.body
    );
};

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <>
            <header>
                <Link to='/'>Back</Link>
                <h3>Create a Modal Component.</h3>    
                <small>Create a reusable modal component that can be opened and closed and display any content passed to it.</small>
                <hr />
            </header>
            <div>
                <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <h1>Modal Content</h1>
                    <p>This is the content inside the modal</p>
                </Modal>
            </div>
        </>
    )
};

export default App;