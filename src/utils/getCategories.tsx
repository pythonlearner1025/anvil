import {Category} from "../types/PromptUITypes"
import category from "../store/categories/categories.json"

export const getCategories = (): Array<Category> => {
    return category.categories
}