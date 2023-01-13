import { useCallback, useRef, useState } from 'react';
import {PromptObject, PromptBuffer} from "../types/PromptUITypes"
import PromptTxtArea from "./PromptTxtArea"
import PromptSelectArea from "./PromptSelectArea"
import "./PromptUI.css"

// UI layout for anvil
const PromptUI = () => {
    const [selectedPromptObj, setSelectedPromptObj] = useState<PromptObject|null>(null)
    const [selectedBuff, setSelectedBuff] = useState<PromptBuffer|null>(null)
    const handleSetSelectedObj = (obj:PromptObject) => setSelectedPromptObj(obj)
    const handleSetSelectedBuff = (buff: PromptBuffer) => setSelectedBuff(buff)
    return (
        <div className="PromptUI-container"
            style={{
                width: 600,
                height:800,
                left: (window.innerWidth/2 - 600/2),
                top: (window.innerHeight/2 - 800/2)
            }}
        >
            <div className="PromptUI-wrapper">
                <PromptTxtArea 
                promptObject={selectedPromptObj}
                promptBuffer={selectedBuff}
                />
                <PromptSelectArea 
                setSelectedObj={handleSetSelectedObj}
                setSelectedBuff={handleSetSelectedBuff}
                />
            </div>
        </div>
    )
}

export default PromptUI;
