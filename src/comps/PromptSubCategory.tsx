import {useState, useRef} from "react"
import PromptSubCategoryPreview from "./PromptSubCategoryPreview"
import PromptObject from "./PromptObject"

interface Props {
    name: string,
}

const PromptSubCategory = (props: Props) => {
    const [isPressed, setIsPressed] = useState(false)
    const promptObjects:Array<string> = []

    if (!isPressed) {
        return (
           <PromptSubCategoryPreview name={props.name}/> 
        )
    } else return (
        <div className="PromptSubCategory-Container">
            <div className="PromptSubCategory-Wrapper">
                {promptObjects.map((o,i)=> {
                    return (
                        <PromptObject 
                        key={i}
                        name={o}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default PromptSubCategory;