import React from "react";

const Article = (props) => {
    return(
        <div className="Article">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <img src={props.imgSrc} alt={props.alt} />
        </div>
    )
}

export default Article;
