import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './product.css'
import ProductCard from '../../components/dynamic/Card/ProductCard'
import Spinner from '../../components/dynamic/Loader/Spinner'
import apiUrl from '../../utils/api'
import Categories from '../../components/dynamic/Categories/Categories'
import { NavLink } from 'react-router-dom'
import { IoMdAdd } from "react-icons/io";

const Products = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = async () => {
      await axios.get(`${apiUrl.productAPI}`)
        .then(response => setItems(response.data))
        .catch(error => console.log(error))
    }

    getItems()
  }, [])


  const filterProductsByCategory = async (e) => {
    if (e.length > 0) {
      await axios.get(`${apiUrl.productAPI}/category/${e}`)
        .then(response => setItems(response.data))
        .catch(error => console.log(error))
    }
  }


  if (items.length === 0) {
    return <Spinner />
  }

  return (
    <div className='container my-4'>

      <div className="row my-2">
        <div onChange={(e) => filterProductsByCategory(e.target.value)} className="col-lg-10">
          <Categories />
        </div>
        <div className='col-lg-2'>
          <NavLink to='/products/add' className='btn btn-success mt-2 form-control'><IoMdAdd /> Add products</NavLink>
        </div>
      </div>

      <div className='row gy-4'>
        {
          items && items.map(item => {
            return (
              <ProductCard data={item} key={item.id} />
            )
          })
        }
      </div>

    </div>
  )
}

export default Products