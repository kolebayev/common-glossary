import React, { useState } from 'react'
import { Theme, presetGpnDefault } from '@gpn-design/uikit/Theme'
import { abbreviations_oil } from './Fuse/abbreviations_oil'

import AppHeader from './Components/AppHeader/AppHeader'
import Layout from './Components/Layout/Layout'
import Sidebar from './Components/Sidebar/Sidebar'
import Content from './Components/Content/Content'

import './App.css'

function App() {
  const [renderData, setRenderData] = useState(abbreviations_oil)
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <div className="App">
      <Theme preset={presetGpnDefault}>
        <AppHeader
          setRenderData={(arr) => setRenderData(arr)}
          setSearchQuery={(query) => setSearchQuery(query)}
        />
        <Layout
          sidebar={<Sidebar setRenderData={(arr) => setRenderData(arr)} />}
          content={
            <Content searchQuery={searchQuery} renderData={renderData} />
          }
        />
      </Theme>
    </div>
  )
}

export default App
