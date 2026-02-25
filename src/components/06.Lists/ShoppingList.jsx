const products = [
  { title: "Carrot", id: 1, isFruit: false },
  { title: "Apple", id: 2, isFruit: true },
  { title: "Potato", id: 3, isFruit: false },
];

const ShoppingList = () => {
  const listItems = products.map((p) => (
    <li key={p.id} style={{ color: p.isFruit ? "green" : "orange" }}>
      {p.title} - {p.isFruit ? "Fruit" : "Vegetable"}
    </li>
  ));
  return <div>{listItems}</div>;
};

export default ShoppingList;
