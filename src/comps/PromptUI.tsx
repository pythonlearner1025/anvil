import { useCallback, useRef } from 'react';
import PromptTxtArea from "./PromptTxtArea"
import PromptSelectArea from "./PromptSelectArea"
import "./PromptUI.css"

// UI layout for anvil
const PromptUI = () => {

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
                <PromptTxtArea></PromptTxtArea>
                <PromptSelectArea></PromptSelectArea>
            </div>
        </div>
    )
}

export default PromptUI;
