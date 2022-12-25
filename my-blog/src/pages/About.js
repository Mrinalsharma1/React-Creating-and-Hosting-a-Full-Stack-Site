import aboutcon from "./AboutContent";
const About = () => {
  return (
    <>
      <h1 className="my-2">hey, This Is About Page !!</h1>
      {aboutcon.map((con, i) => (
        <>
          <h2 key={con.name.i}>{con.name}</h2>
          <h3 key={con.title.i} className="text-muted">
            {con.title}
          </h3>
          <p key={con.content.i} className="text-justify">
            {con.content}
          </p>
        </>
      ))}
    </>
  );
};
export default About;
