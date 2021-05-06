import React, { useState } from "react";
// import * as ReactBootStrap from "react-bootstrap";
import "../grid/grid.css";
import dataFile from "../../data/dataFile";
import { Container, Table } from "react-bootstrap";
export const Grid = () => {
    const initInputs = {
        title: "Add Title",
        description: "Add Description",
        price: "Add Price",
        quantity: "Add Quantity",
        image: "Add Url"
    }

    const [inputs, setInputs] = useState(initInputs)
    const [selected, setSelected] = useState();

  function handleChange(e) {
    const { name, value } = e.target;
    setSelected(
      {[name]: value}
    );
    console.log("selected", selected);
  }

  const addItem = () => {
      console.log("Add Item")
  }

  const renderItem = (item, index) => {
    return (
      <tr key={index}>
        <td id="td-id">{index}</td>
        <td id="td-title">{item.title}</td>
        <td id="td-description">{item.description}</td>
        <td id="td-price">{item.price}</td>
        <td id="td-quantity">{item.quantity}</td>
        <td id="td-image">
            <div>
                <img src={item.image} alt={item.title} />
            </div>
        </td>
      </tr>
    );
  };

  // const newData = dataFile.map(item => (
  //     <tr key={item.id}> <tr>{item.title}</tr><th>{item.description}</th> </tr>
  // ))

  return (
      <div id="grid-container">
        <form id="form" onChange={handleChange}>
            <div id="form-inputs-div">
                <lable>
                    <input type="text" name="title" placeholder={inputs.title} className="input"/>
                    <input type="text" name="description" placeholder={inputs.description} className="input"/>
                    <input type="number" name="price" placeholder={inputs.price} className="input"/>
                    <input type="number" name="quantity" placeholder={inputs.quantity} className="input"/>
                    <input type="text" name="image" placeholder={inputs.image} className="input"/>
                </lable>

            </div>
            <div id="form-action-div">
                <select class="input" name="sort">
                    <option input="">Sort by</option>
                    <option value="titleA+">Title A-Z</option>
                    <option value="titleZ-">Title Z-A</option>
                    <option value="descriptionT">Description</option>
                    <option value="descriptionF">No Description</option>
                    <option value="priceLow">Price Low</option>
                    <option value="priceHigh">Price High</option>
                    <option value="quantity">Quantity</option>
                    <option value="imageT">Image</option>
                    <option value="imageF">No Image</option>
                </select>
                <button class="input" onClick={addItem}>Add Item</button>

            </div>
      </form>
      <Container id="container">
          <Table id="table">
            {/* <thead id="thead"> */}
            <tr id="tr-header">
                <th id="th-id">ID</th>
              <th id="th-title">Title</th>
              <th id="th-description">Description</th>
              <th id="th-price">Price</th>
              <th id="th-quantity">Quantity</th>
              <th id="th-image">Image</th>
            </tr>
            {/* </thead> */}
            <thbody id="th-body">{dataFile.map(renderItem)}</thbody>
          </Table>
        </Container>
    </div>
  );
};
