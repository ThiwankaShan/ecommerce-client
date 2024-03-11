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
        <TableContainer component={Paper} style={{ marginTop: "20px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow >
                        <TableCell className="tableHead">SKU</TableCell>
                        <TableCell className="tableHead" align="right">Image</TableCell>
                        <TableCell className="tableHead" align="left" style={{ paddingLeft: "80px" }}>Product Name</TableCell>
                        <TableCell className="tableHead" align="center">Quantity</TableCell>
                        <TableCell className="tableHead" align="right"></TableCell>
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
                                            style={{ padding: '2px', borderRadius: '10px' }}
                                            src={`http://localhost:3000/${image.fileName}`}
                                            alt="Product Image"
                                        />
                                    ))
                                ) : (
                                    'No Images'
                                )}
                            </TableCell>
                            <TableCell align="left" style={{ paddingLeft: "80px" }}>{product.name}</TableCell>
                            <TableCell align="center">{product.quantity}</TableCell>
                            <TableCell align="right" >
                                <IconButton onClick={() => onDeleteClick(product)} style={{ color: "#001EB9" }}>
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton onClick={() => onEditClick(product)} style={{ color: "#001EB9" }} >
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => onFavouriteClick(product)} style={{ color: "#001EB9" }}>{product.isFavourite ? <StarIcon /> : <StarBorderIcon />}</IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProductTable;
