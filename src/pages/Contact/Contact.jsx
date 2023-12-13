import React from 'react'
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import apiUrl from '../../utils/api';

const Contact = () => {
    const [message, setMessage] = useState({
        username: '',
        mobile: '',
        description: ''
    })

    const messageHandler = async () => {
        try {
            await axios.post(`${apiUrl.contactAPI}/create`,message)
            toast.success('Message sent successfully')
        } catch (error) {
            toast.error('Error occured')
            console.log(error);
        }
    }
    

    return (
        <div className="container my-4">
            <div className='input-product row'>
                <div className="col-lg-6">
                    <div className="col-lg-12 mb-2">
                        <input onChange={(e) => setMessage({...message, username:e.target.value})} className='form-control' type="text" name="productname" placeholder='Enter username' />
                    </div>
                    <div className="col-lg-12 mb-2">
                        <input onChange={(e) => setMessage({...message, mobile:e.target.value})} className='form-control' type="number" min="0" name="productprice" placeholder='Enter mobile' />
                    </div>
                    <div className="col-lg-12 mb-2">
                        <textarea onChange={(e) => setMessage({...message, description:e.target.value})} className='form-control' type="text" min="0" name="productprice" placeholder='Enter description' />
                    </div>
                    <div className='col-lg-12 mb-2'>
                        <button onClick={messageHandler}  className='btn btn-success form-control'>Send message</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus, illum provident sunt alias corrupti optio accusamus, 
                        aliquid labore error quasi, fugiat doloribus commodi fuga! Cumque, nobis sint. Maxime, expedita?</h2>
                </div>

            </div>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
        </div>
    )
}

export default Contact