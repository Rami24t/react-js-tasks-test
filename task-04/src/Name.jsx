import React, { useContext } from 'react'
import { Context } from './Context';

const Name = () => {

 const {state}= useContext(Context);

  return (
    <div>    <h2>Name: {state?.name}</h2>
    </div>
  )
}

export default Name