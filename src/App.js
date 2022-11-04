import React from "react";
import axios from "axios";

import "./App.css";
import Header from "./components/header";
import Nav from "./components/nav";
import Slider from "./components/slider";
import Calendar from "./components/calendar";
import News from "./components/news";
import Form from "./components/form";
import Block from "./components/blockFooter";
import LastBlock from "./components/blockFooterLast";

const today = new Date("2022-10-17");

function App() {
  const [items, setItems] = React.useState([]);
  const [itemsNews, setItemsNews] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const apiUrl2 =
        "http://theatre.restomatik.ru:1337/api/articles" +
        "?sort[0]=publishedAt%3Adesc&pagination[pageSize]=4";
      const apiUrl =
        `http://theatre.restomatik.ru:1337/api/shows` +
        `?filters[date][$gt]=${today.toISOString().slice(0, 10)}` +
        `&sort[0]=date&populate=play.cover,play.director&pagination[pageSize]=5`;

      try {
        const [itemsResponse, newsResponse] = await Promise.all([
          axios.get(apiUrl),
          axios.get(apiUrl2),
        ]);

        setIsLoading(false);

        setItems(itemsResponse.data.data);
        setItemsNews(newsResponse.data.data);
      } catch (error) {
        alert("Ошибка при запросе данных!");
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <Slider items={items} />
      <main>
        <section>{!isLoading ? <Calendar items={items} /> : "s"}</section>
        <section>
          <News itemsNews={itemsNews} />
          <Form />
        </section>
      </main>
      <footer>
        <Block />
        <hr />
        <LastBlock />
      </footer>
    </>
  );
}

export default App;
