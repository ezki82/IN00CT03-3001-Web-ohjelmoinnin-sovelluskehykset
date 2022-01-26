import React from "react";

const Contentbar = (props) => {
  if (props.type === 'News') {
    return (
      <div className="Contentbar">
        <p className="Contentbar-text">{props.content}</p>
      </div>
    );    
  }
  else return (
    <div className="Contentbar Ad">
      <p className="Contentbar-text">{props.content}</p>
    </div>
  );
};

export default Contentbar;
