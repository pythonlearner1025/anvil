// favorite tags
import {useState} from "react"
import {PromptObject} from "../types/PromptUITypes"
import {getFavorites} from "../utils/getFavorites"
import PromptSelectableObject from "./PromptSelectableObject"

interface Props {
    setSelectedObj: (obj: PromptObject) => void
}

const PromptFavorite = (props: Props) => {
    // load from loc storage
    const [isPressed, setIsPressed] = useState(false)
    const favorites: Array<PromptObject> = getFavorites()
    const handleOnClick = () => setIsPressed(!isPressed)
    const handleSetSelectedObj = (obj:PromptObject) => props.setSelectedObj(obj)
    return (
        <div className="card">
            <div className="card-header purple" onClick={handleOnClick}>
                <h4>Favorites</h4>
            </div>
            {isPressed ?   
            <div className="card-body purple">
                <div className="card-wrapper">
                    {favorites.map((obj,i)=>{
                        return (
                            <PromptSelectableObject 
                            key={i} 
                            obj={obj}
                            setSelectedObj={handleSetSelectedObj}
                            />
                        )
                    })} 
                </div>
            </div>
            : <></>}
        </div>
    )
}

export default PromptFavorite;