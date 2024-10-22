import CardTask from "./components/CardTask";
import BaseButton from "./components/Base/BaseButton";
import CardTaskItem from "./components/CardTaskItem";
import {useMemo, useState} from "react";
import {isEditable} from "@testing-library/user-event/dist/utils";
import Dialog from "./components/Ui/Dialog";

function App() {

    const [boards, setBoards] = useState([
        {
            tasks: [],
            boardName: 'Todo'
        }
    ]);
    const [addBoardDialog, setAddBoardDialog] = useState(false);
    const [boardNameInput, setBoardNameInput] = useState("");
    const [editInfo, setEditInfo] = useState({
        index: null,

    });
    // Function to add a new board
    const addBoard = (newBoardName) => {
        setBoards([...boards, {tasks: [], boardName: newBoardName}]);
    };

    // Function to add a task to a specific board
    const addTaskToBoard = (boardIndex, newTask) => {
        const updatedBoards = boards.map((board, index) => {
            if (index === boardIndex) {
                return {...board, tasks: [...board.tasks, newTask]};
            }
            return board;
        });
        setBoards(updatedBoards);
    };
    const removeTaskOnBoard = (boardIndex, taskIndex) => {
        const updatedBoards = boards.map((board, index) => {
            if (index === boardIndex) {
                return {...board, tasks: board.tasks.filter((_,index)=>{
                    return index !== taskIndex;
                    })};
            }
            return board;
        });
        setBoards(updatedBoards);
    };

    const isEditableMode = useMemo(() => {
        return editInfo.index !== null
    }, [editInfo])
    const submitTaskHandler = (e, val, indexBoard, setInput) => {
        e.preventDefault()

        if (val?.trim()) {
            if (isEditableMode) {
                // const taskCopy = [...tasks]
                // taskCopy[editInfo.index] = val
                // setTasks(taskCopy)
                // setInput('')
                // setEditInfo({
                //     index: null
                // })
            } else {
                addTaskToBoard(indexBoard, val);
                setInput('')
            }

        }
    }
    const editTaskOnBoardHandler = (boardIndex, taskIndex, setInput) => {
        const taskText = boards[boardIndex].tasks[taskIndex];
        setInput(taskText)
        // setEditInfo({index: index})

    }
    const removeTaskOnBoardHandler = (boardIndex, taskIndex) => {
        // if (index === editInfo.index) setEditInfo({index: null})
        // setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index))
    }
    const submitBoardHandler = (e) => {
        e.preventDefault()
        if (boardNameInput.trim()) {
            addBoard(boardNameInput)
            setBoardNameInput('')
            setAddBoardDialog(false)
        }
    }
    return (
        <>
            <main className="p-10">
                <BaseButton
                    className="mb-3
                " type="success" $attrs={{
                    type: 'button',
                    onClick: () => {
                        setAddBoardDialog(true)
                    }
                }}
                >Create Board</BaseButton>
                <div className=" grid gap-3 grid-cols-4">
                    {
                        boards?.length && boards.map((board, indexBoard) => {
                            return <CardTask editable={editInfo.index !== null}
                                             submitTaskHandler={(e, val, setInput) => submitTaskHandler(e, val, indexBoard, setInput)}
                                             title={board.boardName}>
                                {
                                    ({inputText, setInput}) => board?.tasks?.length ?  board.tasks?.map((item, index) => <CardTaskItem
                                        editHandler={() => editTaskOnBoardHandler(indexBoard, index, setInput)}
                                        removeHandler={() => removeTaskOnBoard(indexBoard, index)}
                                        order={index + 1} key={index} title={item}/>) : <div className="w-full h-full flex justify-center items-center text-[#444]">Empty task...</div>
                                }
                            </CardTask>
                        })

                    }


                </div>
            </main>
            {addBoardDialog && <Dialog onClose={() => setAddBoardDialog(false)}>
                <div className="max-w-[80vw] w-[350px] rounded-xl flex justify-center items-center bg-white py-20">
                    <form onSubmit={submitBoardHandler} className="flex flex-col">
                        <input
                            autoFocus
                            value={boardNameInput}
                            onChange={(e) => {

                                setBoardNameInput(e.target.value)
                            }}
                            placeholder="write board name.."
                            type="text" className="w-full bg-[#eee] rounded-[8px] p-2"/>

                        <BaseButton $attrs={{
                            type: 'submit'
                        }} className="mx-auto mt-5 inline-block" type="success">
                            Create Board
                        </BaseButton>
                    </form>
                </div>

            </Dialog>}
        </>
    )
}

export default App;
