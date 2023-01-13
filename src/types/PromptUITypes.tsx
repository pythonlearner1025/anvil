// https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript
export type Category = {
    name: string,
    hasAsset?: boolean,
    assetpath?: string,
    desc?: string
}

export type SubCategory = {
    name: string,
    hasAsset?: boolean,
    assetPath?: string,
    desc?: string
}

export type RawPrompt = {
    body: string,
}

export type Tag = {
    type: 'RawPrompt' | 'PromptObject',
    body: RawPrompt | PromptObject
}

export type PromptObject = {
    name: string,
    hasAsset?: boolean,
    assetPath?: string,
    desc?: string 
}
    
   
   
 