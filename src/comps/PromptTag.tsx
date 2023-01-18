import {Tag, PromptObject } from "../types/PromptUITypes"
import "./PromptUI.css"
import "./colors.css"

interface Props {
    tag: Tag,
    index: number,
}

const PromptTag = (props: Props) => {

    const returnBody = (tag: Tag) => {
        if (tag.type == 'PromptObject') {
            return (
                <div className="prompt-tag-body">
                    {tag.body}
                </div>
            )
        } else if (tag.type == 'RawPrompt') {
            return (
                <div className="prompt-tag-body">
                    {tag.body}
                </div>
            )
        }
    }

   
    // add padding to behind of tag-container
    return (
        <div 
        className="prompt-tag background-light"
        >
            {returnBody(props.tag)}
        </div>
    )
}

export default PromptTag