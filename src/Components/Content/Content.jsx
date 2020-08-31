import React, { useEffect, useState } from 'react'
import firebase from '../../Firebase/Firebase'
import './Content.scss'

export default function Content(props) {
  const { activeMenuItem, searchResult } = props
  const [items, setItems] = useState([])

  useEffect(() => {
    firebase.getData(
      activeMenuItem.split('-')[0],
      activeMenuItem.split('-')[1],
      setItems
    )
  }, [activeMenuItem])

  useEffect(() => {
    // console.log(searchResult)
    setItems([])
    setItems([...searchResult])
  }, [searchResult])

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
