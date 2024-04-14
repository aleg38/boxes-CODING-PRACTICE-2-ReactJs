const Box = (props) => {
  //  Write your code here.
  return (
    <div className={`${props.className}`}>
      <p>{props.message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1>Boxes</h1>
    <div className="boxes-container">
      <Box className="box box1" message="Small" />

      <Box className="box box2" message="Medium" />

      <Box className="box box3" message="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
