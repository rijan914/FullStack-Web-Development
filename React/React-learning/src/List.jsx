function List() {
  const fruits = [
    { id: 1, name: 'apple', calories: 100 },
    { id: 2, name: 'banana', calories: 200 },
    { id: 3, name: 'mango', calories: 30 },
    { id: 4, name: 'orange', calories: 40 },
    { id: 5, name: 'grapes', calories: 500 },
  ];

  
//   fruits.sort((a, b) => a.name.localeCompare(b.name));
//   fruits.sort((a, b) => b.name.localeCompare(a.name));
//   fruits.sort((a,b)=> a.calories-b.calories); //numeric

  const lowCalFruits = fruits.filter(fruit =>
     fruit.calories < 100);

  const listItems = lowCalFruits.map(lowCalFruit => {
    return (
      <li key={lowCalFruit.id}>
        {lowCalFruit.name}:&nbsp;
        <b>{lowCalFruit.calories}</b>
      </li>
    );
  });

  return <ol>{listItems}</ol>;
}

export default List;