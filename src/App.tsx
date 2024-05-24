
import React ,{useState}  from 'react';
import AddTaskForm from "./AddTaskForm/AddTaskForm.tsx";
import Task from "./Task/Task.tsx";

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
            return tasksCopy
        } )
    };

    const deleteTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id));
    };


    return (
        <>
            <div className="app">
                <AddTaskForm onSubmit={createText}/>

                <div>
                    {tasks.map(task => (
                        <Task key={task.id} id={task.id} text={task.text} deleteTask={deleteTask} />
                    ))}
                </div>
            </div>


        </>

    );
};
export default App;