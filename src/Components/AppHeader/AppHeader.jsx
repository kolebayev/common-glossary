import React, { useState } from 'react'
import { Text } from '@consta/uikit/Text'
import {
  Header,
  HeaderModule,
  HeaderLogo,
  HeaderSearchBar,
} from '@consta/uikit/Header'
import { Button } from '@consta/uikit/Button'
import './AppHeader.scss'

import Fuse from '../../Fuse/Fuse'

export default function AppHeader(props) {
  const {
    setRenderData,
    setSearchQuery,
    setSearchState,
    setUiIsDefault,
    uiIsDefault,
    searchQuery,
  } = props

  const handleChange = ({ value }) => {
    setSearchState(true)
    if (value === null) {
      value = ''
    }
    setSearchQuery(value)
    let searchResult = Fuse.search(value)
    setRenderData([...searchResult.map((item) => item.item)])
  }

  return (
    <Header
      className="appheader"
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
              onChange={handleChange}
              value={searchQuery}
            />
          </HeaderModule>
        </>
      }
      rightSide={
        <Button
          label={uiIsDefault ? 'Включить темную тему' : 'Включить светлую тему'}
          onClick={() => setUiIsDefault(!uiIsDefault)}
          view="ghost"
        />
      }
    />
  )
}
