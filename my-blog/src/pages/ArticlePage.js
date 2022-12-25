import { useParams } from "react-router-dom";
import articles from "./ArticleContent";
import NotFound from "./NotFound";
import Userhooks from "../Hooks/Userhooks";
const ArticlePage = () => {
  const { user, islogin } = Userhooks;
  const { articleid } = useParams();
  const article = articles.find((article) => article.name === articleid);

  return (
    <>
      {!article ? (
        <NotFound />
      ) : (
        <div>
          {user ? <h1>{article.title}</h1> : <button className="btn btn-danger">Go And Login First</button>}
          {article.content.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
      )}
      {islogin ? <a href="http://localhost:3000/articleobj" className="btn btn-danger">
        Back
      </a> : <p>Not Login</p>}
    </>
  );
};
export default ArticlePage;
