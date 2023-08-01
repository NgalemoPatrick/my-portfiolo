import React from 'react'
import './Cdtsm.css'
const Cdtsm = () => {
  return (
    <div className="cdtsm-style">
        <div className="cdt">
            <div className="city">
            Keller
            </div>
            <div className="temp">
                105°F
            </div>
            <div className="date">
                Tue
            </div>
            <div className="time">
                10:10 AM
            </div>
        </div>
        <div className="sm">
            <div className="icon">
                <img src="" alt="Icon" className="icon-image" />
            </div>
            <div className="txt">
                Switch Mode
            </div>
        </div>
    </div>
  )
}

export default Cdtsm