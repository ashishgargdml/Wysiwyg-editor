import { Routes, Route, Link } from "react-router-dom";
import Editor from "./components/Editor/Editor";
import Posts from "./components/Posts/Posts";
import Contact from "./components/Contact/Contact";
import { styled } from "styled-components";
import Welcome from "./components/Welcome/Welcome";
import Edit from "./components/Posts/Edit";
import { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setFlag(false);
    }, 3000);
  });
  return (
    <>
      {flag ? (
        <div className="loading"></div>
      ) : (
        <>
          <NAV>
            <UL>
              <li>
                <LINK to="/">Home</LINK>
              </li>
              <li>
                <LINK to="/editor">Editor</LINK>
              </li>
              <li>
                <LINK to="/posts">Posts</LINK>
              </li>
              <li>
                <LINK to="/contact">Contact</LINK>
              </li>
            </UL>
          </NAV>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/edit-post/:id" element={<Edit />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;

const NAV = styled.nav`
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 2px;
  width: 100%;
  ${"" /* border-radius: 16px; */}
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.1px);
  -webkit-backdrop-filter: blur(6.1px);
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.2); /* Black w/opacity/see-through */
`;

const UL = styled.ul`
  display: flex;
  gap: 0 20px;
  list-style: none;
`;

const LINK = styled(Link)`
  text-decoration: none;
  color: #fff;
  letter-spacing: 1;
  font-weight: 600;
  nav li:hover & {
    color: red;
  }
`;
