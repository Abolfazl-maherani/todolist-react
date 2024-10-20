import {type} from "@testing-library/user-event/dist/type";
import {useState} from "react";


const CardTask = ({title, children, submitTaskHandler}) => {
    const [inputText, setInput] = useState()

    return (
        <>
            <div className="border-[4px] relative h-[500px] rounded-[8px] bg-[#F9F3E5] border-black border-solid">
                <div className="border-b-[4px] px-4 py-4 border-black border-solid">
                    <h4 className="text-[32px] text-center font-bold text-black ">
                        {title}
                    </h4>
                </div>
                <div className="px-4 py-[16px]">
                    {children}
                </div>
                <section className="px-4  absolute bottom-4 w-full ">
                    <div className="">
                        <form className="w-full flex gap-2 " onSubmit={(e) => submitTaskHandler(e, inputText, setInput)}>
                            <input
                                value={inputText}
                                onChange={({target}) => setInput(target.value)} placeholder="Write to do..." type="text"
                                className="grow px-2 rounded-[8px] "/>
                            <button type="submit"
                                    className="text-white bg-green-800 rounded-[8px] py-1 px-3">submit
                            </button>
                        </form>
                    </div>
                </section>
            </div>

        </>
    )
}

export default CardTask;