/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react";

const btnbtn = css`
    padding: 8px 16px;
    border-radius: 8px;
    background-color: #ff6f61;
    border: none;
    cursor: pointer;
`

function MyButton(props){
    return(
        <button css={btnbtn} onClick={props.onc}>{props.value}</button>
    );
}
export default MyButton