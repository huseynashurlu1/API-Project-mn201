import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import apiUrl from '../../../utils/api'
import Spinner from '../Loader/Spinner'

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            await axios.get(`${apiUrl.productAPI}/categories`)
                .then(response => setCategories(response.data))
                .catch(error => console.log(error))
        }

        getCategories()
    }, [])

    if (categories.length === 0) {
        return <Spinner />
    }

    return (
        <div>

            <select name='categories' className="form-select my-2">
                <option value=''>Select category</option>
                {
                    categories && categories.map((category, index) => {
                        return (
                            <option value={category} key={index}>
                                {category}
                            </option>
                        )
                    })
                }
            </select>

        </div>
    )
}

export default Categories