import React, { useEffect } from 'react'
import firebase from '../../Firebase/Firebase'

export default function Content(props) {
  useEffect(() => {
    // firebase.getData(props.activeMenuItem, 'units', (x) => console.log(x))
  })
  return <div className="content">{props.activeMenuItem}</div>
}
