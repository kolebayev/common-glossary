import React, { useState, useEffect } from 'react'
import { Text } from '@gpn-design/uikit/Text'
import {
  Header,
  HeaderModule,
  HeaderLogo,
  // HeaderSearchBar,
} from '@gpn-design/uikit/Header'
import { data } from './data.js'

// import { TextField } from '@gpn-design/uikit/TextField'

// import Fuse from 'fuse.js'
import Fuse from '../../Fuse/Fuse'
// https://fusejs.io/examples.html#nested-search

import flex from '../../FlexSearch/FlexSearch'

// import lunr from 'lunr'
// import lunr from './lunr.es6'
// import './lunr.ru.js'
// import './lunr.stemmer.support.js'
import 'lunr-languages/lunr.stemmer.support'
import 'lunr-languages/lunr.ru'

// http://elasticlunr.com/docs/index.html

export default function AppHeader(props) {
  // const data = [
  //   {
  //     name: 'Lunr',
  //     text: 'Like Solr, but much smaller, and not as bright.',
  //   },
  //   {
  //     name: 'React',
  //     text: 'A JavaScript library for building user interfaces.',
  //   },
  //   {
  //     name: 'Lodash',
  //     text:
  //       'A modern JavaScript utility library delivering modularity, performance & extras.',
  //   },
  // ]

  const { setSearchQueryString } = props
  const [searchQuery, setSearchQuery] = useState('')

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  // let idx = lunr(function () {
  //   this.ref('id')
  //   this.field('text')

  //   data.forEach(function (doc, i) {
  //     console.log()
  //     this.add({ ...doc, id: i })
  //   }, this)
  // })

  const btn = () => {
    console.log(Fuse.test('Ароматические'))
    // flex.test('Ароматические')
    // console.log(data)
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
