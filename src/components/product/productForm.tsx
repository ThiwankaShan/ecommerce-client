import { FormControl, InputLabel, Input, Stack, Button, Grid, TextareaAutosize, Alert, AlertTitle, Collapse } from '@mui/material'
import React, { useState } from 'react'
import { Product } from '../../models/product'
import { createProduct } from '../../api/productService'

type ProductFormProps = {
    initProduct?: Product
}

export const ProductForm: React.FC<ProductFormProps> = ({ initProduct }) => {
    const [product, setProduct] = useState({});
    const [alert, setAlert] = useState({ isOpen: false, isSuccess: false });

    const handleCreateProduct = async () => {
        var result = await createProduct(product);
        if (result) {
            setAlert({ isOpen: true, isSuccess: true });
        } else {
            setAlert({ isOpen: true, isSuccess: false });
        }
    }

    return (
        <>
            <div hidden={!alert.isOpen}>
                <Alert severity={alert.isSuccess ? "success" : "error"} onClose={() => { setAlert({ isOpen: false, isSuccess: false }) }}>
                    <AlertTitle>{alert.isSuccess ? "Success" : "Error"}</AlertTitle>
                    {alert.isSuccess ? "Product Created Successfully" : "Failed to create product. Please try again later"}
                </Alert>
            </div>

            <Stack spacing={6} style={{ maxWidth: "800px", width: "100%", justifySelf: "center" }}>
                <FormControl>
                    <InputLabel>SKU</InputLabel>
                    <Input
                        onChange={(e) => setProduct({ ...product, sku: e.target.value })}
                        defaultValue={initProduct ? initProduct.sku : ''} />
                </FormControl>
                <Grid container>
                    <Grid item xs={5} >
                        <FormControl style={{ width: "100%" }}>
                            <InputLabel>Name</InputLabel>
                            <Input
                                onChange={(e) => setProduct({ ...product, name: e.target.value })}
                                defaultValue={initProduct ? initProduct.name : ''}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={2} />

                    <Grid item xs={5} >
                        <FormControl style={{ width: "100%" }}>
                            <InputLabel>Quantity</InputLabel>
                            <Input
                                type="number"
                                inputProps={{ min: 0 }}
                                onChange={(e) => setProduct({ ...product, quantity: Number(e.target.value) })}
                                defaultValue={initProduct ? initProduct.quantity : 0} />
                        </FormControl>
                    </Grid>
                </Grid>
                <FormControl>
                    <TextareaAutosize
                        onChange={(e) => setProduct({ ...product, description: e.target.value })}
                        defaultValue={initProduct ? initProduct.description : ''}
                        placeholder='Description'
                        minRows={4}
                    />
                </FormControl>
                <FormControl>
                    <Input
                        type='file'
                        inputProps={{ multiple: true }}
                        onChange={(e) => setProduct({ ...product, images: (e.target as HTMLInputElement).files })} />
                </FormControl>
                <Button
                    onClick={handleCreateProduct}
                    style={{ backgroundColor: "#001EB9", color: "white", padding: "10px", width: "100%" }}
                >
                    Add Product
                </Button>
            </Stack >
        </>
    )
}
