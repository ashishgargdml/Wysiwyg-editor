const Test = ({ value }) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: value }}></div>
    </>
  );
};

export default Test;
