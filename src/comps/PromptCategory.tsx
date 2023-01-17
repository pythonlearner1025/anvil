import {useState, useRef} from "react"
import {SubCategory, PromptObject, Category} from "../types/PromptUITypes"
import {getSubCategories} from "../utils/getSubCategories"
import PromptSubCategory from "./PromptSubCategory"
import "./PromptUI.css"

interface Props {
   category: Category,
   setSelectedObj: (obj: PromptObject) => void
}

const PromptCategory = (props: Props) => {
    const [isPressed, setIsPressed] = useState(false)
    const subCategories: Array<SubCategory> = props.category.subs

    const handleOnClick = () => {
        console.log('pressed')
        setIsPressed(!isPressed)
    }

    const handleSetSelectedObj = (obj:PromptObject) => props.setSelectedObj(obj)

    return (
        <div className="card">
            <div className="card-header purple" onClick={handleOnClick}>
                <h4>{props.category.name}</h4>
            </div>
            {isPressed ?   
            <div className="card-body purple">
                <div className="card-wrapper">
                    {subCategories.map((sc,i)=>{
                        return (
                            <PromptSubCategory 
                            key={i} 
                            subCategory={sc}
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

export default PromptCategory;