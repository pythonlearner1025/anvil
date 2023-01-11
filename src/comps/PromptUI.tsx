import { useCallback, useRef } from 'react';
import PromptTxtArea from "./PromptTxtArea"
import PromptSelectArea from "./PromptSelectArea"

// UI layout for anvil
const PromptUI = () => {

    return (
        <>
            <div className="PromptUI-container">
                <div className="PromptUI-wrapper">
                    <PromptTxtArea></PromptTxtArea>
                    <PromptSelectArea></PromptSelectArea>
                </div>
           </div>
        </>
    )
}

export default PromptUI;
