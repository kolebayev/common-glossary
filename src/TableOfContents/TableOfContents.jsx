import React from "react";
import "./TableOfContents.scss";
// import '@gpn-design/uikit/dist/style.css';
// import { Button } from '@gpn-design/uikit';
// import firebase from "./Firebase";
// import shownContent from "../Context/shownContent";

function TableOfContents({passStatus}) {
  return (
    <div className='table-of-contents'>

      <button onClick={()=>passStatus('abbreviations/oil')}>abbreviations/oil</button>
      <button onClick={()=>passStatus('abbreviations/units')}>abbreviations/units</button>
      <button onClick={()=>passStatus('glossary/common')}>glossary/common</button>
      <button onClick={()=>passStatus('welcome')}>welcome</button>
    </div>
  );
}

export default TableOfContents;
