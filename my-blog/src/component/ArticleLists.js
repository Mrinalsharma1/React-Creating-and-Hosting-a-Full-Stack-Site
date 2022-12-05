import { Link } from "react-router-dom";
const ArticleLists = ({ articles }) => {
  return (
    <>
      {articles.map((blogt) => (
        <Link
          key={blogt.name}
          className="article-list-item"
          to={`/articleobj/${blogt.name}`}
        >
          <h3>{blogt.title}</h3>
          <p>{blogt.content[0].substring(0, 150)}...</p>
        </Link>
      ))}
    </>
  );
};
export default ArticleLists;
