import { useState } from "react"

function Comp6(){

    const [isVisible, setIsVisible] = useState(true);  
    const [txtNonsense, setTxtNonsense] = useState("click to hide/show");  

    function handleChange() {  
        // Toggle isVisible state  
        setIsVisible((prev) => {  
            const newIsVisible = !prev;  

            // Update txtNonsense based on new isVisible value  
            if (newIsVisible) {  
                setTxtNonsense("click to hide/show");  
            } else {  
                setTxtNonsense("c");  
            }  

            return newIsVisible; // Return the new state  
        });  
    }  

    return (  
        <>  
            {isVisible && <h5>{txtNonsense}</h5>}  
            <button onClick={handleChange}>Toggle</button> 
</>)
}
export default Comp6