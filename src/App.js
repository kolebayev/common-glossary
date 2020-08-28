import React, { useState } from 'react'
import { Theme, presetGpnDefault } from '@gpn-design/uikit/Theme'
import AppHeader from './Components/AppHeader/AppHeader'
import Layout from './Components/Layout/Layout'
import Sidebar from './Components/Sidebar/Sidebar'
import Content from './Components/Content/Content'
import './App.css'
import { dbCollections } from './Firebase/dbCollections'

function App() {
  const [activeSidebarItem, setActiveSidebarItem] = useState(
    dbCollections[0].value
  )
  return (
    <div className="App">
      <Theme preset={presetGpnDefault}>
        <AppHeader />
        <Layout
          sidebar={
            <Sidebar
              setActiveSidebarItem={(item) => {
                setActiveSidebarItem(item)
              }}
            />
          }
          content={<Content activeMenuItem={activeSidebarItem} />}
        />
      </Theme>
    </div>
  )
}

export default App
