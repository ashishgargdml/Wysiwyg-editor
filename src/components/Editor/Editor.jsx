import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { modules, formats } from "./EditorToolBar";
import axios from "axios";
import Test from "./test";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./editor.css";

const Home = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    data: null,
  });
  const errMsg = () => toast.error("Fields cant be empty");
  const onChange = (content) => {
    setValue({ data: content });
  };
  const handleClick = () => {
    value.data === null
      ? errMsg()
      : (console.log(value),
        axios.post("http://localhost:5000/posts", value),
        setValue({ data: null }),
        navigate("/posts"));
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
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
  border-radius: 7px;
`;
