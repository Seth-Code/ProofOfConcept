import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";
import "./styles.css";
import ClickApp from "./ClickApp";
import BackgroundSelect from "./BackgroundSelect";
import NameForm from "./NameForm";
import AnimeQuote from "./AnimeQuote";
import KanyeQuote from "./KanyeQuote";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ClickApp />
    <NameForm />
    <AnimeQuote />
    <KanyeQuote />
    <BackgroundSelect />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
