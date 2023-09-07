import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const About = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  let counter = 1;
  const loadPosts = async () => {
    await axios
      .get("http://localhost:5000/posts")
      .then((res) => setData(res.data));
  };

  const successMsg = () => toast.success("Deleted successfully!!!!!");

  useEffect(() => {
    loadPosts();
    console.log(data);
  }, []);

  const handleClick = async (id) => {
    await axios.delete(`http://localhost:5000/posts/${id}`);
    loadPosts();
    successMsg();
  };

  const onEditClick = (id) => {
    navigate(`/edit-post/${id}`);
  };

  return (
    <>
      {data.length ? (
        data.map((item) => (
          <Main key={item.id}>
            <div className="Post-Number">Post {counter++}</div>
            <HR />
            <DIV
              className="content"
              dangerouslySetInnerHTML={{ __html: item.data }}
            ></DIV>
            <Delete onClick={() => handleClick(item.id)}>Delete</Delete>
            <EditButton onClick={() => onEditClick(item.id)}>Edit</EditButton>
          </Main>
        ))
      ) : (
        <>Loading....</>
      )}
      <ToastContainer
        position="top-right"
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

export default About;
const HR = styled.hr`
  width: content-fit;
`;

const Main = styled.div`
  max-width: 1480px;
  margin: 0 auto;
  border: 1px solid #c1c1c1;
  border-radius: 7px;
  box-shadow: 9px 10px 2px #a9a7a7d9;
  margin-bottom: 20px;
  padding: 20px 10px;
  background: #ffffffd9;
`;

const DIV = styled.div`
  ${"" /* border: 1px solid #979797; */}
  border-radius: 6px;
  padding: 4px 10px;
  ${"" /* margin-bottom: 20px; */}
`;

const Delete = styled.button`
  background: #ef3f3fc2;
  padding: 5px 12px;
  font-size: 15px;
  color: white;
  border: none;
  border-radius: 5px;
  margin-right: 6px;
  cursor: pointer;
  &:hover {
    transform: scale(0.9);
    transition: all 0.8s cubic-bezier(1, -5.15, 0, 8.95);
  }
`;

const EditButton = styled.button`
  background: #4b6e3ec2;
  padding: 5px 12px;
  font-size: 15px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    transform: scale(0.9);
    transition: all 0.8s cubic-bezier(1, -5.15, 0, 8.95);
  }
`;
