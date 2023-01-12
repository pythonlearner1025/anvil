import { useCallback, useRef } from 'react';
import {Category} from "../types/PromptUITypes"
import {getCategories} from "../utils/getCategories"
import PromptCategory from "./PromptCategory"
import "./PromptUI.css"


const PromptSelectArea = () => {
    const promptCategories: Array<Category> = getCategories()

    return (
        <div className="PromptSelectArea-Container gray">
            <div className="card-wrapper">
                {promptCategories.map((c,i) => {
                    return (
                        <PromptCategory
                        key={i}
                        name={c.name}
                        /> 
                    )
                })}
           </div>
        </div>
    )
}

export default PromptSelectArea;
