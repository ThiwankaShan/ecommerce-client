import axios from 'axios';
import { Image } from '../models/product';

export const getAllProducts = () => {
    return axios({
        method: 'get',
        url: import.meta.env.VITE_API_URL + '/product',
    }).then((response) => {
        return response.data;
    });
}

export const createProduct = async (product: any) => {
    let formData = new FormData();

    for (var i = 0; i < product.images.length; i++) {
        formData.append('images', product.images[i]);
    }

    const response = await axios({
        method: 'post',
        url: import.meta.env.VITE_API_URL + '/image',
        data: formData
    });

    if (response.status === 200) {
        let images: Image[] = [];
        response.data.files.forEach((image: any, i: number) => {
            images.push({
                isThumbnail: image.isThumbnail,
                fileName: image.filename,
                path: image.path.split("\\")[1]
            });
        });
        product.images = images;
    } else {
        console.error("file upload failed : ", response.status);
        throw new Error("file upload failed :");
    }

    return axios({
        method: 'post',
        url: import.meta.env.VITE_API_URL + '/product',
        data: product
    }).then((response) => {
        return response.data;
    });
}