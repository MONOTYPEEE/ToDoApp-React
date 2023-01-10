function TodoElem(props){
    console.log(props);
    return(
        <div>
            <button>삭제</button>
            {props.data}
        </div>
    );
}

export default TodoElem;