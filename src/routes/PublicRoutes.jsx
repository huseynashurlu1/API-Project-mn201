import React from 'react'
import Layout from '../layout/Layout'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/Index/HomePage';
import Products from '../pages/Products/Products';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import ProductAdd from '../pages/ProductAdd/ProductAdd';
import Contact from '../pages/Contact/Contact';

const PublicRoutes = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:id' element={<ProductDetails />} />
                <Route path='/products/add' element={<ProductAdd />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Layout>
    )
}

export default PublicRoutes