function TodoElem(props){
    // console.log(props);
    return(
        <div className={props.gt}>
            <button onClick={props.removeAction}>삭제</button>
            {props.data}
        </div>
    );
}

export default TodoElem;