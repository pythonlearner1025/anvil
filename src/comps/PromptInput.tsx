import {useRef, useEffect} from "react"
import ContentEditable from "../utils/ContentEditable"
import "./colors.css"

interface Props {
    index: number,
    makeTag: (index:number, body:string) => void,
    delete: (index:number) => void,
    handleFocus: (index:number) => void
}

const PromptInput = (props: Props) => {
    const innerHTMLRef = useRef<HTMLDivElement|null>(null)

    useEffect((() => {
        innerHTMLRef.current!.innerText = ''
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
     
        switch (e.key) {
            case 'Enter': {
                props.makeTag(props.index, innerHTMLRef.current!.innerText)
                innerHTMLRef.current!.innerText = ''
                break;
            }
            case 'Backspace': {
                if (innerHTMLRef.current!.innerText != '') break;
                props.delete(props.index)
                break;
            }
        }
    }

    const handleFocus = () => {
        innerHTMLRef.current!.focus()
        props.handleFocus(props.index)
    }

    const handleInnerHTMLChange = () => {
        var match = /\r|\n/.exec(innerHTMLRef.current!.innerText)
        if (match) {
            innerHTMLRef.current!.innerText = ''
        }
    }
    
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