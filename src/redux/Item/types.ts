export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error,'
}

export type TItem = {
    id: string;
    category: number;
    imageUrl: string[];
    imageMiniUrl: string[];
    title: string;
    sizes: string[];
    price: number;
    color: number;
    ctypes: number[];
}

export interface ItemsSliceProps {
    items:TItem[]
    status: Status
}