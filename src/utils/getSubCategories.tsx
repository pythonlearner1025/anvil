// read and return list of subcategories from some file mappings
import {SubCategory} from "../types/PromptUITypes"

export const getSubCategories = (subCategoryName: string): Array<SubCategory> => {
    const temp = []
    for (let i=0;i<10;i++){
        temp.push({
            name: `subCategory${i}`
        })
    }
    return temp
}