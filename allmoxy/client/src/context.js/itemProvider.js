import React, { useState } from "react";
import axios from "axios";
import dataFile from "../data/dataFile";

export const ItemProviderContext = React.createContext();

export const ItemProvider = (props) => {

  //  ----------- State ------------------------------------------

  const initState = {
    items: []
  }
  const [itemState, setItemState] = useState(initState);

  //  ----------- Functions --------------------------------------

  function getAllItems() {
    axios
      .get("/item")
      .then((res) => {
        // console.log(res.data);
        setItemState((prevState) => ({
          ...prevState,
          items: res.data
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
    }

  function newItem(newItem) {
    axios
      .post("/item", newItem)
      .then((res) => {
        setItemState((prevState) => ({
          ...prevState,
          items: [...prevState.items, res.data],
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function deleteItem(_id) {
    console.log("delete", _id)
    axios
      .delete(`/item/${_id}`)
      .then((res) =>
        setItemState((prevState) => ({
          ...prevState,
          items: prevState.items.filter((item) => item._id !== _id),
        }))
      )
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function editItem(inputs, _id) {
    axios
      .put(`/item/${_id}`, inputs)
      .then((res) =>
        setItemState((prevState) => ({
          ...prevState,
          items: prevState.items.filter((item) => item._id !== _id),
        }))
      )
      .catch((err) => console.log(err.response.data.errMsg));
  }

  return (
    <ItemProviderContext.Provider
      value={{
        ...itemState,
        getAllItems,
        newItem,
        deleteItem,
        editItem,
      }}
    >
      {props.children}
    </ItemProviderContext.Provider>
  );
};
