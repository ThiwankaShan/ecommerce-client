import axios from 'axios';

export const getAllProducts = () => {
    return axios({
        method: 'get',
        url: import.meta.env.VITE_API_URL + '/product',
    }).then((response) => {
        return response.data;
    });
} 