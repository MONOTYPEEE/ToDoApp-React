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
    if(tdInput===""){
      return;
    }

    setTdList(function(now){
      return([{
        data: tdInput,
        timeKey: Date.now(),
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

      {tdList.map(function(ele){
        return(
          <TodoElem data={ele.data} key={ele.timeKey} />);
      })}
    </div>
  );
}

export default Todo;
