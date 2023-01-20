import {useState, useRef} from "react"
import { PromptObject} from "../types/PromptUITypes"
import PromptSelectableObject from "./PromptSelectableObject"
import {getArtists} from "../utils/getArtists"
import "./PromptUI.css"
import "./card.css"
import "./colors.css"

interface Props {
   setSelectedObj: (obj: PromptObject) => void
   base: string
}

const PromptArtists = (props: Props) => {
    const [isPressed, setIsPressed] = useState(false)
    const artists: Array<PromptObject> = getArtists()

    const handleOnClick = () => {
        console.log('pressed')
        setIsPressed(!isPressed)
    }

    const handleSetSelectedObj = (obj:PromptObject) => props.setSelectedObj(obj)

    return (
        <div className="card">
            <div className="card-header background-light text-color-primary" 
            onClick={handleOnClick}
            style={{
                borderBottomLeftRadius: !isPressed ? 5 : 0,
                borderBottomRightRadius: !isPressed ? 5 : 0,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
            }}>
                <h4>Artists</h4>
            </div>
            {isPressed ?   
            <div className="card-body background-light">
                <div className="card-wrapper">
                    {artists.map((obj,i)=>{
                        return (
                            <PromptSelectableObject 
                            key={i} 
                            obj={obj}
                            setSelectedObj={handleSetSelectedObj}
                            base={props.base}
                            />
                        )
                    })} 
                </div>
            </div>
            : <></>}
        </div>
    )
}

export default PromptArtists;