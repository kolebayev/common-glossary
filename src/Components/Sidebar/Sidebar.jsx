import React, { useState, useEffect } from 'react'
import { Text } from '@gpn-design/uikit/Text'
import './Sidebar.scss'
import { sidebarTree } from './sidebarTree'
import { glossary_common } from '../../Fuse/glossary_common'
import { abbreviations_oil } from '../../Fuse/abbreviations_oil'
import { abbreviations_units } from '../../Fuse/abbreviations_units'

export default function Sidebar(props) {
  const { searchState, setSearchState, setSearchQuery } = props

  const data = {
    abbreviations_oil: abbreviations_oil,
    abbreviations_units: abbreviations_units,
    glossary_common: glossary_common,
  }

  const [activeSidebarItem, setActiveSidebarItem] = useState(
    sidebarTree[0].value + '_' + sidebarTree[0].docs[0].value
  )

  useEffect(() => {
    searchState
      ? setActiveSidebarItem('')
      : setActiveSidebarItem(
          sidebarTree[0].value + '_' + sidebarTree[0].docs[0].value
        )
  }, [searchState])

  return (
    <div className="sidebar">
      {sidebarTree.map((collection, i) => {
        return (
          <div key={i} className="sidebar_section">
            <Text
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
                    activeSidebarItem === collection.value + '_' + doc.value &&
                    'sidebar_list-item-active'
                  }`}
                  onClick={() => {
                    setSearchState(false)
                    setSearchQuery('')
                    setActiveSidebarItem(collection.value + '_' + doc.value)
                    props.setRenderData(
                      [...data[collection.value + '_' + doc.value]].sort(
                        function (a, b) {
                          return a.name.localeCompare(b.name)
                        }
                      )
                    )
                  }}
                >
                  <Text align="left" view="primary" size="xl">
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
