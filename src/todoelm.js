function TodoElem(props){
    function delItem(){

    }

    return(
        <div>
            <button onClick={delItem}>삭제</button>
            {props.data}
        </div>
    );
}

export default TodoElem;