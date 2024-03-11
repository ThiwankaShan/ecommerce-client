import React, { useEffect, useState } from 'react';
import { Button, Grid, Input, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { getAllProducts } from '../api/productService';
import ProductTable from '../components/product/productTable';
import ProductSearchResults from '../components/product/productSearchResults';
import SearchIcon from '@mui/icons-material/Search';

export const Home: React.FC = () => {
    const [products, setProducts] = useState([]);
    const [favourites, setFavourites] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const getProducts = async () => {
        const fetchedProducts = await getAllProducts();
        const filteredProducts = favourites
            ? fetchedProducts.filter((product: any) => product.isFavourite)
            : fetchedProducts;
        setProducts(filteredProducts);
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        getProducts();
    }, [favourites]);

    const toggleFavourites = () => {
        setFavourites(!favourites);
    };

    return (
        <>
            <Typography fontSize={36} fontWeight={700}>
                Products
            </Typography>
            <Grid container spacing={2} style={{ marginTop: "30px" }}>
                <Grid item xs={3}>
                    <Input placeholder="Search for product" onChange={handleSearch} style={{ width: "100%" }} />
                </Grid>
                <Grid item xs={2}>
                    <Button
                        onClick={() => { }}
                        style={{ backgroundColor: "#001EB9", color: "white", padding: "10px", width: "100%", borderRadius: "50px" }}
                        variant='contained'
                        startIcon={<SearchIcon />}
                    >
                        Search
                    </Button>
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={3}>
                    <Button onClick={() => navigate('product/create')} style={{ backgroundColor: "#001EB9", color: "white", padding: "10px", width: "100%" }}>New Product</Button>
                </Grid>
                <Grid item xs={1} container justifyContent="flex-end">
                    <Button onClick={toggleFavourites} style={{ border: "1px solid #001EB9" }}>
                        {favourites ? <StarIcon /> : <StarBorderIcon />}
                    </Button>
                </Grid>
            </Grid>

            {searchTerm === '' ? (
                <ProductTable products={products} />
            ) : (
                <ProductSearchResults />
            )}
        </>
    );
};
