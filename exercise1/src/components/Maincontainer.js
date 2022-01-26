import React from "react";
import Smallnewscontainer from "./Smallnewscontainer";
import Contentbarcontainer from "./Contentbarcontainer";
import Articlecontainer from "./Articlecontainer";
import { SmallnewsGroup, ContentbarGroup, ArticleGroup } from "./FakenewsJSON";

const Maincontainer = () => {
  return (
    <>
      <div className="Maincontainer">
        <Contentbarcontainer ContentbarGroup={ContentbarGroup} />
      </div>
      <div className="Subcontainer">
        <Articlecontainer ArticleGroup={ArticleGroup} />
        <Smallnewscontainer SmallnewsGroup={SmallnewsGroup} />
      </div>
    </>
  );
};

export default Maincontainer;
