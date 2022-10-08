import React, { useState, useEffect } from 'react'

const Modalku = (
  { onClick, message = 'Server in trouble! please check your server' }
) => {

  return (
    <div className={`modal is-active`}>
      <div className="modal-background"></div>

      <div className="modal-content">
        <div className="box">
          <p>{message}</p>
        </div>
      </div>

      <button className="modal-close is-large" onClick={onClick}></button>
    </div>
  )
}

export default Modalku