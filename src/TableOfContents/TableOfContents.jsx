import React from "react";
import "./TableOfContents.scss";
import { Input } from "@gpn-design/uikit";
import { useState } from "react";

// import '@gpn-design/uikit/dist/style.css';
// import { Button } from '@gpn-design/uikit';
// import firebase from "./Firebase";
// import shownContent from "../Context/shownContent";

export default function TableOfContents({ passStatus }) {
  const [query, setQuery] = useState("");

  return (
    <div className="table-of-contents">
      <Input
        placeholder="искать"
        width="default"
        view="default"
        wpSize="s"
        form="default"
        // state=""
        onChange={e =>
          e.target.value.length > 0 && setQuery(e.target.value)
        }
      />
      <button onClick={() => { passStatus("search", query) }}>
        GET
      </button>

      <button onClick={() => passStatus("abbreviations/oil", '')}> abbreviations/oil </button>
      <button onClick={() => passStatus("abbreviations/units", '')}> abbreviations/units </button>
      <button onClick={() => passStatus("glossary/common", '')}> glossary/common </button>
      {/* <button onClick={()=>passStatus('welcome')}>welcome</button> */}
    </div>
  );
}
