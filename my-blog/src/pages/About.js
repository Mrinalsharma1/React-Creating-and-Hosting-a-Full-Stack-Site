import aboutcon from "./AboutContent";
const About = () => {
  return (
    <>
      <h1 className="my-2">hey, This Is About Page !!</h1>
      {aboutcon.map((con, i) => (
        <>
          <h2 key={con.name}>{con.name}</h2>
          <h3 key={con.title} className="text-muted">
            {con.title}
          </h3>
          <p key={con.content} className="text-justify">
            {con.content}
          </p>
        </>
      ))}
    </>
  );
};
export default About;
