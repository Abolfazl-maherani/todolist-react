const Dialog = ({children, onClose}) => {
    return (<div
        onClick={
            (e) => {
                if (e.target === e.currentTarget) {
                    if (onClose) onClose()
                }
            }
        }
        className="h-screen w-screen flex justify-center items-center fixed inset-0 bg-[#00000082] z-[999]">
        {children}
    </div>)
}
export default Dialog