import {useState, useRef} from "react"
import {SubCategory} from "../types/PromptUITypes"
import {getSubCategories} from "../utils/getSubCategories"
import PromptCategoryPreview from "./PromptCategoryPreview"
import PromptSubCategory from "./PromptSubCategory"

interface Props {
   name: string 
}

const PromptCategory = (props: Props) => {
    const [isPressed, setIsPressed] = useState(false)
    const subCategories: Array<SubCategory> = getSubCategories()

    if (!isPressed) {
        return (
            <PromptCategoryPreview name={props.name}/>
        )
    } else return (
        <div className="PromptCategory-Container">
            <div className="PromptCategory-Wrapper">
                {subCategories.map((subC,i) => {
                    return (
                        <PromptSubCategory
                        key={i}
                        name={subC.name}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default PromptCategory;