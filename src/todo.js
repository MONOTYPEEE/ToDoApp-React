/** @jsxImportSource @emotion/react */
import { useState } from "react";
import TodoElem from "./todoelm";
import {css} from "@emotion/react";
import MyButton from "./btn";

const boxx = css`
  width: fit-content;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 14px #00000033;
  padding: 16px;
  border-radius: 10px;
`
const iptDe = css`
  background-color: white;
  border: #08080829 1px solid;
  padding: 4px 8px;
  border-radius: 8px;
  margin-right: 8px;
  font-size: 1.25rem;
  box-sizing: border-box;
`

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
    localStorage.setItem('todoDB',JSON.stringify(tdList));
    // console.log(tdList);
  }
  function itemRemove(event){
    // console.log(event.nativeEvent.path);
    setTdList(tdList.filter(function(element){
      if(element.timeKey != event.nativeEvent.path[1].classList[0]){
        return element;
      }
    }));
  }

  return (
      <div css={boxx}>
        <form onSubmit={addtdl}>
          <input css={iptDe} value={tdInput} type="text" placeholder="할 일 추가" onChange={inputChange}/>
          <MyButton value="Add"/>
        </form>

        {tdList.map(function(ele){
          return(
            <TodoElem data={ele.data} key={ele.timeKey} gt={ele.timeKey} removeAction={itemRemove}/>);
        })}
      </div>
  );
}

export default Todo;
