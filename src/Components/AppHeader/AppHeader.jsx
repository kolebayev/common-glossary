import React from 'react'
import { Text } from '@consta/uikit/Text'
import {
  Header,
  HeaderModule,
  HeaderLogo,
  HeaderSearchBar,
} from '@consta/uikit/Header'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { IconSun } from '@consta/uikit/IconSun'
import { IconMoon } from '@consta/uikit/IconMoon'
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

  const items = [
    {
      name: 'default',
      icon: IconSun,
    },
    {
      name: 'display',
      icon: IconMoon,
    },
  ]

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
        <>
          <ChoiceGroup
            value={uiIsDefault === true ? items[0] : items[1]}
            onChange={({ value }) => {
              setUiIsDefault(value.name === 'display' ? false : true)
            }}
            onlyIcon
            getLabel={(item) => item.name}
            getIcon={(item) => item.icon}
            items={items}
            multiple={false}
            size={'s'}
          />
        </>
      }
    />
  )
}
