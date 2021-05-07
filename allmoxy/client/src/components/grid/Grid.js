import React, { useState, useContext, useEffect } from "react";
import "./grid.css";
import { Container, Table } from "react-bootstrap";
import { ItemProviderContext } from "../../context.js/itemProvider";
import { Item } from "./Item";

export const Grid = (props) => {
  const { items, getAllItems, newItem, editItem, deleteItem } = useContext(
    ItemProviderContext
  );

  useEffect(() => {
    getAllItems();
  }, []);

  const initInputs = {
    title: "",
    description: "",
    price: "",
    quantity: "",
    image: "",
  };

  const [inputs, setInputs] = useState(initInputs);

  function onChangeItem(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  const add = (e) => {
    e.preventDefault();
    newItem(inputs);
    window.location.reload();
    // getAllItems()
    // setInputs(initInputs);
  };

  const [selected, setSelected] = useState("");

  const handleSelect = (e) => {
    const { value } = e.target;
    setSelected(value);
  };

  const sortedData = items.sort( (a, b) => {
    // console.log("selected", selected)
    if (selected === "") {
      return items;
    }
    if (selected === "titleA-Z") {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } return 0;
    }
    if (selected === "titleZ-A") {
      if (b.title < a.title) {
        return -1;
      } else if (b.title > a.title) {
        return 1;
      } return 0;
    }
    if (selected === "priceLow") {
      return a.price - b.price
    }
    if (selected === "priceHigh") {
      return b.price - a.price;
    }
  });

  return (
    <div id="grid-container">
      <form id="form">
        <div id="form-inputs-div">
          <input
            onChange={onChangeItem}
            type="text"
            name="title"
            placeholder="Title"
            className="input"
          />
          <input
            onChange={onChangeItem}
            type="text"
            name="description"
            placeholder="Description"
            className="input"
          />
          <input
            onChange={onChangeItem}
            type="number"
            name="price"
            placeholder="Price"
            className="input"
          />
          <input
            onChange={onChangeItem}
            type="number"
            name="quantity"
            placeholder="Quantity"
            className="input"
          />
          <input
            onChange={onChangeItem}
            type="text"
            name="image"
            placeholder="Image Url"
            className="input"
          />
          <button id="add-btn" onClick={add}>
            Add Item
          </button>
        </div>
      </form>

      <Container id="container">
        <Table id="table">
          <thead id="thead">
            <div id="form-action-div">
              <select id="sort-by" onChange={handleSelect}>
                <option input="">
                  Sort by
                </option>
                <option value="titleA-Z">
                  Title A-Z
                </option>
                <option value="titleZ-A">
                  Title Z-A
                </option>
                <option value="priceLow">
                  Price Low-High
                </option>
                <option value="priceHigh">
                  Price High-Low
                </option>
              </select>
            </div>
            <tr id="tr-header">
              <th id="th-id">ID</th>
              <th id="th-title">Title</th>
              <th id="th-price">Price</th>
              <th id="th-quantity">Quantity</th>
              <th id="th-description">Description</th>
              <th id="th-image">Image</th>
            </tr>
          </thead>
          <thbody id="th-body">
            {sortedData.map((item, index, _id) => (
              <Item
                index={index}
                item={item}
                id={_id}
                edit={editItem}
                delete={deleteItem}
              />
            ))}
          </thbody>
        </Table>
      </Container>
    </div>
  );
};
