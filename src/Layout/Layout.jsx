import React from "react";
import "./Layout.scss";
// import '@gpn-design/uikit/dist/style.css';
// import { Button } from '@gpn-design/uikit';
// import firebase from "./Firebase";

function Layout(props) {
  return (
    <div className='layout'>
      <section>{props.leftSection}</section>
      <section>{props.rightSection}</section>
    </div>
  );
}

export default Layout;
