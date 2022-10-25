import React, { Fragment, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { ObjectoContext } from '../context/ObjectProvider'

  const Navabr = ( props ) => {
  
    const {user, setUser} = useContext(ObjectoContext)

    return (
      <div>
          <nav className="navbar navbar-expand-lg">

          <div className="container">
            <span className='h4'>Gestor Facturas</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">Dashboard</NavLink>
                </li>
                {
                  user ? (
                    <Fragment>
                      <li className="nav-item">
                        <NavLink to="/facturas" className="nav-link">Facturas</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/clientes" className="nav-link">Clientes</NavLink>
                      </li>
                    </Fragment>
                  ) : (
                    <li className="nav-item">
                      <NavLink to="/register" className="nav-link">Register</NavLink>
                    </li>
                  )
                }
                
                {
                  user ? 
                  (
                    <li className='user-state'>
                      <NavLink to="/" className="nav-link" onClick={() => setUser(false)}>
                        <i className="bi bi-box-arrow-right"></i>
                      </NavLink>
                    </li>
                  ) : 
                  (
                    <li className='user-state'>
                      <NavLink to="/facturas" className="nav-link" onClick={() => setUser(true)}>
                        <i className="bi bi-person-circle"></i>
                      </NavLink>
                    </li>
                  )
                }
                {/* { "login: " + user } */}
              </ul>
              <form className="d-flex" role="search">
                
              </form>
            </div>

          </div>


          </nav>
      </div>
    )
}

export default Navabr