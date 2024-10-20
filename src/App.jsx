import CardTask from "./components/CardTask";
import CardTaskItem from "./components/CardTaskItem";
import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([]);

    const submitTaskHandler = (e, val, setInput) => {
        e.preventDefault()
        if (val?.trim()) {
            setTasks((prevTasks) => [...prevTasks, val]);
            setInput('')
        }
    }


    return (
        <div className="p-10 grid grid-cols-4">
            <CardTask submitTaskHandler={submitTaskHandler} title="Things to do">
                {tasks?.map((item, index) => <CardTaskItem order={index + 1} key={index} title={item}/>)}
            </CardTask>
        </div>
    )
}

export default App;
