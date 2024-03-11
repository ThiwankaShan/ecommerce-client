import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Image, Product } from '../../models/product';

type ProductTableProps = {
    products: Product[];
};

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
    const onFavouriteClick = (product: Product) => {
        console.log("favourite clicked", product);
    }

    const onEditClick = (product: Product) => {
        console.log("edit clicked", product);
    }

    const onDeleteClick = (product: Product) => {
        console.log("delete clicked", product);
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>SKU</TableCell>
                        <TableCell align="right">Image</TableCell>
                        <TableCell align="right">Product Name</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {product.sku}
                            </TableCell>
                            <TableCell align="right">
                                {product.images.length !== 0 ? (
                                    product.images.map((image: Image) => (
                                        <img
                                            key={image.fileName}
                                            width="60"
                                            height="60"
                                            style={{ padding: '2px' }}
                                            src={`http://localhost:3000/${image.fileName}`}
                                            alt="Product Image"
                                        />
                                    ))
                                ) : (
                                    'No Images'
                                )}
                            </TableCell>
                            <TableCell align="right">{product.name}</TableCell>
                            <TableCell align="right">{product.quantity}</TableCell>
                            <TableCell align="right">
                                <IconButton onClick={() => onEditClick(product)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => onDeleteClick(product)}>
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton onClick={() => onFavouriteClick(product)}>{product.isFavourite ? <StarIcon /> : <StarBorderIcon />}</IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProductTable;
