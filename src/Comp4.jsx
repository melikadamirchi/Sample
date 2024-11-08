import { useState } from "react";

function Comp4() {
 const [num,setNum]=useState(0) ;  

function incrs() {
    setNum(num+1)
}
 return(<>
 {num}
 <button onClick={incrs}>Increase the number</button>

 </>)

}

export default Comp4;