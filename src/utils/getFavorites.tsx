import {PromptObject} from "../types/PromptUITypes"

export const getFavorites = (): Array<PromptObject> => {
    // use mock for now
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