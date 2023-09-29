import React from "react";
import { useState } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Practice Coding",
    },
    {
      id: 2,
      checked: false,
      item: "Learn React",
    },
    {
      id: 3,
      checked: true,
      item: "Learn Sql",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { checked: !item.checked } : item
    );
    setItems(listItems);
  };

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            []
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label>{item.item}</label>
            <RiDeleteBin2Line role="button" tabIndex={0} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
