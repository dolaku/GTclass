import React from "react";


function List(props) {
  return (
    <ul className="list-group">
      Using the map method, render one li element displaying the text property of each grocery
      object.
      {
        props.groceries.map(item => (
          <li className="list-group-item" key={item.id}>{item.name}</li>
        ))
      }
    </ul>
  );
}

export default List;
