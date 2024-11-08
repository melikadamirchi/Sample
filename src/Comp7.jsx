import { useState } from "react"

function Comp7(){
    const [arr,setArr]=useState([])
    const [inp,setInp]=useState('')
  

    const chnFnc=(e)=>{
        setInp(e.target.value)
    }
    const itemAdd=()=>{
        if (inp.trim()) {  
    //    const arrItems=[...arr,inp]
    //    setArr(arrItems)
    //or
        // setArr([...arr,inp])
        // setInp('')
        const newObj={
            id: arr.length===0 ? 1 : arr[arr.length-1].id+1,
            name:inp,
            isDone:false
        }
           setArr([...arr,newObj])
           setInp('')
    }}
    const removeItem=(x)=>{
        // const newList=arr.filter((e)=>{
            // if (e === x)
            //     return false
            // else
            //     return true

            //or
        //     return e !== x
        // }) 
        // setArr(newList)

        //or

        setArr(arr.filter((t)=>t.id !==x))
        
    }
    const fncRead=(x)=>{
    setInp(inp.map((inq)=>{
        if (inq.id===x) {
            return{...inq,isDone:true}
            
        }else{
            return inq
        }
    }))
    }

    return(
        <>
        <input value={inp} type="text" name="" id="" onChange={chnFnc} />
        <button onClick={itemAdd}>Add Task</button>
        
        <ul>{arr.map((e)=>{return <><li key={e}>{e.name}</li> <button onClick={()=>removeItem(e.id)}>Del</button><button onClick={fncRead} style={{ backgroundColor: e.isDone ? "green" : "gray" }}>Done</button></>})} </ul>
        </>
    )
}
export default Comp7