import React, { useContext } from 'react'
import './home.css'
import { BlogContext } from '../../context/BlogContext'

const HomePage = () => {
  const context = useContext(BlogContext)
  return (
    <div className='container main-gif'>
      <div className="col-lg-12">
        <h1 className={context.theme === 'light' ? 'text-white' : 'text-dark'}>FRONT-END DEVELOPMENT</h1>
        <img src="https://i.gifer.com/embedded/download/LgnH.gif" alt="..." />

      </div>
    </div>
  )
}

export default HomePage