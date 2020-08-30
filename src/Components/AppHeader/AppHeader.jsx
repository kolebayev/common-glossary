import React, { useState } from 'react'
import { Text } from '@gpn-design/uikit/Text'
import {
  Header,
  HeaderModule,
  HeaderLogo,
  HeaderSearchBar,
} from '@gpn-design/uikit/Header'
import { data } from './data.js'
// import { useFlexSearch } from 'react-use-flexsearch'
import FlexSearch from 'flexsearch'

export default function AppHeader() {
  const index = new FlexSearch({
    // default values:
    encode: 'balance',
    tokenize: 'forward',
    threshold: 0,
    async: false,
    worker: false,
    cache: false,
  })
  for (let i = 0; i < data.length; i++) {
    index.add(i, data[i])
  }
  console.log(index)
  // index.search(
  //   'ра',
  //   {
  //     limit: 1000,
  //     threshold: 5,
  //     depth: 3,
  //   },
  //   function (results) {
  //     console.log(results)
  //   }
  // )

  return (
    <Header
      leftSide={
        <>
          <HeaderModule>
            <HeaderLogo>
              <Text as="p" size="l" weight="bold">
                Глоссарий ГПН
              </Text>
            </HeaderLogo>
          </HeaderModule>
          <HeaderModule indent="l">
            <HeaderSearchBar
              placeholder="Я ищу..."
              label="поиск"
              // value={value}
              // onChange={handleChange}
              // onSearch={handleSearch}
            />
          </HeaderModule>
        </>
      }
    />
  )
}
