
import React, {ChangeEvent, useState} from "react";
import {Text} from "../Types.ts";
import "./AddTaskForm.css";

interface AddTaskFormProps {
    onSubmit: (task:Text) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onSubmit }) => {
    const [taskText, setTaskText] = useState({
        text:'',
    });

    const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value

        setTaskText((prevState) => {
            return {
                ...prevState,
                text:value
            }
        } )
    }

    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

       const text:Text = {
            ...taskText,
           id:Math.random().toString(),
       }
       onSubmit(text)
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                type="text"
                onChange={onTextChange}
            />
            <button type="submit" className="btnAdd">Add</button>
        </form>
    );
};
export default AddTaskForm;