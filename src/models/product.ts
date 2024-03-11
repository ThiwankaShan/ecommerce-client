export type Product = {
    sku: string;
    name: string;
    price: number;
    quantity: number;
    images: Image[];
    description: string;
}

export type Image = {
    isThumbnail: boolean;
    fileName: string;
    path: string;
}