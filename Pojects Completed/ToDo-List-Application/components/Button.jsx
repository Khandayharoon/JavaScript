import { useState } from "react"
export default function Button (){

    const [ count, setCount ] = useState(0);

    const countHandler = () =>{
        setCount( (pervValue)=> pervValue + 1 );  
    }
    return(
        <>
            <div>
                <button onClick={countHandler}>Count {count}</button>
            </div>
        </>
    )
}