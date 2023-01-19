import { useCallback, useEffect, useRef, useState } from 'react';
import {PromptObject, PromptBuffer} from "../types/PromptUITypes"
import PromptTxtArea from "./PromptTxtArea"
import PromptSelectArea from "./PromptSelectArea"
import "./PromptUI.css"
import "./colors.css"

// UI layout for anvil
const PromptUI = () => {
    useEffect((()=> {
    }),[])
    const [selectedPromptObj, setSelectedPromptObj] = useState<PromptObject|null>(null)
    const [selectedBuff, setSelectedBuff] = useState<PromptBuffer|null>(null)
    const handleSetSelectedObj = (obj:PromptObject) => setSelectedPromptObj(obj)
    const handleSetSelectedBuff = (buff: PromptBuffer) => setSelectedBuff(buff)
    return (
        <div className="PromptUI-container">
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


/*
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "manifest_version": 3,
  "version": "1.0.1",
  "action": {
    "default_popup": "index.html"
  }
}

*/