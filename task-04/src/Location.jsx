import React from 'react'
import { useContext } from 'react'
import { Context } from './Context'

const Location = () => {

    const {state}= useContext(Context);

  return (
    <h2>Location: {state?.location}</h2>
  )
}

export default Location