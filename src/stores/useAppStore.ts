import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipesSlice, type recipeSliceType } from './recipeSlice'

export const useAppStore = create<recipeSliceType>()(devtools((...a)=> ({
    ...createRecipesSlice(...a)
})))