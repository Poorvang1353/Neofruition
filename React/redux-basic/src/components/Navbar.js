import React from 'react'
import { useSelector } from 'react-redux/es/exports'

export default function Navbar() {
    const amount = useSelector(state => state.amount)
  return (
    <div>
       <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid">
          <a className="navbar-brand" href="/" >
            NFTTECH
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  href="/">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  href="/">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">Disabled</a>
              </li>
            </ul>
            <div>
                <button className='btn btn-primary'>Your Balance: {amount}</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
