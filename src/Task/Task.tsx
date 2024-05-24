import React from 'react';

interface TaskProps {
    id: string;
    text: string;
    deleteTask: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ id, text, deleteTask }) => {
    return (
        <div>
            <span>{text}</span>
            <button onClick={() => deleteTask(id)}>Delete</button>
        </div>
    );
};

export default Task;