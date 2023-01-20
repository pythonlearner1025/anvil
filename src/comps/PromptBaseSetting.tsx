import {useEffect, useRef, useState} from "react"
import {PromptObject} from "../types/PromptUITypes"
import PromptSelectableObject from "./PromptSelectableObject"
interface Props {
    parentWidth: number,
    parentHeight: number,
    onChangeBase: (baseName: string) => void
}

const PromptBaseSetting = (props: Props) => {
    //beautiful_face
    //sphere
    //landscape
    const handleSetSelectedBase = (obj: PromptObject) => props.onChangeBase(obj.name)
    return (
        <div 
        className="PromptBaseSetting-Container background"
        style={{
            width: props.parentWidth*0.85 ,
            height: props.parentHeight*0.34,
            left: (props.parentWidth - (props.parentWidth*0.85))/2,
            top:(props.parentHeight - (props.parentHeight*0.34))/2
        }}
        >
            <div className="PromptBaseSetting-wrapper">
                <PromptSelectableObject
                obj={{name: 'beautiful_face', displayName: 'Beautiful Face'}}
                setSelectedObj={handleSetSelectedBase}
                base={'base'} 
                />
                <PromptSelectableObject
                obj={{name: 'sphere', displayName: 'Sphere'}}
                setSelectedObj={handleSetSelectedBase} 
                base={'base'}
                />
                <PromptSelectableObject
                obj={{name: 'landscape', displayName: 'Landscape'}}
                setSelectedObj={handleSetSelectedBase} 
                base={'base'}
                />
            </div>
        </div>
    )
}

export default PromptBaseSetting