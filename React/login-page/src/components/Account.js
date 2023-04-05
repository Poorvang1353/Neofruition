import React from 'react'
import classes from './Account.module.css'
function Account(props) {
  return (
    <li className={classes.movie}>
    <h2>{props.userName}</h2>
    <h3>{props.quantity}</h3>
    <p>{props.symbol}</p>
  </li>
  )
}

export default Account
