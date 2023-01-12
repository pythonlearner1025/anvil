import "./PromptUI.css"
import {PromptObject} from "../types/PromptUITypes"
interface Props {
    obj: PromptObject
}

const PromptSelectableObject = (props: Props) => {
    return (
        <div className="card selectable-card">
            <div className="card-img-top">
                <img src={props.obj.assetPath}></img>
            </div>
            <div className="card-body">
                <p className="card-title">{props.obj.name}</p>
            </div>
            <div className="card-footer"></div>
        </div>
    )
}

export default PromptSelectableObject