import {useState, useRef} from "react"
import PromptSelectableObject from "./PromptSelectableObject"
import {PromptObject, SubCategory} from "../types/PromptUITypes"
import "./PromptUI.css"
import "./card.css"
import "./colors.css"

interface Props {
    subCategory: SubCategory,
    setSelectedObj: (obj: PromptObject)=>void,
    base: string
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
            <div 
            className="card-header background-light-light text-color-secondary" 
            onClick={handleOnClick}
            style={{
                borderBottomLeftRadius: !isPressed ? 5 : 0,
                borderBottomRightRadius: !isPressed ? 5 : 0,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
            }} 
            >
                <h4>{props.subCategory.name}</h4>
            </div>
            {isPressed ?   
            <div className="card-body background-light-light">
                <div className="card-wrapper">
                    {promptObjects.map((obj,i)=>{
                        return (
                            <PromptSelectableObject 
                            key={i} 
                            obj={obj}
                            setSelectedObj={handleSetSelectedObj}
                            base={props.base}
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