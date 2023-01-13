import {useRef} from "react"

interface Props {
    index: number,
    makeTag: (index:number, body:string) => void,
    pingCursorLocation: (index:number) => void
}

const PromptInput = (props: Props) => {
    const inputRef = useRef<HTMLInputElement|null>(null)

    const handleSubmit = (e: any) => {
        if (e.key == 'Enter') {
            props.makeTag(props.index, inputRef.current!.value)
        }
    }

    const handlePingCursorLocation = () => {
        // handle -1 case
        props.pingCursorLocation(props.index-1)
    }

    return (
        <input 
        ref={inputRef} 
        className="input" 
        onKeyPress={handleSubmit}
        onClick={handlePingCursorLocation}
        />
    )
}

export default PromptInput