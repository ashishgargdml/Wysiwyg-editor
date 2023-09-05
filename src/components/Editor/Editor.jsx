import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { modules, formats } from "./EditorToolBar";
import axios from "axios";
import Test from "./test";
import { styled } from "styled-components";
import "./editor.css";

const Home = () => {
  const [value, setValue] = useState({
    data: null,
  });
  const onChange = (content) => {
    setValue({ data: content });
  };
  const handleClick = () => {
    value.data === null
      ? alert("Field is empty")
      : (console.log(value), axios.post("http://localhost:5000/posts", value));
  };

  const handleCancel = () => {
    setValue({ data: null });
  };
  return (
    <>
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={value.data}
        onChange={onChange}
        placeholder="start typing from here....."
        modules={modules}
        formats={formats}
      />
      <div className="btns">
        <button onClick={handleClick}>Submit</button>
        <button onClick={handleCancel}>Discard</button>
      </div>
      <DIV>
        <Div1>
          <Test value={value.data} />
        </Div1>
        <Div2>{value.data}</Div2>
      </DIV>
    </>
  );
};

export default Home;
const DIV = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  max-width: 1186px;
  margin: 0 auto;
`;

const Div1 = styled.div`
  width: 50%;
  margin-left: 20px;
`;

const Div2 = styled.div`
  margin-right: 20px;
  width: 50%;
`;
