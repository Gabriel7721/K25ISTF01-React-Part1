const Couting = ({ onClick, count }) => {
  console.log(count);
  return (
    <div>
      <button onClick={onClick}>Increase count = {count}</button>
    </div>
  );
};

export default Couting;
