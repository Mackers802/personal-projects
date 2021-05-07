import React, { useContext, useState } from "react";
import { ItemProviderContext } from "../../context.js/itemProvider";
import "./item.css"

export const Item = (props) => {
  const { editItem, deleteItem, getAllItems } = useContext(ItemProviderContext);
  const { item, index } = props;

  const initInputs = {
    title: item.title,
    price: item.price,
    quantity: item.quantity,
    description: item.description,
    image: item.image,
  };
  const [inputs, setInputs] = useState(initInputs);

  function onChangeItem(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }
  const [toggle, setToggle] = useState(true);

  const submitChanges = (item, inputs) => {
    console.log("item", item._id);
    console.log("inputs", inputs)
    editItem(inputs, item._id);
    setToggle((prev) => !prev);
    getAllItems()
  };

  const remove = (item) => {
    console.log(item.id);
    deleteItem(item._id);
    console.log("deleteItem");
  };

  const edit = (item) => {
    setToggle((prev) => !prev);
  };


  return (
    <>
      {toggle ? (
        <div>
          <tr id="tr" key={index}>
            <td id="td-id">{index}</td>
            <td id="td-title">{item.title}</td>
            <td id="td-price">{item.price}</td>
            <td id="td-quantity">{item.quantity}</td>
            <td id="td-description">{item.description}</td>
            <td id="td-image">
              <img id="td-image-tag" src={item.image} alt={item.description} />
            </td>
              <button id="td-delete-button" onClick={() => remove(item)}>
                X
              </button>
              <button id="td-edit-button" onClick={() => edit(item)}>
                Edit
              </button>
          </tr>
        </div>
      ) : (
        <div id="editForm">
          <form id="form">
            <div id="form-inputs-div">
              <input
                onChange={onChangeItem}
                type="text"
                name="title"
                placeholder={item.title}
                className="input"
              />
              <input
                onChange={onChangeItem}
                type="number"
                name="price"
                placeholder={item.price}
                className="input"
              />
              <input
                onChange={onChangeItem}
                type="number"
                name="quantity"
                placeholder={item.quantity}
                className="input"
              />
              <input
                onChange={onChangeItem}
                type="text"
                name="description"
                placeholder={item.description}
                className="input"
              />
              <input
                onChange={onChangeItem}
                type="text"
                name="image"
                placeholder={item.image}
                className="input"
              />
            </div>
          </form>
          <button id="td-edit-button" onClick={() => submitChanges(item, inputs)}>Submit Changes</button>
          <br></br>
          <button id="td-edit-button" onClick={() => edit()}>Disregard Changes</button>
        </div>
      )}
    </>
  );
};
