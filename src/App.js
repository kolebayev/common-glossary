import React, { useState, useEffect, useContext } from "react";
import "@gpn-design/uikit/dist/style.css";
import "./App.scss";
import Layout from "./Layout/Layout";
import TableOfContents from "./TableOfContents/TableOfContents";
import Welcome from './Welcome/Welcome'
// import shownContent from "./Context/shownContent";
// import firebase from "./Firebase";
import { Header, Logo, SearchBar } from '@gpn-design/uikit';

function App() {
  const [content, setContent] = useState('welcome');

  useEffect(() => {
    // firebase.getData("glossary", "common", setParsedData);
  }, []);

  const headerLeftSide = [
    {
      indent: 'l',
      children: (
        <Logo>
          <p className="text text_size_l text_weight_bold">Глоссарий ГПН</p>
        </Logo>
      ),
    },
    {
      indent: 'l',
      children: <SearchBar placeholder={'Я ищу'} label={'Поиск'} />,
    },
  ];

  const headerRIghtSide = [
    {
      indent: 's',
      children: (
        <p className="text text_size_s text_weight_normal text_view_ghost">v 1.0.0</p>
      )
    }
  ];

  return (
    <div className="App theme theme_breakpoint_gpn-default theme_color_gpn-default theme_control_gpn-default theme_font_small theme_gap_small theme_size_gpn-default theme_space_gpn-default">
      <Header leftSide={headerLeftSide} rightSide={headerRIghtSide}/>
      <Layout
        leftSection={<TableOfContents />}
        rightSection={
          content === 'welcome' && <Welcome /> 
        }
      />
    </div>
  );
}

export default App;
