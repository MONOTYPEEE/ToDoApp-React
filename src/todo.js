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
    // console.log(tdList);
  }
  function itemRemove(event){
    // console.log(event.nativeEvent.path[1].className);
    setTdList(tdList.filter(function(element){
      if(element.timeKey != event.nativeEvent.path[1].className){
        return element;
      }
    }));
  }

  return (
    <div>
      <form onSubmit={addtdl}>
        <input value={tdInput} type="text" placeholder="WHATUGONNADO?" onChange={inputChange}/>
        <button>추가</button>
      </form>

      {tdList.map(function(ele){
        return(
          <TodoElem data={ele.data} key={ele.timeKey} gt={ele.timeKey} removeAction={itemRemove}/>);
      })}
    </div>
  );
}

export default Todo;
