import React from "react";
import Header from "./Header";
import Content from "./Content";
import { useState } from "react";
import Footer from "./Footer";

const App = () => {
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
      checked: false,
      item: "Learn Sql",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("to_do_list", JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    const removeItem = items.filter((item) => item.id !== id);
    setItems(removeItem);
    localStorage.setItem("to_do_lists", JSON.stringify(removeItem));
  };

  return (
    <div className="App">
      <Header title="To_Do_List" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
};

export default App;
