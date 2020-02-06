import React from "react";
import "./Layout.scss";

function Layout(props) {
  return (
    <div className="layout">
      <section className='layout__left-section' key="section1">{props.leftSection}</section>
      <section key="section2">{props.rightSection}</section>
    </div>
  );
}

export default Layout;
