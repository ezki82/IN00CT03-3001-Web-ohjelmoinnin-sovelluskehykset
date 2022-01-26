import React from "react";

const Smallnews = (props) => {
  return (
    <div className="Smallnews">
      <div>
        <h1>{props.no}</h1>
      </div>
      <div>
        <p>
          <b>{props.title}</b> | {props.text}
        </p>
        <hr />
      </div>
    </div>
  );
};

export default Smallnews;
