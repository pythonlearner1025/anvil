import {useState, useRef} from "react"
import {SubCategory, PromptObject, Category} from "../types/PromptUITypes"
import PromptSubCategory from "./PromptSubCategory"
import "./PromptUI.css"
import "./card.css"
import "./colors.css"

interface Props {
   category: Category,
   setSelectedObj: (obj: PromptObject) => void
   base: string
}

const PromptCategory = (props: Props) => {
    const [isPressed, setIsPressed] = useState(false)
    const subCategories: Array<SubCategory> = props.category.subCategories

    const handleOnClick = () => {
        console.log('pressed')
        setIsPressed(!isPressed)
    }

    const handleSetSelectedObj = (obj:PromptObject) => props.setSelectedObj(obj)

    return (
        <div className="card">
            <div className="card-header background-light text-color-primary" 
            onClick={handleOnClick}
            style={{
                borderBottomLeftRadius: !isPressed ? 5 : 0,
                borderBottomRightRadius: !isPressed ? 5 : 0,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
            }}>
                <h4>{props.category.name}</h4>
            </div>
            {isPressed ?   
            <div className="card-body background-light">
                <div className="card-wrapper">
                    {subCategories.map((sc,i)=>{
                        return (
                            <PromptSubCategory 
                            key={i} 
                            subCategory={sc}
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

export default PromptCategory;