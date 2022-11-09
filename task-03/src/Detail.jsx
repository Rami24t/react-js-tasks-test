import React from 'react'
import './Details.css'
const Detail = ({title,details}) => {
  return (
    <div className={title}>
    <h3>{title}:</h3>
    <p>{details}</p>
    </div>
  )
}

export default Detail