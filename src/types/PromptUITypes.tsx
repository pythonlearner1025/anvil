// https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript
export type Category = {
    name: string,
    subCategories: Array<SubCategory>,
    hasAsset?: boolean,
    assetpath?: string,
    desc?: string
}

export type SubCategory = {
    name: string,
    selectableObjects: Array<PromptObject>,
    hasAsset?: boolean,
    assetPath?: string,
    desc?: string
}


export type Tag = {
    type: 'RawPrompt' | 'PromptObject',
    body: string, 
    assetPath?: string
}

export type PromptObject = {
    name: string,
    hasAsset?: boolean,
    assetPath?: string,
    desc?: string 
}

export type BufferObject = {
    type: 'RawPrompt' | 'PromptObject' | 'InputPrompt' | 'PromptPadding',
    tag: Tag | null
}
    
export type PromptBuffer = {
    body: string,
    buffer: Array<BufferObject>
}   
   
 