import React from "react";
import ItemsList from "./ItemsList";


const List = ({items,handleCheck,handleDelete}) => {
  return (
    <>
      {(items.length) ? (
       <ItemsList
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
         /> 
      ):(<p style={{color:"red"}}>the list is empty</p>)}
    </>
  );
};
export default List;