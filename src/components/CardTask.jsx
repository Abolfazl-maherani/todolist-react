import {useState} from "react";


const CardTask = ({title, children, submitTaskHandler, editable}) => {
    const [inputText, setInput] = useState()

    return (<>
        <div
            className="border-[4px] flex flex-col relative h-[500px] rounded-[8px] bg-[#F9F3E5] border-black border-solid">
            <div className="border-b-[4px] px-4 py-4 border-black border-solid">
                <h4 className="text-[32px] truncate text-center font-bold text-black ">
                    {title}
                </h4>
            </div>
            <div className="px-4  flex-grow capitalize font-medium overflow-y-auto py-[16px]">

                {children({inputText, setInput})}
            </div>
        </div>

    </>)
}

export default CardTask;