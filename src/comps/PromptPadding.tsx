import {useEffect, useRef, useState} from "react"
import "./PromptUI.css"

interface Props {
    index: number,
    insertInput: (index: number) => void
}

const PromptPadding = (props: Props) => {
    const handleClick = () => props.insertInput(props.index)
    return (
        <div className="PromptPadding" onClick={handleClick}></div>
    )
}

export default PromptPadding;