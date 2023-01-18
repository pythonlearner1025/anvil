import { useCallback, useRef } from 'react';
import {Category, PromptObject, PromptBuffer} from "../types/PromptUITypes"
import {getCategories} from "../utils/getCategories"
import PromptCategory from "./PromptCategory"
import PromptSaved from "./PromptSaved"
import PromptFavorite from "./PromptFavorite"
import "./PromptUI.css"
import "./card.css"
import "./colors.css"

interface Props {
    setSelectedObj: (obj: PromptObject) => void,
    setSelectedBuff: (buff: PromptBuffer) => void
}

const PromptSelectArea = (props: Props) => {
    const promptCategories: Array<Category> = getCategories()

    const handleSetSelectedObj = (obj:PromptObject) => props.setSelectedObj(obj)
    const handleSetSelectedBuff = (buff: PromptBuffer) => props.setSelectedBuff(buff)
    return (
        <div className="PromptSelectArea-Container tab-color">
            <div className="card-wrapper">
                
                {promptCategories.map((category,i) => {
                    return (
                        <PromptCategory
                        key={i}
                        category={category}
                        setSelectedObj={handleSetSelectedObj}
                        /> 
                    )
                })}
           </div>
        </div>
    )
}

/*
<PromptFavorite setSelectedObj={handleSetSelectedObj}/>
<PromptSaved setSelectedBuff={handleSetSelectedBuff}/>
*/

export default PromptSelectArea;
