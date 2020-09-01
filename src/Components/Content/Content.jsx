import React from 'react'
import { Text } from '@gpn-design/uikit/Text'
import Highlighter from 'react-highlight-words'

import './Content.scss'

export default function Content(props) {
  const { renderData, searchQuery } = props

  let clearedData = renderData
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort(function (a, b) {
      return a.name.localeCompare(b.name)
    })

  return (
    <div className="content">
      {(clearedData.length === 0) & (searchQuery.length !== 0) ? (
        <Text view="secondary" size="xl">
          По запросу{' '}
          <Text
            as="span"
            view="secondary"
            size="xl"
            weight="bold"
            fontStyle="italic"
          >
            {searchQuery}
          </Text>{' '}
          результатов нет
        </Text>
      ) : (
        clearedData.map((item, i) => {
          return (
            <div key={i} className="list-item">
              <Text
                view="secondary"
                size="2xl"
                weight="bold"
                className="list-item_name"
              >
                {searchQuery.length > 0 ? (
                  <Highlighter
                    highlightClassName="list-item_highlight"
                    searchWords={[searchQuery]}
                    autoEscape={true}
                    textToHighlight={item.name}
                  />
                ) : (
                  item.name
                )}
              </Text>
              <Text size="l" className="list-item_description">
                {searchQuery.length > 0 ? (
                  <Highlighter
                    highlightClassName="list-item_highlight"
                    searchWords={[searchQuery]}
                    autoEscape={true}
                    textToHighlight={item.description}
                  />
                ) : (
                  item.description
                )}
              </Text>
            </div>
          )
        })
      )}
    </div>
  )
}
