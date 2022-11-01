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

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Slider />
      <main>
        <section>
          <Calendar />
        </section>
        <section>
          <News />
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
