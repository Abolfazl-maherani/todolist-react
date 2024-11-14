const cardTaskItemStyle = ({order, title, editHandler, removeHandler}) => {
    return (
        <>
            <div
                className="my-2 border-[2px] border-solid p-1 rounded-[8px]  border-black flex items-center gap-4 justify-between">
                <div className="overflow-hidden leading-[1.1] gap-1 inline-flex">
                    <input type="checkbox"/>
                    <span>{order}) </span>
                    <span className="break-all ">{title}</span>
                </div>
                <div className="flex items-center gap-1">
                    <button onClick={editHandler}
                            className="bg-yellow-600 p-1 rounded-[8px] text-[12px] text-white">Edit
                    </button>
                    <button onClick={removeHandler}
                            className="bg-red-900 p-1 rounded-[8px] text-[12px] text-white">Remove
                    </button>
                </div>
            </div>
        </>
    )
}
export default cardTaskItemStyle