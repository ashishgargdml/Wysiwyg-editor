import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { modules, formats } from "../Editor/EditorToolBar";
import axios from "axios";
import Test from "../Editor/test";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import "../Editor/editor.css";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
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
        axios.put(`http://localhost:5000/posts/${id}`, value),
        setValue({ data: null }),
        navigate("/posts"));
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/posts/${id}`)
      .then((res) => setValue(res.data));
    console.log(value);
  }, []);

  const handleCancel = () => {
    navigate("/posts");
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
          Save Changes
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

export default Edit;

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
