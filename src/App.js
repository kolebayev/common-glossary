import React, { useState, useEffect } from "react";
import "./App.css";
import firebase from "./Firebase";
import '@gpn-design/uikit/dist/style.css';
import { Button } from '@gpn-design/uikit';

function App() {
  // const [count, setCount] = useState([]);
  // console.log(firebase)
  
  useEffect(() => {
    // firebase.getData('abbreviations', 'oil')
    // firebase.getData('abbreviations', 'units')
    // firebase.getData('glossary', 'common')
    // firebase
    //   .collection("abbreviations")
    //   .doc("oil")
    //   .onSnapshot(function(querySnapshot) {
    //     // let items = [];
    //     // querySnapshot.docs.forEach(doc => {
    //     // querySnapshot.forEach(doc => {
    //     //   items.push(doc.data());
    //     // });
    //     console.log(querySnapshot.data());
    //     // setCount(items);
    //   });
  }, []);

  return (
    <div className="App theme theme_breakpoint_gpn-default theme_color_gpn-default theme_control_gpn-default theme_font_small theme_gap_small theme_size_gpn-default theme_space_gpn-default">
      <Button type="button" view="primary" wpSize="l" from="default" width="auto">Кнопка</Button>
    </div>
  );
}

export default App;
