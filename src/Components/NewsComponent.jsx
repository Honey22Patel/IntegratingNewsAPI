//API: https://inshorts.vercel.app/news/top
//LOAD API DATA FROM NEWS API  IN  BOOTSTRAP CARDS

import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import NewsCard from "./NewsCard";
const NewsComponent = () => {
const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let url = "https://inshorts.vercel.app/news/top";
      fetch(url)
        .then((response) => response.json())
        .then((json) => setData(json.data.articles));
    };
    getData();
  }, []);

  return (
    <>
      <Container>
        <h1>News</h1>
        <Row>
          <NewsCard data={ data } />
        </Row>
      </Container>
    </>
  );
};

export default NewsComponent;
