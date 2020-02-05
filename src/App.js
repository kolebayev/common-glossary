import React, { useState, useEffect, useContext } from "react";
import "@gpn-design/uikit/dist/style.css";
import "./App.scss";
import Layout from "./Layout/Layout";
import TableOfContents from "./TableOfContents/TableOfContents";
import shownContent from "./Context/shownContent";
import firebase from "./Firebase";

function App() {
  const [parsedData, setParsedData] = useState('');

  useEffect(() => {
    firebase.getData("glossary", "common", setParsedData);
  }, []);

  return (
    <div className="App theme theme_breakpoint_gpn-default theme_color_gpn-default theme_control_gpn-default theme_font_small theme_gap_small theme_size_gpn-default theme_space_gpn-default">
      <header
        style={{
          width: "100vw",
          height: "65px",
          backgroundColor: "var(--color-bg-default)",
          borderBottom: "1px solid var(--color-bg-border)",
          position: "sticky",
          top: "0",
          boxSizing: "border-box"
        }}
      ></header>
      <Layout
        leftSection={<TableOfContents />}
        rightSection={
          <div>
            {/* {initialState} */}
            {/* {
              console.log(parsedData)
            } */}
            {parsedData === '' ? null : parsedData.map((items, index) => {
              return (
                  <>
                  {Object.keys(items).map(key => {
                    return (
                      <div key={key + index}>
                        {key}: {items[key]} 
                      </div>
                    );
                  })}
                  </>
              );
            })}
            {/* <shownContent.Provider value={initialState}>

              <shownContent.Consumer>
                {initialState ? <div>{initialState}</div> : null}
              </shownContent.Consumer>

            </shownContent.Provider> */}
          </div>
        }
      />
    </div>
  );
}

export default App;
