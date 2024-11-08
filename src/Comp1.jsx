

function Comp1() {  
  const age= Math.floor(Math.random())
    return ( 
       
      <div> 
        <h2>{age}</h2> 
        {age > 18 ? <h3>you are adult</h3> : <h4>you are under age</h4> }
      
      
      </div>  
    );  
  }  
  
  export default Comp1;
