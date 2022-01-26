import React from "react";
import Smallnews from "./Smallnews";

const Smallnewscontainer = (props) => {
  return (
    <div className="Smallnewscontainer">
      <h2>Luetuimmat</h2>
      <hr/>
        {props.SmallnewsGroup.map((s) => <Smallnews no={s.no} title={s.title} text={s.text}/>)}
    </div>
  );
};

export default Smallnewscontainer;