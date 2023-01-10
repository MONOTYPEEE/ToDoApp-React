/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react";
import MyButton from "./btn";

const bx = css`
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    background-color: #eeeeee;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 0.5rem;
    gap: 8px;
`

function TodoElem(props){
    // console.log(props);
    return(
        <div css={bx} className={props.gt}>
            <MyButton onClick={props.removeAction} value="삭제" />
            {props.data}
        </div>
    );
}

export default TodoElem;