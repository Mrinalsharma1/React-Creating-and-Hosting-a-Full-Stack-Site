import aboutcon from "./AboutContent";
const Home = () => {
  return (
    <>
      {aboutcon.map((con, i) => (
        <>
          <h2 key={i}>{con.name}</h2>
          <h3 key={i} className="text-muted">
            {con.title}
          </h3>
          <p key={i}>{con.content}</p>
        </>
      ))}
    </>
  );
};
export default Home;
