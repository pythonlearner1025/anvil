import { useCallback, useRef, useState, useEffect } from 'react';
import "./PromptUI.css"
import PromptTag from "./PromptTag"
import PromptInput from "./PromptInput"
import {Tag, RawPrompt, PromptObject}  from "../types/PromptUITypes"
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
interface Props {
    promptObject: PromptObject
}

type BufferObject = {
    type: 'RawPrompt' | 'PromptObject' | 'InputPrompt',
    tag: Tag | null
}

const PromptTxtArea = (props: Props) => {
    const [buffer, setBuffer] = useState(new Array<BufferObject>())
    const [currentIndex, setCurrentIndex] = useState(0)

    // insert selected PromptObject to cursor location
    useEffect((()=> {
        const tag: Tag = {
            type: "PromptObject",
            prompt: props.promptObject
        }

        const bufferObj: BufferObject = {
            type: "PromptObject",
            tag: tag
        }
        
        const currentBuffer = buffer;
        currentBuffer.splice(currentIndex, 0, bufferObj)
        setBuffer(currentBuffer)
    }), [props.promptObject])


    // current index update means create new InputPrompt in that location
    useEffect((()=> {
        const bufferObj: BufferObject = {
            type: "InputPrompt",
            tag: null
        }
        const currentBuffer = buffer;
        currentBuffer.splice(currentIndex, 0, bufferObj)
        setBuffer(currentBuffer)
    }), [currentIndex])

    // make and insert rawprompt to buffer
    const handleMakeTag = (index: number, body: string) => {
        const rawPrompt: RawPrompt = {
            body: body
        }

        const tag: Tag = {
            type: 'RawPrompt',
            prompt: rawPrompt
        }

        const bufferObj: BufferObject = {
            type: 'RawPrompt',
            tag: tag 
        }

        const currentBuffer = buffer;
        currentBuffer.splice(index, 0, bufferObj)
        setBuffer(currentBuffer)
    }

    const handlePingCursorLocation = (index: number) => {
        setCurrentIndex(index)
    }

    return (
        <div className="PromptTxtArea-Container gray">
            {buffer.map((obj, i) => {
                if (obj.type == 'InputPrompt') {
                    return (
                        <PromptInput 
                        key={i} 
                        index={i} 
                        makeTag={handleMakeTag}
                        pingCursorLocation={handlePingCursorLocation}
                        />
                    )
                } else return (
                    <PromptTag 
                    key={i}
                    index={i}
                    tag={obj.tag!}
                    pingCursorLocation={handlePingCursorLocation}
                    />
                )
            })}
            <input className="last-input"></input>
        </div>
    )
}

export default PromptTxtArea;
