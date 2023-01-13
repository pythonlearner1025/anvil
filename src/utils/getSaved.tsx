import {PromptBuffer} from "../types/PromptUITypes"

export const getSaved = (): Array<PromptBuffer> => {
    const temp = []
    for (let i=0; i<20; i++) {
        temp.push({
            body: 'prompt buffer 1',
            buffer: []
        })
    }
    return temp 
}