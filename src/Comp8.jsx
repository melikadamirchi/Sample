import { useState } from "react"
import Comp8Child from "./Comp8Child"

function Comp8() {
    const [inp,setInp]=useState(false)


    const fncShow=()=>{
        return setInp(!inp)
    }
    return(<>
        <button onClick={fncShow}>Show</button>
        <h6>{inp && <Comp8Child/>}</h6>
        </>)
}
export default Comp8