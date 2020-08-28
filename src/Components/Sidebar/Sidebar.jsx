import React, { useState, useEffect } from 'react'
import { Text } from '@gpn-design/uikit/Text'
import './Sidebar.scss'
import { dbCollections } from '../../Firebase/dbCollections'
import firebase from '../../Firebase/Firebase'

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      {/* {dbCollections.map((collection, i) => {
        firebase.getDocsFromCollection(collection.value, (item) =>
          setList((prevState) => [...prevState, item])
        )

        return (
          <div
            key={i}
            className="sidebar_list-item"
            onClick={() => {
              props.setActiveSidebarItem(collection.value)
            }}
          >
            <Text align="left" view="link-minor" size="xl">
              {capitalizeFirstLetter(collection.description)}
            </Text>
          </div>
        )
      })} */}
    </div>
  )
}
