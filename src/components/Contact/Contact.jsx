import { styled } from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <P>
        If you like the editor you can drop a star at my github repository,{" "}
        <A href="https://github.com/ashishgargdml/Wysiwyg-editor">
          Drop a Star here
        </A>
      </P>
    </Wrapper>
  );
};

export default Contact;

const A = styled.a`
  color: red;
  font-weight: 600;
`;

const P = styled.p`
  font-size: 17px;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.4);
  width: 30%;
  margin: 0 auto;
  padding: 10px;
  border-radius: 6px;
`;

const Wrapper = styled.div``;
