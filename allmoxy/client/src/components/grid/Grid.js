import React, { useState, useContext, useEffect } from "react";
import "./grid.css";
import { Container, Table } from "react-bootstrap";
import { ItemProviderContext } from "../../context.js/itemProvider";
import { Item } from "./Item"

export const Grid = () => {
  const { items, getAllItems, newItem, editItem, deleteItem, setItemState } = useContext(
    ItemProviderContext
  );
  const [sortType, setSortType] = useState('titleA-Z');
  useEffect(() => {
    getAllItems();
  }, []);

  // useEffect(() => {
  //   const sortArray = type => {
  //     const types = {
  //       titleAZ: "titleA-Z",
  //       titleZA: "titleZ-A",
  //       priceHigh: "priceHigh",
  //       priceLow: "priceLow"
  //     };
  //     const sortProperty = types[type];
  //     const sorted = [...items].sort((a,b) => b[sortProperty] - a[sortProperty])
  //     setItemState(sorted)
  //   }
  //   sortArray(sortType)
  //   // getAllItems();
  // }, [sortType]);

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
    setInputs(initInputs);
  };

  const [selected, setSelected] = useState();

  const handleSelect = (e) => {
    const { name, value } = e.target;
    setSelected((prevSelected) => ({
      ...prevSelected,
      [name]: value,
    }));
    console.log("selected", selected);
  }

  // const renderItem = (item, index, _id) => {
  //     index = index + 1;
  //     return (
  //       <div>
  //         <Item index={index} item={item} id={_id} edit={editItem} delete={deleteItem} />
  //       </div>
  //     );
  // };

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
          <button class="input" onClick={add}>
            Add Item
          </button>
        </div>
      </form>

      <Container id="container">
        <Table id="table">
          <thead id="thead">
          <div id="form-action-div">
            {/* <select id="sort-by" name="sort" onClick={handleSelect}> */}
            <select id="sort-by" name="sort" onChange={(e) => setSortType(e.target.value)}>
              <option input="" name="sort">Sort by</option>
              <option value="title A-Z" name="sort">Title A-Z</option>
              <option value="title Z-A" name="sort">Title Z-A</option>
              <option value="priceLow" name="sort">Price Low</option>
              <option value="priceHigh" name="sort">Price High</option>
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
          <thbody id="th-body">{
            items.map(
              (item, index, _id) => (
                <Item index={index} item={item} id={_id} edit={editItem} delete={deleteItem} />
              ))}
              </thbody>
        </Table>
      </Container>
    </div>
  );
};
