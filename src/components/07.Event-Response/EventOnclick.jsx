const EventOnclick = () => {
  function handleClick() {
    alert("Clicked!");
  }
  return <div><button onClick={handleClick}>Click me</button></div>;
};

export default EventOnclick;
