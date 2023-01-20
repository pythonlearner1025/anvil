import {useEffect} from "react"
import {PromptObject} from "../types/PromptUITypes"
import config from "../config/config.json"
import "./PromptUI.css"
import "./card.css"
import "./colors.css"
const utf8 = require('utf8')
interface Props {
    displayName?: string
    obj: PromptObject
    setSelectedObj: (obj: PromptObject)=>void
    base: string
}

const PromptSelectableObject = (props: Props) => {

    const handleClick = () => {
        props.setSelectedObj(props.obj)
    }

    return (
        <div className="card selectable-card" onClick={handleClick}>
            <div className="card-img-top">
                <img src={config.base_uri.replace('{replace}', `${props.base}_${props.obj.name.replaceAll(' ', '_')}`)} className="card-img-content"></img>
            </div>
            <div 
            className="card-body text-color-primary" 
            style={{
                height: 30,
                lineHeight: 0
            }}
            >
                <p className="card-title">{props.obj.displayName?props.obj.displayName:props.obj.name}</p>
            </div>
            <div className="card-footer"></div>
        </div>
    )
}

export default PromptSelectableObject