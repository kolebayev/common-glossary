import React, { useState, useEffect } from "react";
import "./App.css";
import firebase from "./firebase";

function App() {
  const [count, setCount] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("abbreviations")
      .doc("oil")
      .onSnapshot(function(querySnapshot) {
        // let items = [];
        // querySnapshot.docs.forEach(doc => {
        // querySnapshot.forEach(doc => {
        //   items.push(doc.data());
        // });
        console.log(querySnapshot.data());
        // setCount(items);
      });
  }, []);

  return (
    <div className="App">


        <p>123</p>
        <div className="App-link">

          {/* {count.map(function(obj, index) {
            console.log(index);
            for (var key in obj.oil) {
              // console.log(key, obj[key]);
            return (<div key={key}>{key} — {obj[key]}</div>)
            }
          })} */}

        </div>

    </div>
  );
}

export default App;
