import {type} from "@testing-library/user-event/dist/type";
import {useState} from "react";


const CardTask = ({title, children, submitTaskHandler, editable}) => {
    const [inputText, setInput] = useState()

    return (
        <>
            <div
                className="border-[4px] grid-cols-1 relative h-[500px] rounded-[8px] bg-[#F9F3E5] border-black border-solid">
                <div className="border-b-[4px] px-4 py-4 border-black border-solid">
                    <h4 className="text-[32px] text-center font-bold text-black ">
                        {title}
                    </h4>
                </div>
                <div className="px-4 h-[calc(100%_-_140px)] capitalize font-medium overflow-y-auto py-[16px]">
                    {children({inputText, setInput})}
                </div>
                <section className="px-4   py-1 w-full ">
                    <div className="">
                        <form className="w-full flex gap-2 "
                              onSubmit={(e) => submitTaskHandler(e, inputText, setInput)}>
                            <input
                                value={inputText}
                                onChange={({target}) => setInput(target.value)} placeholder="Write to do..." type="text"
                                className="grow px-2 rounded-[8px] "/>
                            <button disabled={!inputText?.trim()} type="submit"

                                    className={`text-white bg-green-800 rounded-[8px] py-1 px-3 ${!inputText?.trim()?'opacity-80 cursor-no-drop':''}`}
                                    >
                                {editable ? 'Edit' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </section>
            </div>

        </>
    )
}

export default CardTask;