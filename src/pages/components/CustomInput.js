import React from "react";

function CustomInput(props) {
  function handleChange(evt) {//onchange akta function call kore event [pass kore]
    const value = evt.target.value;//event target propertyer,thn value name arek ta propery thake,target means jkhn currently press value thake
    props.setValue({
      ...props.value,//pura obj ta 
      [props.name]: value,//object er specific key
    });
  }
  return (
    <div class="text-txt-hint text-2xl">
      <label class="block text-gray-700 text-sm " for="username">
        {props.title}
      </label>
      <input
        class="shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={props.title}
        type={props.type ? props.type : "txt"}
        placeholder={
          props.placeholder ? props.placeholder : "Please Enter Value"
        }
        value={props.value[props.name]}
        onChange={handleChange}
      />
    </div>
  );
}

export default CustomInput;
