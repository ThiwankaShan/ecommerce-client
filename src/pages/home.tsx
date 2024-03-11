import React, { useEffect, useState } from 'react'
import ProductTable from '../components/product/productTable';
import { getAllProducts } from '../api/productService';
import { Button, Grid, IconButton, Input, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { ProductSearchResults } from '../components/product/productSearchResults';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export const Home: React.FC = () => {
    const [products, setProducts] = useState([]);
    const [favourites, setFavourites] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const getProducts = async () => {
        const products = await getAllProducts();
        if (favourites) {
            const favProducts = products.filter((product: any) => product.isFavourite);
            setProducts(favProducts);
        } else {
            setProducts(products);
        }
    }

    const handleSearch = (e: any) => {
        setSearchTerm(e.target.value);
        console.log(e.target.value)
    }

    useEffect(() => {
        getProducts();
    }, [favourites]);
    return (
        <>
            <Typography fontSize={36} fontWeight={900}>
                Products
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Input placeholder="Search" onChange={handleSearch} />
                </Grid>
                <Grid item xs={1}>

                </Grid>
                <Grid item xs={2}>
                    <Button onClick={() => navigate("product/create")}>New Product</Button>
                </Grid>
                <Grid item xs={1}>
                    <IconButton onClick={() => setFavourites(!favourites)}>
                        {favourites ? <StarIcon /> : <StarBorderIcon />}
                    </IconButton>
                </Grid>
            </Grid>

            {searchTerm == "" ? (
                <ProductTable products={products} />
            ) : (
                <ProductSearchResults />
            )}

        </>
    );
}
