import React from "react";
import "./ContentItem.scss";

function ContentItem(props) {


  return (
    <div className="content__item">

        <div className="content__item_heading text text_size_3xl text_weight_bold">
          {props.name}
        </div>

      <div className="content__item_text text text_size_m text_view_secondary">
        {props.value}
      </div>
    </div>
  );
}

export default ContentItem;
