function Arrow(){
    function callfun(){
        alert("Function call");
    }
    const fruit=()=>
    {
        alert("Example of Arrow Function")
    }
    const parameter=(name)=>
    {
        alert(name)
    }
   
    return(
        <>
        <h1>Example of arrow function</h1>
      <button onClick={callfun}>Click to call function</button>
      <button onClick={()=>fruit()}>Arrow function</button>
      <button onClick={()=>parameter()}>Arrow function2</button>
      <button onClick={()=>parameter("Click on apple")}>Apple</button>
      <button onClick={()=>parameter("Click on banana")}>Banana</button>
        </>
    )
}
export default Arrow