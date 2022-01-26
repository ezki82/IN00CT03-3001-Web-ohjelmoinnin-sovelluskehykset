import React from "react";
import Article from "./Article"
const Articlecontainer = (props) => {
    return (
        <div className="Articlecontainer">
            {props.ArticleGroup.map((a) => <Article title={a.title} imgSrc={a.imgSrc} alt={a.alt} text={a.text}/>)}
        </div>
    )
}

export default Articlecontainer;