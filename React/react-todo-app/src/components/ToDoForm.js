import React, {useState, useEffect, useRef} from 'react'

function ToDoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    useEffect(()=> {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() *1000000),
            // generates an id randomly between 1 and 1000000... probably not best practice
            text: input
        })


        setInput('')

    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? ( <><input 
            type="text" 
            placeholder="Update your item..." 
            value={input} 
            name="text" 
            className="todo-input edit" 
            onChange={handleChange} 
            ref={inputRef}

            />

            <button className='todo-button edit'>Update</button></>) : 

            <><input 
            type="text" 
            placeholder="add an item" 
            value={input} 
            name="text" 
            className="todo-input" 
            onChange={handleChange} 
            ref={inputRef}

            />

            <button className='todo-button'>Add Item</button>
            </>}
        </form>
    )
}

export default ToDoForm
