import "./PromptUI.css"
import {PromptObject} from "../types/PromptUITypes"
interface Props {
    obj: PromptObject,
    setSelectedObj: (obj: PromptObject)=>void
}

const PromptSelectableObject = (props: Props) => {

    const handleClick = () => {
        props.setSelectedObj(props.obj)
    }

    return (
        <div className="card selectable-card" onClick={handleClick}>
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