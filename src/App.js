import React, { useState } from 'react'
import { Theme, presetGpnDefault, presetGpnDisplay } from '@consta/uikit/Theme'
import { abbreviations_oil } from './Fuse/abbreviations_oil'

import AppHeader from './Components/AppHeader/AppHeader'
import Layout from './Components/Layout/Layout'
import Sidebar from './Components/Sidebar/Sidebar'
import Content from './Components/Content/Content'

import './App.css'

function App() {
  const [renderData, setRenderData] = useState(abbreviations_oil)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchState, setSearchState] = useState(false)
  const [uiIsDefault, setUiIsDefault] = useState(true)

  return (
    <Theme preset={uiIsDefault ? presetGpnDefault : presetGpnDisplay}>
      <div className="App">
        <AppHeader
          setRenderData={(arr) => setRenderData(arr)}
          setSearchQuery={(query) => setSearchQuery(query)}
          setSearchState={(state) => setSearchState(state)}
          setUiIsDefault={(theme) => setUiIsDefault(theme)}
          uiIsDefault={uiIsDefault}
          searchQuery={searchQuery}
        />
        <Layout
          sidebar={
            <Sidebar
              setRenderData={(arr) => setRenderData(arr)}
              setSearchQuery={(query) => setSearchQuery(query)}
              setSearchState={(state) => setSearchState(state)}
              searchState={searchState}
            />
          }
          content={
            <Content searchQuery={searchQuery} renderData={renderData} />
          }
        />
      </div>
    </Theme>
  )
}

export default App
