
export type TSetFilters = {
    categoryId: number,
}

export interface FilterSliceState {
    categoryId: number,
    searchValue: string,
    color:number,
}