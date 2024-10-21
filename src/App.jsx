import CardTask from "./components/CardTask";
import CardTaskItem from "./components/CardTaskItem";
import {useMemo, useState} from "react";
import {isEditable} from "@testing-library/user-event/dist/utils";

function App() {
    const [tasks, setTasks] = useState([]);
    const [editInfo, setEditInfo] = useState({
        index: null,

    });
    const isEditableMode = useMemo(() => {
        return editInfo.index !== null
    }, [editInfo])
    const submitTaskHandler = (e, val, setInput) => {
        e.preventDefault()

        if (val?.trim()) {
            if (isEditableMode) {
                const taskCopy = [...tasks]
                taskCopy[editInfo.index] = val
                setTasks(taskCopy)
                setInput('')
                setEditInfo({
                    index: null
                })
            } else {
                setTasks((prevTasks) => [...prevTasks, val]);
                setInput('')
            }

        }
    }
    const editHandler = (index, setInput) => {
        const taskText = tasks[index];
        setInput(taskText)
        setEditInfo({index: index})

    }
    const removeHandler = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index))
    }

    return (
        <div className="p-10 grid grid-cols-4">
            <CardTask editable={editInfo.index !== null} submitTaskHandler={submitTaskHandler} title="Things to do">
                {
                    ({inputText, setInput}) => tasks?.map((item, index) => <CardTaskItem
                        editHandler={() => editHandler(index, setInput)}
                        removeHandler={() => removeHandler(index)}
                        order={index + 1} key={index} title={item}/>)


                }
            </CardTask>
        </div>
    )
}

export default App;
