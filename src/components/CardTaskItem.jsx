const cardTaskItemStyle = ({order, title}) => {
    return (
        <>
            <div className="my-2 flex justify-between">
                <div>
                <span>{order}) </span>
                <span>{title}</span>
                </div>
                    <div className="flex items-center gap-1">
                        <button className="bg-yellow-600 p-1 rounded-[8px] text-[12px] text-white">Edit</button>
                        <button className="bg-red-900 p-1 rounded-[8px] text-[12px] text-white">Remove</button>
                    </div>
            </div>
        </>
    )
}
export default cardTaskItemStyle