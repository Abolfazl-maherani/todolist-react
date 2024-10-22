import {useMemo} from "react";
import {generateObjClassToStr} from "../../utils/basic";

const BaseButton = ({children, type, $attrs, className = ""}) => {
    const generateClass = useMemo(() => {
        return generateObjClassToStr({
            'bg-green-800': type === 'success', 'bg-red-800': type === 'error', 'bg-yellow-800': type === 'warning',
        })


    }, [type])
    return (<button
            {...$attrs}
            className={`
                text-white
            rounded-[8px] px-4 py-1
            ${generateClass}
            ${className}`}

        >
            {children}

        </button>)
}
export default BaseButton