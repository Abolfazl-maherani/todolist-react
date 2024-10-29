import {useState} from "react";


const CardTask = ({title, children, submitTaskHandler, editable}) => {
    const [bgColor, setBgColor] = useState('#FFF8DC')
    const [inputText, setInput] = useState()

    return (<>
        <div
            className="border-[4px] flex flex-col relative h-[500px] rounded-[8px]  border-black border-solid"
            style={{
                backgroundColor: bgColor
            }}
        >
            <div className="border-b-[4px] px-4 py-4 border-black border-solid">

                <h4 className="text-[32px] capitalize truncate text-center font-bold text-black ">
                    {title}
                </h4>
                <div className="flex justify-center">
                    <div className="rounded-[8px]  gap-1 bg-[#16181ff0] inline-flex p-2">
                        {['#FFF8DC', '#FAFAD2', '#F5F5DC', '#FFFACD', '#F0E68C', '#E6E6FA', '#F5FFFA'].map(item =>
                            <button
                                onClick={()=>setBgColor(item)}
                                className="inline-block  transition-all w-[15px] h-[15px] rounded-[4px]" style={{
                                backgroundColor: item,

                                transform:`scale(${item === bgColor ? '1': '.8'})`,
                            }}></button>)}
                    </div>
                </div>
            </div>
            <div className="px-4  flex-grow capitalize font-medium overflow-y-auto py-[16px]">

                {children({inputText, setInput})}
            </div>
        </div>

    </>)
}

export default CardTask;