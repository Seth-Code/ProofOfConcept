import { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

function BackgroundSelect() {
  const [file, setFile] = useState({ file: null });

  function handleSubmitFile(event) {
    setFile({
      file: URL.createObjectURL(event.target.files[0]),
    });
    axios.post("http://localhost:3001/userimage", { poop: "pee" }); /// testing

    console.log(event.target.files[0]);
  }

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.File
            id="file"
            label="Pick a cool image: "
            onChange={handleSubmitFile}
          />
        </Form.Group>
      </Form>
      <img
        className="userImage"
        alt="the pic you just uploaded"
        src={file.file}
      />
    </div>
  );
}

export default BackgroundSelect;
