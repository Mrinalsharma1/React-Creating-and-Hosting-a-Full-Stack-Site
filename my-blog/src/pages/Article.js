import React, { useEffect, useState } from "react";

function Article() {
  const [blog, setblog] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      mydata();
    }, 10000);
  }, []);
  const mydata = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "d5e8ff5363msh57f8f55855e03a5p1230dfjsn33b6321346f9",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };
    const tempdata = await fetch(
      "https://bing-news-search1.p.rapidapi.com/news/search?q=%3CREQUIRED%3E&freshness=Day&textFormat=Raw&safeSearch=Off",
      options
    );
    const json = await tempdata.json();
    setblog(json);
  };

  return (
    <div>
      {!blog ? (
        <div className="justify-content-center d-flex">
          <div
            className="spinner-border text-secondary"
            style={{ width: "150px", height: "150px", marginTop: "200px" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        blog.value.map((e) => {
          return (
            <div>
              <h2>{e.name}</h2>
              <div className="justify-content-center d-flex">
                <img
                  alt="temp"
                  className="rounded shadow"
                  style={{ height: "150px", width: "150px" }}
                  src={`${e.image.thumbnail.contentUrl}`}
                />
              </div>
              <p>{e.description}</p>
              <br />
              <p className="text-muted">
                {e.datePublished.substring(0, 10)}
              </p>{" "}
              <br />
              {
                <a className="btn btn-success my-1" href={`${e.url}`}>
                  Read More
                </a>
              }
            </div>
          );
        })
      )}
    </div>
  );
}

export default Article;
