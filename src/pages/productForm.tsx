import React from 'react'
import { ProductForm } from '../components/product/productForm'
import { Typography } from '@mui/material'

export const ProductFormPage: React.FC = () => {
    return (
        <div>
            <Typography>Add New Product</Typography>
            <ProductForm />
        </div>
    )
}
