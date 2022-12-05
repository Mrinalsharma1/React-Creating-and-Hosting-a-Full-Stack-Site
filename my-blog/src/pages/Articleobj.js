import ArticleLists from "../component/ArticleLists";
import articles from "./ArticleContent";

const Articleobj = () => {
  return (
    <>
      <h1>Article</h1>
      <ArticleLists articles={articles} />
    </>
  );
};
export default Articleobj;
