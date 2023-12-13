import axios from 'axios'
import React, { useEffect, useState } from 'react'
import apiUrl from '../../../utils/api'
import { CiRead, CiTrash } from "react-icons/ci";
import toast, { Toaster } from 'react-hot-toast';


const Messages = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const getMessages = async () => {
      await axios.get(`${apiUrl.contactAPI}/all`)
        .then(response => setMessages(response.data))
        .catch(error => console.log(error))
    }

    getMessages()
  }, [])

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`${apiUrl.contactAPI}/${id}`)
      toast.success('Message deleted successfully')
      setMessages(prevData => prevData.filter(item => item._id !== id));
    } catch (error) {
      toast.error('Error occured while delete message')
    }
  }

  const statusHandler = async (id) => {
    try {
      await axios.put(`${apiUrl.contactAPI}/${id}`, { status: true })

      setMessages(prevData =>prevData.map(item => item._id === id ? { ...item, status: true } : item));
    } catch (error) {
      
    }
  }

  if(messages.length === 0 ) {
    return <h3>Mesaj yoxdur</h3>
  }

  return (
    <div>
      <h3>Bütün Mesajlar ({messages.length})</h3>
      <table className="table">
        <thead>
          <tr>
            <th>İstifadəçi adı</th>
            <th>Telefon</th>
            <th>Mesaj</th>
            <th>Statusu</th>
            <th>Əməliyyatlar</th>
          </tr>
        </thead>
        <tbody>
            {
              messages && messages.map(item => {
                return(
                  <tr key={item._id}>
                    <td>{item.username}</td>
                    <td>{item.mobile}</td>
                    <td>{item.description}</td>
                    <td className={item.status ? 'text-success' : 'text-danger'}>{item.status ? 'Oxunmuş' : 'Oxunmamış'}</td>
                    <td>
                      <button onClick={() => statusHandler(item._id)} className='btn btn-sm btn-warning'><CiRead  /></button>
                      <button onClick={() => deleteHandler(item._id)} className='btn btn-sm btn-danger ms-2'><CiTrash  /></button>
                    </td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>
      <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
    </div>
  )
}

export default Messages