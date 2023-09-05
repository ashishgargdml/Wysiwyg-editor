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
          <>
            <div className="Post-Number">Post {item.id}</div>
            <HR />
            <DIV
              className="content"
              dangerouslySetInnerHTML={{ __html: item.data }}
              key={item.id}
            ></DIV>
            {/* <HR /> */}
            {/* {counter++} */}
          </>
        ))
      ) : (
        <>Loading....</>
      )}
    </>
  );
};

export default About;
const HR = styled.hr``;

const DIV = styled.div`
  ${"" /* border: 1px solid #979797; */}
  border-radius: 6px;
  padding: 4px 10px;
  margin-bottom: 20px;
`;
