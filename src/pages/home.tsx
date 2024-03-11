import React, { useEffect, useState } from 'react'
import { ProductTable } from '../components/product/productTable';
import { Navbar } from '../components/shared/navbar';
import { getAllProducts } from '../api/productService';

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
            <Navbar />
            <ProductTable products={products} />
        </>
    );
}
