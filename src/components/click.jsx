import React from "react";
import CardWrapper from "./card-wrapper";

function FunctionClick(){
    function clickHandler(){
        console.log("clicked");
    }
    return(
        <div>
            <button onClick={clickHandler}></button>
        </div>
    )
}

export default FunctionClick