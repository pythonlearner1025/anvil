import {useState, useRef} from "react"
import {SubCategory} from "../types/PromptUITypes"
import {getSubCategories} from "../utils/getSubCategories"
import PromptSubCategory from "./PromptSubCategory"
import "./PromptUI.css"

interface Props {
   name: string 
}

const PromptCategory = (props: Props) => {
    const [isPressed, setIsPressed] = useState(false)
    const subCategories: Array<SubCategory> = getSubCategories(props.name)

    const handleOnClick = () => {
        console.log('pressed')
        setIsPressed(!isPressed)
    }

    return (
        <div className="card">
            <div className="card-header purple" onClick={handleOnClick}>
                <h4>{props.name}</h4>
            </div>
            {isPressed ?   
            <div className="card-body purple">
                <div className="card-wrapper">
                    {subCategories.map((sc,i)=>{
                        return (
                            <PromptSubCategory key={i} subCategory={sc}/>
                        )
                    })} 
                </div>
            </div>
            : <></>}
        </div>
    )
}

export default PromptCategory;