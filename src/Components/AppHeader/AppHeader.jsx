import React from 'react'
import { Text } from '@gpn-design/uikit/Text'
import {
  Header,
  HeaderModule,
  HeaderLogo,
  HeaderSearchBar,
} from '@gpn-design/uikit/Header'

export default function AppHeader() {
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
