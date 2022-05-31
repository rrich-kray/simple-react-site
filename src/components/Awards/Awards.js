import React from "react";
import "./Awards.css";

const Awards = () => {
  return (
    <div id="awards">
      <div className="award">
        <img src={require("../../assets/images/award1.svg").default} />
        <p className="description"></p>
      </div>
      <div className="award">
        <img src={require("../../assets/images/award2.svg").default} />
        <p className="description"></p>
      </div>
      <div className="award">
        <img src={require("../../assets/images/award3.svg").default} />
        <p className="description"></p>
      </div>
    </div>
  );
};

export default Awards;
