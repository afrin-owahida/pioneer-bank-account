import React from "react";

function CustomButton(props) {
  return (
    <button class=" bg-green-500 text-black h-full w-full rounded" 

    onClick={props.action}
    >
      {props.title ? props.title : "Button"}
    </button>
  );
}

export default CustomButton;
