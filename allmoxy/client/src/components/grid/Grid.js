import React, { useState, useContext, useEffect } from "react";
import "./grid.css";
import { Container, Table } from "react-bootstrap";
import { ItemProviderContext } from "../../context.js/itemProvider";

export const Grid = () => {
  const { 
    items, 
    getAllItems, 
    newItem, 
    editItem, 
    deleteItem 
  } = useContext(ItemProviderContext)

  useEffect(() => {
    getAllItems();
  }, []);

  const initInputs = {
    title: "",
        description: "",
        price: "",
        quantity: "",
        image: ""
  }

    const [inputs, setInputs] = useState(initInputs)
    // const [newItems, setNewItems] = useState(items)

    
    function onChangeItem(e) {
        setInputs({
            ...inputs, 
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }
    
    const add = (e) => {
        e.preventDefault()
        newItem(inputs)
        setInputs(initInputs)
    }

    const remove = (item) => {
      console.log(item)
      deleteItem(item._id)
      console.log("deleteItem")
    } 

    const edit = (item) => {
      console.log(item)
      editItem(item._id)
      console.log("deleteItem")
    } 
    // const [selected, setSelected] = useState();

  const renderItem = (item, index) => {
    index = index+1
    return (
      <tr id="tr" key={index}>
        <td id="td-id">{index}</td>
        <td id="td-title">{item.title}</td>
        <td id="td-price">{item.price}</td>
        <td id="td-quantity">{item.quantity}</td>
        <td id="td-description">{item.description}</td>
        <td id="td-image">
            <img id="td-image-tag" src={item.image} alt={item.title} />
        </td>
        <div>
          <button id="td-delete-button" onClick={remove}>X</button>
          <button id="td-edit-button"   onClick={edit}>Edit</button>
        </div>
      </tr>
    );
  };

  return (
      <div id="grid-container">
        <form id="form">
            <div id="form-inputs-div">
                    <input onChange={onChangeItem} type="text" name="title" placeholder="Title" className="input"/>
                    <input onChange={onChangeItem} type="text" name="description" placeholder="Description" className="input"/>
                    <input onChange={onChangeItem} type="number" name="price" placeholder="Price" className="input"/>
                    <input onChange={onChangeItem} type="number" name="quantity" placeholder="Quantity" className="input"/>
                    <input onChange={onChangeItem} type="text" name="image" placeholder="Image Url" className="input"/>
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
                <button class="input" onClick={add}>Add Item</button>

            </div>
      </form>
      <Container id="container">
          <Table id="table">
            <thead id="thead">
            <tr id="tr-header">
              <th id="th-id">ID</th>
              <th id="th-title">Title</th>
              <th id="th-price">Price</th>
              <th id="th-quantity">Quantity</th>
              <th id="th-description">Description</th>
              <th id="th-image">Image</th>
            </tr>
            </thead>
            <thbody id="th-body">{items.map(renderItem)}</thbody>
          </Table>
        </Container>
    </div>
  );
};
