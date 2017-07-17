import React from 'react'
import { Link } from 'react-router'

const CerealShow = props => {
  return (
    <div>
    <ul>
      <li>
      <h2><Link to={`cereals/${props.id}`}>{props.name}</Link></h2>
      </li>
      </ul>
    </div>
  )
}
export default CerealShow
