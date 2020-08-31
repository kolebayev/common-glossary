import React, { useState, useEffect } from 'react'
import { Text } from '@gpn-design/uikit/Text'
import {
  Header,
  HeaderModule,
  HeaderLogo,
  // HeaderSearchBar,
} from '@gpn-design/uikit/Header'
// import { data } from './data.js'

// import { TextField } from '@gpn-design/uikit/TextField'

// import Fuse from 'fuse.js'
// import Fuse from '../../Fuse/Fuse'
// https://fusejs.io/examples.html#nested-search

import flex from '../../FlexSearch/FlexSearch'

// http://elasticlunr.com/docs/index.html

export default function AppHeader(props) {
  const { setSearchQueryString } = props
  const [searchQuery, setSearchQuery] = useState('')

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const btn = () => {
    flex.test(searchQuery)
  }

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
            {/* <HeaderSearchBar
              placeholder="Я ищу..."
              label="поиск"
              // value={'123'}
              onChange={handleChange}
              // onSearch={handleSearch}
            /> */}
            <input onChange={handleChange} />
            <button onClick={btn}>perform</button>
            {searchQuery}
            {/* <TextField
              width="default"
              size="m"
              view="default"
              type="text"
              // maxLength="20"
              placeholder="Я ищу..."
              onChange={handleChange}
            /> */}
          </HeaderModule>
        </>
      }
    />
  )
}
