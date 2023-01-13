import {Tag, PromptObject } from "../types/PromptUITypes"
import "./PromptUI.css"

interface Props {
    tag: Tag,
    index: number,
}

const PromptTag = (props: Props) => {

    const returnBody = (tag: Tag) => {
        if (tag.type == 'PromptObject') {
            return (
                <div className="tag-body promptobject">
                    <p>{tag.body}</p>
                </div>
            )
        } else if (tag.type == 'RawPrompt') {
            return (
                <div className="tag-body rawprompt">
                    <p>{tag.body}</p>
                </div>
            )
        }
    }

   
    // add padding to behind of tag-container
    return (
        <div 
        className="tag-container"
        >
            {returnBody(props.tag)}
        </div>
    )
}

export default PromptTag