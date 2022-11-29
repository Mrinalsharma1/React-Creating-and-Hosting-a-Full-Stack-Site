import { useParams } from "react-router-dom";
import articles from "./Article-Content";
const ArticlePage = () => {
  const { articleid } = useParams();
  const article = articles.find((article) => article.name === articleid);
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((pra) => (
        <p>{pra}</p>
      ))}
    </>
  );
};
export default ArticlePage;
