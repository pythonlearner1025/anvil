import {useState, useRef} from "react"
import PromptSelectableObject from "./PromptSelectableObject"
import "./PromptUI.css"
import {PromptObject, SubCategory} from "../types/PromptUITypes"
import {getSelectableObject} from "../utils/getSelectableObject";

interface Props {
    subCategory: SubCategory,
    setSelectedObj: (obj: PromptObject)=>void
}

const PromptSubCategory = (props: Props) => {
    const [isPressed, setIsPressed] = useState(false)
    const promptObjects:Array<PromptObject> = props.subCategory.selectableObjects

    const handleOnClick = () => {
        setIsPressed(!isPressed)
    }

    const handleSetSelectedObj = (obj:PromptObject) => props.setSelectedObj(obj)

    return (
        <div className="card">
            <div className="card-header smoke" onClick={handleOnClick}>
                <h4>{props.subCategory.name}</h4>
            </div>
            {isPressed ?   
            <div className="card-body smoke">
                <div className="card-wrapper">
                    {promptObjects.map((obj,i)=>{
                        return (
                            <PromptSelectableObject 
                            key={i} 
                            obj={obj}
                            setSelectedObj={handleSetSelectedObj}
                            />
                        )
                    })} 
                </div>
            </div>
            : <></>}
        </div>
    )
}

export default PromptSubCategory;