import React from "react";
import "./App.css";
import Header from "./components/header";
import Nav from "./components/nav";
import Slider from "./components/slider";
import News from "./components/news";
import Form from "./components/form";
import Block from "./components/blockFooter";
import LastBlock from "./components/blockFooterLast";
import Calendar from "./components/calendar";
import Item from "./components/items";
import axios from "axios";

function App() {
  const [items, setItems] = React.useState([]);
  const [itemsNews, setItemsNews] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const apiUrl2 =
    "http://theatre.restomatik.ru:1337/api/articles?sort[0]=publishedAt%3Adesc&pagination[pageSize]=5";
  const apiUrl =
    "http://theatre.restomatik.ru:1337/api/shows?filters[date][$gt]=2022-10-19&sort[0]=date&populate=play.cover,play.director&pagination[pageSize]=4";
  React.useEffect(() => {
    async function fetchData() {
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
        <section>
          <Calendar />
        </section>
        <section>
          <Item />
        </section>
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
