import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Navbar from '../components/Navbar'
import { getAllOrders } from '../services/order'

export function Orders() {
  const [orders, setOrders] = useState([])

  const loadOrders = async () => {
    const result = await getAllOrders()
    if (result['status'] == 'success') {
      setOrders(result['data'])
    } else {
      toast.error(result['error'])
    }
  }

  useEffect(() => {
    loadOrders()
  }, [])

  return (
    <>
      <Navbar />
      <div className='container'>
        <h1 className='title'>Orders</h1>
        {orders.length == 0 && (
          <h5 style={{ textAlign: 'center' }}>There are no orders</h5>
        )}

        {orders.length > 0 && (
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>No</th>
                <th>Order No</th>
                <th>Date</th>
                <th>Total Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{order['id']}</td>
                    <td>{order['createdTimestamp']}</td>
                    <td>{order['totalAmount']}</td>
                    <td>
                      <button className='btn btn-success'>Details</button>
                      <button className='btn btn-danger ms-2'>Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  )
}

export default Orders
