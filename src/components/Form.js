import React, { useEffect } from 'react';
import {v4 as uuidv4} from "uuid";

const Form = ({ input, setInput, works, setWorks, editWork, setEditWork }) => {

    const updateWork = (title, id, completed) => {
        const newWork = works.map((work) =>
            work.id === id ? {title, id, completed} : work
        );
        setWorks(newWork);
        setEditWork("");
    };
    useEffect(() => {
        if(editWork) {
            setInput(editWork.title);
        } else {
            setInput("")
        }
    }, [setInput, editWork]);

    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editWork){
        setWorks([...works, {id: uuidv4(), title:input, completed:false}]);
        setInput("");
        } else {
            updateWork(input, editWork.id, editWork.completed)
        }
    }
    return (
        <form onSubmit={onFormSubmit}>
            <input 
            type="text" 
            placeholder="Enter a Work..." 
            className="task-input"
            value={input}
            required
            onChange={onInputChange}
            />
            <button className="button-add" type="submit">
                {editWork ? "OK" : "Add"}
            </button>
        </form>
    )
}

export default Form;
