import React from 'react'
import { useContext } from 'react'
import { Context } from './Context'

export default function Inputs(){
const {state,dispatch} = useContext(Context);
  return (
    <div>
    <label htmlFor="name">Update Name</label>
    <input name='name' type="text" value={state.name} onChange={(e)=>{dispatch({type: e.target.name, payload:e.target.value})}} />
    <label htmlFor="location">Update Location</label>
    <input name='location' type="text"  value={state.location} onChange={(e)=>{dispatch({type: e.target.name, payload:e.target.value})}} />
    </div>
  )
}