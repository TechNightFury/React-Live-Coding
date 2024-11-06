import React, { useState } from "react";
import { Link } from "react-router-dom";

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    const addTodo = () => {
        if (text) {
            setTodos([
                ...todos,
                {
                    text,
                    completed: false
                }
            ]);
            setText('');
        }
    }

    const toggleTodo = index => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    }

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <>
            <header>
                <Link to='/'>Back</Link>
                <h3>Build a To-Do list.</h3>
                <small>Create a to-do list commponent where users can add, remove, and mark items as complete.</small>
            </header>
            <hr />
            <main>
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button onClick={addTodo}>ADD</button>
                <ul>
                {
                    todos.map((todo, index) => (
                        <li key={index} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                            {todo.text}
                            <button onClick={() => toggleTodo(index)}>Toggle</button>
                            <button onClick={() => removeTodo(index)}>Remove</button>
                        </li>
                    ))
                }
                </ul>
            </main>
        </>
    )
};

export default Todos;