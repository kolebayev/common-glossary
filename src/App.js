import React, { useState, useEffect } from "react";
import "@gpn-design/uikit/dist/style.css";
import "./App.scss";
import Layout from "./Layout/Layout";
import TableOfContents from "./TableOfContents/TableOfContents";
import Welcome from "./Welcome/Welcome";
import ContentItem from "./ContentItem/ContentItem";
import firebase from "./Firebase";
import { Header, Logo, SearchBar, Input } from "@gpn-design/uikit";

export default function App() {
  const [status, setStatus] = useState("welcome");
  const [items, setItems] = useState(null);

  const passStatus = dbLocation => {
    setStatus(dbLocation);
  };

  useEffect(() => {
    status === "welcome" && setItems(null);
    status === "abbreviations/oil" &&
      firebase.getData("abbreviations", "oil", setItems);
    status === "abbreviations/units" &&
      firebase.getData("abbreviations", "units", setItems);
    status === "glossary/common" &&
      firebase.getData("glossary", "common", setItems);
  }, [status]);

  const headerLeftSide = [
    {
      indent: "l",
      children: (
        <Logo>
          <p className="text text_size_l text_weight_bold">Глоссарий ГПН</p>
        </Logo>
      )
    },
    // {
    //   indent: "l",
    //   children: <SearchBar placeholder={"Я ищу"} label={"Поиск"} />
    // }
  ];

  const headerRIghtSide = [
    {
      indent: "s",
      children: (
        <p className="text text_size_s text_weight_normal text_view_ghost">
          v 1.0.0
        </p>
      )
    }
  ];

  return (
    <div className="App theme theme_breakpoint_gpn-default theme_color_gpn-default theme_control_gpn-default theme_font_gpn-default theme_gap_small theme_size_gpn-default theme_space_gpn-default">
      <Header leftSide={headerLeftSide} rightSide={headerRIghtSide} />
      <Layout
        leftSection={
          <div style={{padding: '20px'}}>
            <Input placeholder='искать' width='default' view='default' wpSize='s' form='default' state=''/>
            <TableOfContents key="tableOfContents" passStatus={passStatus} />
          </div>
        }
        rightSection={
          items === null ? (
            <Welcome />
          ) : (
            <div className="content">
              {items.map(item => {
                return (
                  <ContentItem
                    key={item.id}
                    name={item.name}
                    value={item.description}
                    id={item.id}
                  />
                );
              })}
            </div>
          )
        }
      />
    </div>
  )
};
