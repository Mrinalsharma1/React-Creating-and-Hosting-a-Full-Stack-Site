import { useParams } from "react-router-dom";
import articles from "./ArticleContent";
import NotFound from "./NotFound";
const ArticlePage = () => {
  const { articleid } = useParams();
  const article = articles.find((article) => article.name === articleid);

  return (
    <>
      {!article ? (
        <NotFound />
      ) : (
        <div>
          <h1>{article.title}</h1>
          {article.content.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
      )}
      <a href="http://localhost:3000/articleobj" className="btn btn-danger">
        Back
      </a>
    </>
  );
};
export default ArticlePage;
