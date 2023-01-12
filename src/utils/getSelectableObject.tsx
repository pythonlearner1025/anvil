// read and return list of subcategories from some file mappings
import {PromptObject} from "../types/PromptUITypes"

// hardcoded for now
export const getSelectableObject = (objName: string): Array<PromptObject> => {
    const temp = []
    for (let i=0; i<20; i++) {
        temp.push({
            name: `obj${i}`,
            hasAsset: true,
            assetPath: '/Users/minjunes/anvil/src/assets/Illustration.webp'
        })
    }
    return temp
}