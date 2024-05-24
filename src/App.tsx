
import React ,{useState}  from 'react';
import AddTaskForm from "./AddTaskForm/AddTaskForm.tsx";

interface Task {
    id: string;
    text: string;
}

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const createText = (newText: Task) => {
        console.log(newText)
        setTasks((prevState) => {
           const tasksCopy = [...prevState];
            tasksCopy.push(newText)
            console.log(tasksCopy)
            return tasksCopy

        } )

    };


    return (
        <div className="app">
            <AddTaskForm onSubmit={createText} />
        </div>
    );
};

export default App;