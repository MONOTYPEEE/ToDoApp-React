import { useState } from "react";

function Todo(){
  const [tdInput,setTdInput] = useState("");
  // const [tdList,setTdList] = useState([]);

  function inputChange(event){
    setTdInput(event.target.value);
  }

  return (
    <div>
      <input value={tdInput} type="text" placeholder="WHATUGONNADO?" onChange={inputChange}/>
      <button>추가</button>
    </div>
  );
}

export default Todo;
