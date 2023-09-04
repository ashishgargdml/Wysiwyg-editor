import axios from "axios";
import { useEffect, useState } from "react";

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
          <div
            dangerouslySetInnerHTML={{ __html: item.data }}
            key={item.id}
          ></div>
        ))
      ) : (
        <>Loading....</>
      )}
    </>
  );
};

export default About;
