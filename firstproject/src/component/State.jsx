function State(){
    let data="Demo"
    function update(){
        data="Example"
        alert(data)
    }
    return(
        <h1>
        <h1>state in React</h1>
        <h1>{data}</h1>
        <button onClick={update}>Click on update</button>
        </h1>
    )
}
export default State