import React from "react";
import Contentbar from "./Contentbar";

const Contentbarcontainer = (props) => {
  return (
    <div className="Contentbarcontainer">
      {props.ContentbarGroup.map((c) => <Contentbar key={c.id} type={c.type} content={c.text}/>)}
    </div>
  );
};

export default Contentbarcontainer;