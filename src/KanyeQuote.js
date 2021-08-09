import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

function KanyeQuote() {
  const [data, setData] = useState({
    date: {
      date: "",
      year: "",
      month: "",
      day: "",
      displayDate: "",
    },

    quote: "",
  });
  const [quote, setQuote] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/kanyeQuote").then((response) => {
      setData(response);
      // console.log("response\n\n", response.data, "\n\nresponse");
      setQuote(response.data.quote);
    });
  }, []);

  const displayDate = `${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDate()}`;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          alt="Kanye Pic"
          className="kanyePic"
          variant="top"
          src="https://api.time.com/wp-content/uploads/2017/06/kanye-west-5-2.jpg"
        />
        <Card.Body>
          <Card.Title>{displayDate} Kanye Quote:</Card.Title>
          <Card.Text>{quote}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default KanyeQuote;
