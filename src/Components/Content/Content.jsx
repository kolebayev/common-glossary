import React, { useEffect, useState } from 'react'
import firebase from '../../Firebase/Firebase'
import './Content.scss'

export default function Content(props) {
  const { activeMenuItem } = props
  const [items, setItems] = useState([])

  useEffect(() => {
    firebase.getData(
      activeMenuItem.split('-')[0],
      activeMenuItem.split('-')[1],
      setItems
    )
  }, [activeMenuItem])

  return (
    <div className="content">
      {items.map((item, i) => {
        return (
          <div key={i}>{item.name + ' ——— ' + item.description + '\n'} </div>
        )
      })}
    </div>
  )
}
