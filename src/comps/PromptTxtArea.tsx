import {useRef, useState, useEffect} from 'react';
import {PromptObject, BufferObject, PromptBuffer}  from "../types/PromptUITypes"
import "./PromptUI.css"
import "./colors.css"

interface Props {
    promptObject: PromptObject | null,
    promptBuffer: PromptBuffer | null
}

interface Dims {
    width: number
    height: number
}

const PromptTxtArea = (props: Props) => {
    const [dims, setDims] = useState<Dims>({width: 0, height: 0})
    const [buffer, setBuffer] = useState<Array<BufferObject>>([])
    const textareaRef = useRef<HTMLTextAreaElement|null>(null)
    const bufferRef = useRef<HTMLDivElement|null>(null)
    const containerRef = useRef<HTMLDivElement|null>(null)
    const toolbarRef = useRef<HTMLDivElement|null>(null)

    useEffect((()=> {
        setDims({width:bufferRef.current!.offsetWidth, height:containerRef.current!.offsetHeight-toolbarRef.current!.offsetHeight})
        textareaRef.current!.style.width = `${bufferRef.current!.offsetWidth}px`
        textareaRef.current!.style.height = `${containerRef.current!.offsetHeight-toolbarRef.current!.offsetHeight}px`
        textareaRef.current!.style.borderColor = 'rgb(180,200,200,0.4)' 
        textareaRef.current!.style.borderRadius = '5px'
        textareaRef.current!.style.transitionDuration = '10'
        textareaRef.current!.style.fontStyle = 'bold'
        textareaRef.current!.style.fontFamily = 'Arial, sans-serif'
        textareaRef.current!.style.fontStyle = 'normal'
        textareaRef.current!.style.fontSize = 'medium'
        textareaRef.current!.style.resize = 'none'
    }),[])

    useEffect((()=> {
        console.log('updated buffer', buffer)
    }), [buffer])
    
    // insert selected PromptObject to cursor location
    useEffect((()=> {
        if (props.promptObject == undefined) return 
        textareaRef.current!.focus()
        const name = props.promptObject?.displayName != undefined ? props.promptObject?.displayName : props.promptObject?.name
        document.execCommand('insertText', false /*no UI*/, ` ${name} `);
    }), [props.promptObject])

    useEffect((()=> {
       
    }), [props.promptBuffer])

    const handleCopy = () => {
    }
    const handleClear = () => {
        textareaRef.current!.value = ''
    }
    const handleFocus = () => {
        textareaRef.current!.style.boxShadow = 'none'
    }
    const handleBlur = () => {
        textareaRef.current!.style.width = `${dims.width}px`
        textareaRef.current!.style.height = `${dims.height}px`
        //#7246eb 
    }
    return (
        <div 
        ref={containerRef}
        className="PromptTxtArea-Container tab-color"
        >
            <div ref={toolbarRef}className="PromptTxtArea-Toolbar background">
                <button className="button-save status-good-color" onClick={handleCopy}>copy</button>
                <button className="button-save status-good-color" onClick={handleClear}>clear</button>
            </div> 
            <div 
            ref={bufferRef}
            className="PromptTxtArea-Buffer text-color-secondary"
            >
              <textarea 
              ref={textareaRef} 
              className="PromptTxtArea-textarea text-color-secondary tab-color"
              onFocus={handleFocus}
              onBlur={handleBlur}
              spellCheck={false}
              ></textarea> 
            
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

