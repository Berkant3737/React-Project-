import React from 'react'
import Navbar from '../../Main Components/Navbartest/Navbar'
import WehicleFive from "./WehicleFive";
import Footer from '../../Main Components/Footer/Footer';

function Wehicle() {
  return (
    <div>
      <Navbar/>
      <─░temBanner/>
      <WehicleFive/>
      <Footer/>
    </div>
  )
}
const ─░temBanner =()=> {
    return (
      <div>
          <div className="item-banner">
              <div className="container-fluid">
                  <div className="row text-start">
                      <div className="col-12">
                         <h1>MERCEDES S CLASS</h1>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
export default Wehicle
