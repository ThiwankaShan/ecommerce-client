import { FormControl, InputLabel, Input, Stack, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Product } from '../../models/product'
import { createProduct } from '../../api/productService'

type ProductFormProps = {
    initProduct?: Product
}

export const ProductForm: React.FC<ProductFormProps> = ({ initProduct }) => {
    const [product, setProduct] = useState({});

    const handleCreateProduct = () => {
        createProduct(product);
    }

    return (
        <>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <Stack spacing={2}>
                    <FormControl>
                        <InputLabel>SKU</InputLabel>
                        <Input
                            onChange={(e) => setProduct({ ...product, sku: e.target.value })}
                            defaultValue={initProduct ? initProduct.sku : ''} />
                    </FormControl>
                    <Stack direction="row" spacing={2}>
                        <FormControl>
                            <InputLabel>Name</InputLabel>
                            <Input
                                onChange={(e) => setProduct({ ...product, name: e.target.value })}
                                defaultValue={initProduct ? initProduct.name : ''} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Quantity</InputLabel>
                            <Input
                                type="number"
                                inputProps={{ min: 0 }}
                                onChange={(e) => setProduct({ ...product, quantity: Number(e.target.value) })}
                                defaultValue={initProduct ? initProduct.quantity : 0} />
                        </FormControl>
                    </Stack>
                    <FormControl>
                        <InputLabel>Description</InputLabel>
                        <TextField
                            onChange={(e) => setProduct({ ...product, description: e.target.value })}
                            defaultValue={initProduct ? initProduct.description : ''} />
                    </FormControl>
                    <FormControl>
                        <Input
                            type='file'
                            inputProps={{ multiple: true }}
                            onChange={(e) => setProduct({ ...product, images: (e.target as HTMLInputElement).files })} />
                    </FormControl>
                    <Button onClick={handleCreateProduct}> Add Product</Button>
                </Stack >
            </div>
        </>
    )
}
