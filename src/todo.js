import { useState } from "react";

function Todo(){
  const [tdInput,setTdInput] = useState("");
  const [tdList,setTdList] = useState([]);

  function inputChange(event){
    setTdInput(event.target.value);
  }
  function addtdl(){
    setTdList(function(now){
      return([tdInput,...now]);
    });
    setTdInput("");
    console.log(tdList);
  }

  return (
    <div>
      <input value={tdInput} type="text" placeholder="WHATUGONNADO?" onChange={inputChange}/>
      <button onClick={addtdl}>추가</button>
    </div>
  );
}

export default Todo;
