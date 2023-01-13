import {Tag, PromptObject, RawPrompt} from "../types/PromptUITypes"

interface Props {
    tag: Tag,
    index: number,
    pingCursorLocation: (index:number) => void
}

const PromptTag = (props: Props) => {

    const returnBody = (tag: Tag) => {
        if (tag.type == 'PromptObject') {
            const prompt:any = tag.prompt 
            return (
                <div className="tag-body promptobject">
                    {prompt.name}
                </div>
            )
        } else if (tag.type == 'RawPrompt') {
            const prompt:any = tag.prompt
            return (
                <div className="tag-body rawprompt">
                    {prompt.body}
                </div>
            )
        }
    }

    // calculate if mouse click was in the back padding hitbox
    const inBackPadding = () => {
        return true
    }

    const handlePingCursorLocation = () => {
        if (!inBackPadding) return
                                        // handle -1 case
        props.pingCursorLocation(props.index-1!=-1?props.index-1:0)
    }

    // add padding to behind of tag-container
    return (
        <div 
        className="tag-container"
        onClick={handlePingCursorLocation}
        >
            {returnBody(props.tag)}
        </div>
    )
}

export default PromptTag