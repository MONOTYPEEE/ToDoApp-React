import { useState } from "react";
import TodoElem from "./todoelm";

function Todo(){
  const [tdInput,setTdInput] = useState("");
  const [tdList,setTdList] = useState([]);

  function inputChange(event){
    setTdInput(event.target.value);
  }
  function addtdl(event){
    event.preventDefault();
    if(tdInput==="") return;
    setTdList(function(now){
      return([{
        dt: tdInput,
        tm: Date.now(),
      },...now]);
    });
    setTdInput("");
    console.log(tdList);
  }

  return (
    <div>
      <form onSubmit={addtdl}>
        <input value={tdInput} type="text" placeholder="WHATUGONNADO?" onChange={inputChange}/>
        <button>추가</button>
      </form>

      {tdList.map(function(ele, index){
        return(
          <TodoElem data={ele.dt} key={ele.tm} />);
      })}
    </div>
  );
}

export default Todo;
