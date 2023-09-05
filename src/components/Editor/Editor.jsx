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
      : (console.log(value),
        axios.post("http://localhost:5000/posts", value),
        setValue({ data: null }));
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
        <button className="submit" onClick={handleClick}>
          Submit
        </button>
        <button className="discard" onClick={handleCancel}>
          Discard
        </button>
      </div>
      {value.data ? (
        <DIV>
          <H2>Live Preview</H2>
          <Test value={value.data} />
        </DIV>
      ) : null}
    </>
  );
};

export default Home;

const H2 = styled.h2`
  text-align: center;
`;

const DIV = styled.div`
  align-items: baseline;
  max-width: 1086px;
  margin: 0 auto;
  background: #ffffffc9;
  padding: 4px 54px;
  border-radius: 7px
`;

const Div1 = styled.div`
  width: 50%;
  margin-left: 20px;
`;

const Div2 = styled.div`
  margin-right: 20px;
  width: 50%;
`;
