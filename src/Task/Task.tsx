import React from 'react';
import "./task.css"

interface TaskProps {
    id: string;
    text: string;
    deleteTask: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ id, text, deleteTask }) => {
    return (
        <div>
            <span className="span-text">{text}</span>
            <button className="btnDelete" onClick={() => deleteTask(id)}>Delete</button>
        </div>
    );
};

export default Task;