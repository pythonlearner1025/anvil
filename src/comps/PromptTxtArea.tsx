import {useRef, useState, useEffect} from 'react';
import PromptTag from "./PromptTag"
import PromptInput from "./PromptInput"
import PromptPadding from "./PromptPadding"
import {PromptObject, BufferObject, PromptBuffer}  from "../types/PromptUITypes"
import ContentEditable from "react-contenteditable"
import "./PromptUI.css"
import "./colors.css"

interface Props {
    promptObject: PromptObject | null,
    promptBuffer: PromptBuffer | null
}


const makeBufferObj = (type: 'RawPrompt' | 'PromptObject' | 'PromptInput' | 'PromptPadding', body?: string, assetPath?: string): BufferObject => {
    if (type !== 'PromptInput' && type !== 'PromptPadding')
    return {
        type: type,
        tag: {
            type: type,
            body: body!,
            assetPath: assetPath
            }
    }
    else if (type === 'PromptInput')
    return {
        type: 'PromptInput',
        tag: null
    }
    else return {
        type: 'PromptPadding',
        tag: null
    }
}

const PromptTxtArea = (props: Props) => {
    const [buffer, setBuffer] = useState<Array<BufferObject>>([])
    const [rows, setRows] = useState<Array<number>>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const innerHTMLRef = useRef<HTMLDivElement|null>(null)
    const bufferRef = useRef<HTMLDivElement|null>(null)
    const containerRef = useRef<HTMLDivElement|null>(null)


    useEffect((()=> {
        innerHTMLRef.current!.style.minWidth = '30px'
        innerHTMLRef.current!.style.maxWidth = '100%'
        innerHTMLRef.current!.style.height = '20px'
        innerHTMLRef.current!.style.backgroundColor = '#383B53'
        innerHTMLRef.current!.style.outline = '0px solid transparent'
        innerHTMLRef.current!.style.borderRadius = '15px'
        innerHTMLRef.current!.style.padding = '5px'
        innerHTMLRef.current!.style.marginBottom = '5px'
        innerHTMLRef.current!.style.marginLeft = '5px'
        innerHTMLRef.current!.focus()
    }), [])

    useEffect((()=> {
        //setRows(getRows(bufferRef.current!.children))
    }), [buffer])
    
    /*
    const getRows = (divs: HTMLCollection): Array<number> => {
        const rows = []
        const containerWidth = containerRef.current!.offsetWidth
        const padding = 5
        const rowWidth = containerWidth - padding*2
        var width = 0;
        for (let i=0; i<divs.length; i++) {
            const div:any = divs[i]
            const divWidth = div.offsetWidth
            width+=divWidth
            rows.push(Math.floor(width / rowWidth))
        }
        return rows 
    }
    */

    const insertToBuffer = (obj: BufferObject, idx: number, padding=true, del=0):Array<BufferObject> => {
        const currentBuffer = buffer;
        currentBuffer.splice(idx, del, obj)
        if (padding) currentBuffer.splice(idx, 0, makeBufferObj('PromptPadding'))
        const newBuffer: Array<BufferObject> = []
        currentBuffer.forEach(e => newBuffer.push(e))
        setCurrentIndex(currentIndex + 2)
        return newBuffer
    }

    // insert selected PromptObject to cursor location
    useEffect((()=> {
        if (props.promptObject == null) return
        const bufferObj: BufferObject = makeBufferObj("PromptObject",props.promptObject.name, props.promptObject.assetPath)
        var del = 0
        if (currentIndex < buffer.length && buffer[currentIndex].type == 'PromptInput') del = 1
        const newBuffer = insertToBuffer(bufferObj, currentIndex, true, del)
        setBuffer(newBuffer)
    }), [props.promptObject])

    useEffect((()=> {
        if (props.promptBuffer == null) return
        setBuffer(props.promptBuffer.buffer)
    }), [props.promptBuffer])

    // make and insert rawprompt to buffer
    const handleMakeTag = (index: number, body: string) => {
        const bufferObj: BufferObject = makeBufferObj("RawPrompt", body)
        const newBuffer = insertToBuffer(bufferObj, index, true, 1)
        setBuffer(newBuffer)
    }

    const handleInsertInput = (index: number) => {
        const bufferObj: BufferObject = makeBufferObj('PromptInput')
        const newBuffer = insertToBuffer(bufferObj, index, false)
        setBuffer(newBuffer)
        setCurrentIndex(index)
    }

    const handleTextAreaClick = () => {
       
        //innerHTMLRef.current!.focus()
    }


    const handleSubmit = (e: any) => {
        if (e.key == 'Enter') {
            handleMakeTag(buffer.length, innerHTMLRef.current!.innerText)
            innerHTMLRef.current!.innerText = '' 
            innerHTMLRef.current!.style.marginLeft = '10px'
            innerHTMLRef.current!.focus()
        }
    }

    const makeText = (divs: HTMLCollection):string => {
        var res = ''
        for (let i=0; i<divs.length; i++) {
            const div:any = divs[i]
            res += div.innerText + ' '
        }
        return res
    }

    const handleCopy = () => {
        // if this promptbuffer DNE, save.
        navigator.clipboard.writeText(makeText(bufferRef.current!.children))
    }

    const handleInnerHTMLChange = () => {
        var match = /\r|\n/.exec(innerHTMLRef.current!.innerText)
        if (match) {
            innerHTMLRef.current!.innerText = ''
        }
    }

    const handleClear = () => {
        innerHTMLRef.current!.style.marginLeft = '0px'
        setBuffer([])
    }

    return (
        <div 
        ref={containerRef}
        className="PromptTxtArea-Container tab-color"
        onClick={handleTextAreaClick}
        >
            <div className="PromptTxtArea-Toolbar background">
                <button className="button-save status-good-color" onClick={handleCopy}>copy</button>
                <button className="button-save status-good-color" onClick={handleClear}>clear</button>
            </div> 
            <div 
            ref={bufferRef}
            className="PromptTxtArea-Buffer text-color-secondary"
            >
                {buffer.map((obj, i) => {
                    switch (obj.type) {
                        case 'PromptInput': {
                            return (
                                <PromptInput 
                                key={i} 
                                index={i} 
                                makeTag={handleMakeTag}
                                />
                            )
                        }
                        case 'PromptPadding': {
                            return (
                                <PromptPadding
                                key={i}
                                index={i}
                                insertInput={handleInsertInput}
                                //rows={rows}
                                />
                            )
                        }
                        case 'RawPrompt': {
                            return (
                                <PromptTag 
                                key={i}
                                index={i}
                                tag={obj.tag!}
                                />
                            )
                        }
                        case 'PromptObject': {
                            return (
                                <PromptTag 
                                key={i}
                                index={i}
                                tag={obj.tag!}
                                />
                            )
                        }
                    }
                
                    })
                }
            <ContentEditable
                 innerRef={innerHTMLRef}
                 html={"<div></div>"}
                 disabled={false}
                 onChange={handleInnerHTMLChange}
                 onKeyDown={handleSubmit}
            />
            </div>
        </div>
    )
}

export default PromptTxtArea;
/*
<input 
                ref={lastInputRef} 
                onKeyPress={handleSubmit} 
                className="prompt-input" 
                onClick={handleClickLastInput}
               />
*/


// display prompts from state
// save prompts to state 
/*
    store:
    * raw prompt (display)
    * prompts in object form
    
    let store be a primitive read-write to json file
*/


/*
    <Functionality>

    EDIT:
    * when user type in stuff 
    case1 (manual add)
        * when user type + ENTER, tag as raw prompt
    case2 (auto add)
        * when user type + APPEND, get types and tag as raw

    APPEND: 
    * when user select selectable obj, append && format

    SAVE:
    case 1 (tag ssave)
    * user can save 1 or more tags to their favorite -> loc store
    case 2 (prompt save)
    * save the prompt + its output image to loc storage

    <Concepts>

    TAG:
    * defines a re-usable prompt "chunk" that can be saved & indexed
    * can be color coded
    * hover over shows related image + description
*/

/*
    basic text editor: https://codepen.io/pythonlearner1025/pen/rNKRbgR
    * tag blocks are not editable, only 1) movable 2) removable
    * tag blocks have padding to the left, insert text to left when click on padding
    * always input box at end of string auto-conv to raw-prompt 
     
*/

// to be later replaced with redux