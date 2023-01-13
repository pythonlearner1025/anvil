import {useRef} from "react"

import {useEffect} from "react"

interface Props {
    index: number,
    makeTag: (index:number, body:string) => void,
}

const PromptInput = (props: Props) => {
    const inputRef = useRef<HTMLInputElement|null>(null)

    const handleSubmit = (e: any) => {
        if (e.key == 'Enter') {
            props.makeTag(props.index, inputRef.current!.value)
        }
    }

    return (
        <input 
        ref={inputRef} 
        className="input" 
        onKeyPress={handleSubmit}
        />
    )
}

export default PromptInput