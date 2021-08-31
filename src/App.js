import { useState } from "react";

import ReactMarkdown from "react-markdown";
import { Col, Container, Row } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [input, setInput] = useState();
  const input2 = "# This is a header\n\nAnd this is a paragraph";

  const handleChange = (event) => {
    setInput(event.target.value);
    console.log(input);
  };

  return (
    <Container className="container m-10">
      <h1 className="text-center">Markdown-Editor</h1>
      <Row>
        <Col>
          <textarea
            className="border-4 border-blue-500 rounded"
            rows="33"
            cols="50"
            onChange={handleChange}
          ></textarea>
        </Col>
        <Col>
          <ReactMarkdown>{input}</ReactMarkdown>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
