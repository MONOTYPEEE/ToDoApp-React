function TodoElem(props){
    return(
        <div>
            <button>삭제</button>
            {props.elm}
        </div>
    );
}

export default TodoElem;