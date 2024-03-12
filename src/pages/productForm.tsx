import React from 'react'
import { ProductForm } from '../components/product/productForm'
import { Typography } from '@mui/material'

export const ProductFormPage: React.FC = () => {
    return (
        <>
            <Typography fontSize={36} fontWeight={700}>
                Add New Product
            </Typography>
            <div className='content-wrapper' style={{ marginTop: "30px" }}>
                <ProductForm />
            </div>
        </>
    )
}
