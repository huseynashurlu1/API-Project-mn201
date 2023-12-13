import React, { useState } from 'react'
import './add.css'
import Categories from '../../components/dynamic/Categories/Categories'
import toast, { Toaster } from 'react-hot-toast';

const ProductAdd = () => {
    const [product, setProduct] = useState({
        title: '',
        price: '',
        category: ''
    })

    const productHandler = () => {
        if (product.title.length > 0  && product.price > 0 && product.category !== '') {
            toast.success('Product added successfully!')
        }
        else{
            toast.error("Error occurred!")
        }
    }

    return (
        <div className="container my-4">
            <div className='input-product row'>
                <div className="col-lg-4">
                    <input onChange={(e) => setProduct({ ...product, title: e.target.value })} className='form-control' type="text" name="productname" placeholder='Enter product title' />
                </div>
                <div className="col-lg-4">
                    <input onChange={(e) => setProduct({ ...product, price: e.target.value })} className='form-control' type="number" min="0" name="productprice" placeholder='Enter product price' />
                </div>
                <div onChange={(e) => setProduct({ ...product, category: e.target.value })} className="col-lg-4">
                    <Categories  />
                </div>
                <div className='col-lg-12'>
                    <button onClick={productHandler} className='btn btn-success mt-2 form-control'>Add Product</button>
                </div>
            </div>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
        </div>

    )
}

export default ProductAdd