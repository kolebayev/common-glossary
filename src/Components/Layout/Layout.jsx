import React from 'react'
import './Layout.scss'

export default function Layout(props) {
  const { sidebar, content } = props
  return (
    <div className="tpl-layout tpl-layout_structure_20-80">
      <div className="tpl-layout__section layout_sidebar">{sidebar}</div>
      <div className="tpl-layout__section">{content}</div>
    </div>
  )
}
