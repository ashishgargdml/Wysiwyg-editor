import { Routes, Route, Link } from "react-router-dom";
import Editor from "./components/Editor/Editor";
import Posts from "./components/Posts/Posts";
import Contact from "./components/Contact/Contact";
import { styled } from "styled-components";
import Welcome from "./components/Welcome/Welcome";
const App = () => {
  return (
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
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;

const NAV = styled.nav`
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 2px;
`;

const UL = styled.ul`
  display: flex;
  gap: 0 20px;
  list-style: none;
`;

const LINK = styled(Link)`
  text-decoration: none;
  color: #000;
  nav li:hover & {
    color: red;
  }
`;
