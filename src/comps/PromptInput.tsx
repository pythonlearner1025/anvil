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
        innerHTMLRef.current!.style.minWidth = '30px'
        innerHTMLRef.current!.style.maxWidth = '100%'
        innerHTMLRef.current!.style.minHeight = '20px'
        innerHTMLRef.current!.style.backgroundColor = 'rgb(10,10,10)'
        innerHTMLRef.current!.style.marginLeft = '10px'
        innerHTMLRef.current!.style.marginBottom = '5px'
        innerHTMLRef.current!.style.outline = '0px solid transparent'
        innerHTMLRef.current!.style.borderRadius = '15px'
        innerHTMLRef.current!.style.padding = '5px'
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