import {useRef, useEffect} from "react"
import ContentEditable from "react-contenteditable"
import "./colors.css"

interface Props {
    index: number,
    makeTag: (index:number, body:string) => void,
}

const PromptInput = (props: Props) => {
    const innerHTMLRef = useRef<HTMLDivElement|null>(null)

    useEffect((() => {
        innerHTMLRef.current!.style.minWidth = '10px'
        innerHTMLRef.current!.style.maxWidth = '100%'
        innerHTMLRef.current!.style.minHeight = '20px'
        innerHTMLRef.current!.style.maxHeight = '100%'
        innerHTMLRef.current!.style.backgroundColor = 'rgb(26,26,32)'
        innerHTMLRef.current!.style.display = 'inline-block'
        innerHTMLRef.current!.style.marginLeft = '10px'
        innerHTMLRef.current!.style.outline = '0px solid transparent'
        innerHTMLRef.current!.focus()
    }), [])

    const handleSubmit = (e: any) => {
        if (e.key == 'Enter') {
            props.makeTag(props.index, innerHTMLRef.current!.innerText)
        }
    }

    const handleFocus = () => {innerHTMLRef.current!.focus()}

    const handleInnerHTMLChange = () => {}
    
    return (
        <ContentEditable
            innerRef={innerHTMLRef}
            html={"<div></div>"}
            disabled={false}
            onChange={handleInnerHTMLChange}
            onKeyDown={handleSubmit}
            onFocus={handleFocus}
        />
    )
}

export default PromptInput