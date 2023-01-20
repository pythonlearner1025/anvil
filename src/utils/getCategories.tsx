import {Category, SubCategory} from "../types/PromptUITypes"
import cats from "../config/cats.json"


export const getCategories = (): Array<Category> => {
    const res = [] 
    for (let cat in cats) {
        if (cats.hasOwnProperty(cat)) {
            const newsubcats = []
            const subcats: Array<SubCategory> = cats[cat as keyof typeof cats]
            for (let i in subcats) {
                const subcat = subcats[i]
                const subcatname = subcat.name
                const selectableobjects = subcat.selectableObjects
                newsubcats.push({
                    name: subcatname,
                    selectableObjects: selectableobjects
                })
            }
            res.push({
                name: cat,
                subCategories: newsubcats
            })
        }
    }
    return res 
}