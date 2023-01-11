// https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript
export type Category = {
    name: string,
    hasAsset: boolean,
    assetpath: string,
    desc: string
}

export type SubCategory = {
    name: string,
    hasAsset: boolean,
    assetPath: string,
    desc: string
}
