import React from "react";
import "@gpn-design/uikit/dist/style.css";
import "./Welcome.scss";

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome__greeting text text_size_m text_weight_normal text_view_secondary">
        В Глоссарии ГПН собраны сокращения и термины,<br/>часто
        используемые в компании.
        <br /><br />
        Для начала работы воспользуйтесь<br/><span className="text_view_primary">поиском в шапке</span> или <span className="text_view_primary">навигацией слева</span>
      </div>
    </div>
  );
}

export default Welcome;
