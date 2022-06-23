import React from 'react'

import Products from '../components/Products'

function Home() {
  return (
     <div className="hero">
        <div className="card bg-dark text-white border-0">
           <img src='/' className="card-img" alt='/' height="550px" />
           <div className="card-img-overlay d-flex flex-column justify-content-center">
               <div className="container">
                  <h4 className="card-title display-3 fw-bolder mb-0">NEW ARRIVALS</h4>
                  <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
               </div>
            </div>
        </div>
        <Products/>
    </div>
  )
}

export default Home