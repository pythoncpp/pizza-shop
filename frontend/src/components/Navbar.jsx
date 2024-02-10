import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

export function Navbar() {
  const navigate = useNavigate()

  // get a selector
  const cart = useSelector((state) => state.cart)

  const onLogout = () => {
    sessionStorage.removeItem('token')
    navigate('/')
  }

  return (
    <nav className='navbar navbar-expand-lg  bg-primary' data-bs-theme='dark'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' aria-current='page' to='/home'>
                Home
              </Link>
            </li>
            <li>
              <Link className='nav-link' aria-current='page' to='/cart'>
                Cart ({cart.items.length})
              </Link>
            </li>
            <li>
              <Link className='nav-link' aria-current='page' to='/orders'>
                Orders
              </Link>
            </li>
            <li>
              <button
                onClick={onLogout}
                className='nav-link'
                aria-current='page'
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
