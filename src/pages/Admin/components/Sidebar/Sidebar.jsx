import React from 'react'
import { Link } from 'react-router-dom'
import { CiHome, CiMail } from "react-icons/ci";


const Sidebar = () => {
  return (
    <aside>
        <ul>
          <li>
            <Link to='/manage/index'><CiHome /> Ana səhifə</Link>
          </li>
          <li>
            <Link to='/manage/messages'><CiMail /> Bildirişlər</Link>
          </li>
        </ul>
    </aside>
  )
}

export default Sidebar