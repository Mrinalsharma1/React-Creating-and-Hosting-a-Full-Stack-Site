import React from "react";

export default function ArticleContent() {
  const url =
    "https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw";

  const options = {
    method: "GET",
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "d5e8ff5363msh57f8f55855e03a5p1230dfjsn33b6321346f9",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };

  const temp = fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log("my json value is ", json))
    .catch((err) => console.error("error:" + err));

  return (
    <>
      {temp.map((e) => {
        return <p>{e.values}</p>;
      })}
    </>
  );
}

// console.log(temp);
// temp.map((p) => <h1>{p.type}</h1>);

// const articles = [
//   {
//     name: "learn-react",
//     title: "The fastest Way To Learn React",
//     content: [
//       `Lorem Ipsum is simply dummy text of
//             the printing and typesetting industry.
//             Lorem Ipsum has been the industry's standard
//             dummy text ever since the 1500s, when an unknown`,
//       `printer took a galley of type and scrambled it to
//             make a type specimen book. It has survived not only
//             five centuries, but also the leap into electronic
//             typesetting, remaining essentially unchanged.`,
//       `It was popularised in the 1960s with the release
//             of Letraset sheets containing Lorem Ipsum passages,
//             and more recently with desktop publishing software
//             like Aldus PageMaker including versions of Lorem Ipsum`,
//     ],
//   },
//   {
//     name: "learn-java",
//     title: "The fastest Way To Learn java",
//     content: [
//       `Java Ipsum is simply dummy text of
//             the printing and typesetting industry.
//             Lorem Ipsum has been the industry's standard
//             dummy text ever since the 1500s, when an unknown`,
//       `printer took a galley of type and scrambled it to
//             make a type specimen book. It has survived not only
//             five centuries, but also the leap into electronic
//             typesetting, remaining essentially unchanged.`,
//       `java was popularised in the 1960s with the release
//             of Letraset sheets containing Lorem Ipsum passages,
//             and more recently with desktop publishing software
//             like Aldus PageMaker including versions of Lorem Ipsum`,
//     ],
//   },
//   {
//     name: "learn-php",
//     title: "The fastest Way To Learn php",
//     content: [
//       `Php Ipsum is simply dummy text of
//             the printing and typesetting industry.
//             Lorem Ipsum has been the industry's standard
//             dummy text ever since the 1500s, when an unknown`,
//       `printer took a galley of type and scrambled it to
//             make a type specimen book. It has survived not only
//             five centuries, but also the leap into electronic
//             typesetting, remaining essentially unchanged.`,
//       `Php was popularised in the 1960s with the release
//             of Letraset sheets containing Lorem Ipsum passages,
//             and more recently with desktop publishing software
//             like Aldus PageMaker including versions of Lorem Ipsum`,
//     ],
//   },
// ];
