import {PromptBuffer} from "../types/PromptUITypes"

interface Props {
    buffer: PromptBuffer,
    setSelectedBuff: (buf: PromptBuffer) => void
}

const PromptSelectableBuffer = (props: Props) => {

    const handleClick = () => {
        props.setSelectedBuff(props.buffer)
    }

    return (
        <div className="card selectable-card" onClick={handleClick}>
            <div className="card-body">
                <p className="card-title">{props.buffer.body}</p>
            </div>
            <div className="card-footer"></div>
        </div>
    )
}

export default PromptSelectableBuffer