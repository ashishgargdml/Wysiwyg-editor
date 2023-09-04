import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { modules, formats } from "./EditorToolBar";
import axios from "axios";
import Test from "./test";

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
      <button onClick={handleClick}>Submit</button>
      <button onClick={handleCancel}>Discard</button>
      <div>
        <Test value={value.data} />
      </div>
    </>
  );
};

export default Home;
