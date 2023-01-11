import { useCallback, useRef } from 'react';
import {Category} from "../types/PromptUITypes"
import {getCategories} from "../utils/getCategories"
import PromptCategory from "./PromptCategory"


const PromptSelectArea = () => {
    const promptCategories: Array<Category> = getCategories()

    return (
        <div className="PromptSelectArea-Container">
            <div className="PromptSelectArea-Wrapper">
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
