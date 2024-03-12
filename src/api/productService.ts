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
    const images = await uploadImages(product.images);
    product.images = images;

    return axios({
        method: 'post',
        url: import.meta.env.VITE_API_URL + '/product',
        data: product
    }).then((response) => {
        return response.data;
    });
}

export const uploadImages = async (images: FileList) => {
    let formData = new FormData();

    for (var i = 0; i < images.length; i++) {
        formData.append('images', images[i]);
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
        return images;
    } else {
        console.error("file upload failed : ", response.status);
        throw new Error("file upload failed :");
    }
};

export const updateProduct = async (product: any) => {
    const images = await uploadImages(product.images);
    product.images = images;

    return axios({
        method: 'post',
        url: import.meta.env.VITE_API_URL + '/product/update/' + product.sku,
        data: { product }
    }).then((response) => {
        console.log(response.data);
        return response.data;
    });
};