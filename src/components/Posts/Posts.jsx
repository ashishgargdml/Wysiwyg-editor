import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const About = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((res) => setData(res.data));
    console.log(data);
  }, []);
  return (
    <>
      {data.length ? (
        data.map((item) => (
          <Main key={item.id}>
            <div className="Post-Number">Post {item.id}</div>
            <HR />
            <DIV
              className="content"
              dangerouslySetInnerHTML={{ __html: item.data }}
            ></DIV>
            {/* <HR /> */}
            {/* {counter++} */}
          </Main>
        ))
      ) : (
        <>Loading....</>
      )}
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
