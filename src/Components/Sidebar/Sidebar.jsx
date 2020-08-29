import React, { useState, useEffect } from 'react'
import { Text } from '@gpn-design/uikit/Text'
import './Sidebar.scss'
import { dbCollections } from '../../Firebase/dbCollections'
// import firebase from '../../Firebase/Firebase'

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      {dbCollections.map((collection, i) => {
        return (
          <div className="sidebar_section">
            <Text
              key={i}
              align="left"
              view="ghost"
              size="s"
              transform="uppercase"
              spacing="xs"
              className="sidebar_section-name"
            >
              {collection.description}
            </Text>
            {collection.docs.map((doc, i) => {
              return (
                <div
                  key={i}
                  className={`sidebar_list-item ${
                    props.activeSidebarItem ===
                      collection.value + '-' + doc.value &&
                    'sidebar_list-item-active'
                  }`}
                  onClick={() => {
                    props.setActiveSidebarItem(
                      collection.value + '-' + doc.value
                    )
                  }}
                >
                  <Text align="left" view="link-minor" size="xl">
                    {doc.description}
                  </Text>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
