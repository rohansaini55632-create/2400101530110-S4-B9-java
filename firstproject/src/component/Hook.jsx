import { useState } from "react";

function Hook(){
//let a=20;
const [data,setdata] = useState("hello");
function fun(){
    setdata("Changed value");
}
return(
    <>
    <h1>State of value</h1>
    <h1>{data}</h1>
    <button onClick={fun}>Click</button>
    </>
)
}
export default Hook