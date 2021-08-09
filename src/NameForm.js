import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function NameForm() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const greetings = [
    "Hello, ",
    "It's nice to meet you, ",
    "It's a pleasure to meet you, ",
    "Yo, ",
    "Sup, ",
    "Hey, ",
  ];

  function handleTyping(event) {
    setText(event.target.value);
  }

  function handleSubmit() {
    setName(text);
    setText("");
    setGreeting(greetings[Math.floor(Math.random() * greetings.length)]);
  }

  function handleKeyPress(event) {
    if (event.charCode === 13) {
      handleSubmit();
    }
  }

  return (
    <Form.Group>
      <div>
        {greeting}
        <span className="typedName">{name}</span>
      </div>
      <Form.Control
        type="text"
        placeholder="Your name here"
        onChange={handleTyping}
        value={text}
        onKeyPress={handleKeyPress}
      />
      <Button type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </Form.Group>
  );
}

export default NameForm;
