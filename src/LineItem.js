import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label style={item.checked ? { textDecoration: "line-through" } : null}>
        {item.item}
      </label>
      <RiDeleteBin2Line
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex={0}
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineItem;
