import React from 'react'
import AdminIndex from '../pages/Admin/AdminIndex/AdminIndex'
import AdminLayout from '../layout/AdminLayout'
import { Route, Routes } from 'react-router-dom'
import Messages from '../pages/Admin/Message/Messages'

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path='/manage/index' element={<AdminIndex />} />
        <Route path='/manage/messages' element={<Messages />} />
      </Routes>
    </AdminLayout>
  )
}

export default AdminRoutes