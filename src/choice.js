import React from "react";

export default function Choice(props){

    const styles = {
        backgroundColor : props.answer? 'green' : '#f5f5f5'
    }

    return(
        <div>     
            <button style={styles} className="button" onClick={props.hold}>{props.value}</button>
        </div>
    )
}