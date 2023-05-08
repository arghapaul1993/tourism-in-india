import React from 'react'
import Styles from "./navabar.module.css"
import trip from "../image/trip.svg"
import { Link } from 'react-router-dom'
import ScrollAd from "../home/ScrollAd/ScrollAd"

const Navabar = () => {
  return (
    <div className={Styles.container}>
    <div className={Styles.up}>
        <div className={Styles.left}> 
        <Link to="/">
        <img width="80%" src={trip}/>
        </Link>
        </div>
        <div className={Styles.right}>
           
                <h3>Review</h3>
                <h3>trips</h3>
                <h3>Alert</h3>
                <Link to="form"> <button className={Styles.btn}>Sign in</button></Link>
               
                <h3>Basket</h3>
            
        </div>
    </div>
    <div className={Styles.down}>
    
    <Link  to="/"> <button className={Styles.butt}>Home</button> </Link>
        <button className={Styles.butt}>Destination</button>
        <button className={Styles.butt}>Adventure</button>
    <Link to="/contact"><button className={Styles.butt}> Contact Us</button></Link>
    </div>
   
    </div>
  )
}

export default Navabar