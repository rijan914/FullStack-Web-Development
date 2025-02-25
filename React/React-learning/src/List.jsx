import PropTypes from 'prop-types';

function List(props) {
  const category= props.category;
const itemList=props.items;

//   fruits.sort((a, b) => a.name.localeCompare(b.name));
//   fruits.sort((a, b) => b.name.localeCompare(a.name));
//   fruits.sort((a,b)=> a.calories-b.calories); //numeric

  // const lowCalFruits = fruits.filter(fruit =>
  //    fruit.calories < 100);

  const listItems = itemList.map(item => {
    return (
      <li key={item.id}>
        {item.name}:&nbsp;
        <b>{item.calories}</b>
      </li>
    );
  });

  return (
   <>

  <h3 className="list-category">{category}</h3>
  <ol className="list-items">{listItems}</ol>
  </>
  )
}
List.propTypes={
  category:PropTypes.string,
  items:PropTypes.arrayOf(PropTypes.shape({
                                          id:PropTypes.number,
                                          name:PropTypes.string,
                                          calories:PropTypes.number,
  })),
}

export default List;