import { useState } from "react"

function Comp5(){

const [msg,setMsg]=useState(null)
    
function write(){
setMsg(event.target.value)
}
    return(<>
    <input type="text" name="txt" id="txt" onChange={write} />
<h6>{msg}</h6>
    </>)
}

export default Comp5