export interface Item {
    id: string;
    name: string;
    image: string;
    description: string;
    type: string;
    effect: string;
}

export interface ItemOption {
    name: string;
    image: string;
    description?: string;
    type?: string;
}
