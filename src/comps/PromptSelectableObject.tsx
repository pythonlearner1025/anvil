import {PromptObject} from "../types/PromptUITypes"
import "./PromptUI.css"
import "./card.css"
import "./colors.css"
interface Props {
    obj: PromptObject,
    setSelectedObj: (obj: PromptObject)=>void
}

const PromptSelectableObject = (props: Props) => {

    const handleClick = () => {
        props.setSelectedObj(props.obj)
    }

    return (
        <div className="card selectable-card background-light-light" onClick={handleClick}>
            <div className="card-img-top">
                <img src={props.obj.assetPath} className="card-img-content"></img>
            </div>
            <div 
            className="card-body text-color-primary" 
            style={{
                height: 30,
                lineHeight: 0
            }}
            >
                <p className="card-title">{props.obj.name}</p>
            </div>
            <div className="card-footer"></div>
        </div>
    )
}

export default PromptSelectableObject