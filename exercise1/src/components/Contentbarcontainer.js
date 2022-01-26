import React from "react";
import Contentbar from "./Contentbar";

const Contentbarcontainer = (props) => {
  return (
    <div className="Contentbarcontainer">
      {props.ContentbarGroup.map((c) => <Contentbar type={c.type} content={c.text}/>)}
    </div>
  );
};

export default Contentbarcontainer;