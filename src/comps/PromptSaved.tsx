// saved prompt texts
import {useState} from "react"
import {PromptBuffer} from "../types/PromptUITypes"
import {getSaved} from "../utils/getSaved"
import PromptSelectableBuffer from "./PromptSelectableBuffer"


interface Props {
    setSelectedBuff: (buf: PromptBuffer) => void
}

const PromptSaved = (props: Props) => {
    // load from store
    const [isPressed, setIsPressed] = useState(false)
    const saved: Array<PromptBuffer> = getSaved()

    const handleOnClick = () => setIsPressed(!isPressed)
    const handleSetSelectedBuff = (buff: PromptBuffer) => props.setSelectedBuff(buff)
    return (
        <div className="card">
            <div 
            className="card-header purple" 
            onClick={handleOnClick}
            style={{
                borderBottomLeftRadius: !isPressed ? 5 : 0,
                borderBottomRightRadius: !isPressed ? 5 : 0,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
            }}
            >
                <h4>Saved</h4>
            </div>
            {isPressed ?   
            <div className="card-body purple">
                <div className="card-wrapper">
                    {saved.map((buff,i)=>{
                        return (
                            <PromptSelectableBuffer
                            key={i} 
                            buffer={buff}
                            setSelectedBuff={handleSetSelectedBuff}
                            />
                        )
                    })} 
                </div>
            </div>
            : <></>}
        </div>
    )
}

export default PromptSaved;