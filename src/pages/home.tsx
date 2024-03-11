import React, { useEffect, useState } from 'react'
import { ProductTable } from '../components/product/productTable';
import { getAllProducts } from '../api/productService';
import { Typography } from '@mui/material';

export const Home: React.FC = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const products = await getAllProducts();
        setProducts(products);
    }
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <>
            <Typography fontSize={36} fontWeight={900}>
                Products
            </Typography>
            <ProductTable products={products} />
        </>
    );
}
