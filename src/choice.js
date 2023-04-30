import React from "react";

export default function Choice(props){
    return(
        <div>     
            <button className="button">{props.value}</button>
        </div>
    )
}