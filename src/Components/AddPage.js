import React from 'react'
import Add from '../Containers/Add'

export default function AddPage(props) {
  return (
    <Add businessTotal={props.businesses.length}/>
  )
}
