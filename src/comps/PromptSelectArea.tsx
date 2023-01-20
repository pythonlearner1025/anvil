import { useState ,useEffect, useRef } from 'react';
import {Category, PromptObject, PromptBuffer} from "../types/PromptUITypes"
import {getCategories} from "../utils/getCategories"
import PromptCategory from "./PromptCategory"
import PromptBaseSetting from "./PromptBaseSetting"
import "./PromptUI.css"
import "./card.css"
import "./colors.css"

interface Props {
    setSelectedObj: (obj: PromptObject) => void,
    setSelectedBuff: (buff: PromptBuffer) => void
}

const PromptSelectArea = (props: Props) => {
    const [showBaseSettings, setShowBaseSettings] = useState(false)
    const [selectedBase, setSelectedBase] = useState<string>('beautiful_face')
    const promptCategories: Array<Category> = getCategories()
    const containerRef = useRef<HTMLDivElement|null>(null)


    const handleSetSelectedObj = (obj:PromptObject) => props.setSelectedObj(obj)
    //const handleSetSelectedBuff = (buff: PromptBuffer) => props.setSelectedBuff(buff)
    const handleShowBaseSettings = () => setShowBaseSettings(!showBaseSettings)
    const handleOnChangeBase = (baseName: string) => {
        console.log('here')
        setShowBaseSettings(false)
        setSelectedBase(baseName)
    }
    return (
        <div 
        ref={containerRef}
        className="PromptSelectArea-Container tab-color"
        >
             <div className="PromptTxtArea-Toolbar background">
                <button className="button-save status-good-color" onClick={handleShowBaseSettings}>Set Base</button>
             </div>
             {showBaseSettings?
             <PromptBaseSetting 
             onChangeBase={handleOnChangeBase}
             parentWidth={containerRef.current!.offsetWidth}
             parentHeight={containerRef.current!.offsetHeight}
             />
             : null }
            <div className="card-wrapper top">
                
                {promptCategories.map((category,i) => {
                    return (
                        <PromptCategory
                        key={i}
                        category={category}
                        setSelectedObj={handleSetSelectedObj}
                        base={selectedBase}
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
