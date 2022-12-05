const Box = (props) => {
  //  Write your code here.
  const { text, className } = props;
  return <div className={className}>{text}</div>;
};

const element = (
  //  Write your code here.
  <div className="bgContainer">
    <h1 className="heading">Boxes</h1>
    <div className="subContainer">
      <Box text="Small" className="small" />
      <Box text="Medium" className="medium" />
      <Box text="Large" className="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
