import { useState } from "react";

export default function ButtonLogic(props) {
    function countHandler() {
        props.setCount(props.count + 1);  // Use setCount with the correct case
    }

    return (
        <button onClick={countHandler}>
            Counter {props.count}
        </button>
    );
}
