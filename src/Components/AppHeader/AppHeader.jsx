import React from 'react'
import { Text } from '@gpn-design/uikit/Text'
import { Header, HeaderModule, HeaderLogo } from '@gpn-design/uikit/Header'
import { Button } from '@gpn-design/uikit/Button'
import './AppHeader.scss'

import Fuse from '../../Fuse/Fuse'

export default function AppHeader(props) {
  const {
    setRenderData,
    setSearchQuery,
    setSearchState,
    setUiIsDefault,
    uiIsDefault,
  } = props

  const handleChange = (e) => {
    let str = e.target.value
    if (str !== ' ') {
      setSearchQuery(str)
      let searchResult = Fuse.search(str)
      setRenderData([...searchResult.map((item) => item.item)])
    }
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
            <div className="TextField TextField_size_m TextField_view_default TextField_form_default TextField_width_full TextField_type_text Header-SearchBarInput">
              <input
                className="TextField-Input"
                placeholder="Я ищу..."
                onChange={handleChange}
                onFocus={() => {
                  setSearchState(true)
                  setRenderData([])
                }}
                // onBlur={() => {
                //   setSearchState(false)
                // }}
                type="text"
              />
            </div>
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
