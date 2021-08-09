import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function AnimeQuote() {
  const [quote, setQuote] = useState({
    anime: "...",
    character: "...",
    quote: "japan is currently offline, sorry for the inconvenience",
  });
  const [refresh, setRefresh] = useState(0);
  const [rng, setRng] = useState(0);
  const [buttonText, setButtonText] = useState("New quote");
  const [textStyle, setTextStyle] = useState("readyForAnimeQuote");

  useEffect(() => {
    setButtonText("loading...");
    setTextStyle("loading");
    fetch("/api/random")
      .then((response) => {
        if (!response.status >= 200 && !response.status <= 299) {
          //200 code means it worked
          console.log(response.status + " this is the http code");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setQuote(data);
        setButtonText("New quote");
        setTextStyle("readyForAnimeQuote");
      });
  }, [refresh]);

  function handleClick() {
    if (rng === 1) {
      setQuote({
        anime: "Hey weeb!",
        character: "...",
        quote: `this is your ${refresh}th anime quote. I'm not judging or anything.`,
      });
      setRng(0);
    } else {
      const newRNG = Math.floor(Math.random() * 5);
      setRng(newRNG);
      setRefresh(refresh + 1);
    }
  }

  return (
    <div>
      <Card>
        <Card.Header id="animeCardTitle">Random anime quote</Card.Header>
        <Card.Body>
          <Card.Title>
            {quote.character}
            {quote.character === "..." ? "" : ","} {quote.anime}
          </Card.Title>
          <Card.Text id="animeQuote">{quote.quote}</Card.Text>
          <Button variant="primary" onClick={handleClick} className={textStyle}>
            {buttonText}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AnimeQuote;
