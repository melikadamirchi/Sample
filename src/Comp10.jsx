import { useState } from "react";
import axios from "axios";

function Comp10() {
  const [inp, setInp] = useState("");
  const [ap, setAp] = useState("");
  const ftchDate = () => {
    axios.get(`https://api.agify.io/?name= ${inp}`).then((v) => {
      setAp(v.data);
    });
  };

  return (
    <>
      <input
        placeholder="Melika"
        type="text"
        name=""
        id=""
        onChange={(x) => {
          setInp(x.target.value);
        }}
      />
      <button onClick={ftchDate}>Show</button>
      <h5>Name:{ap.name}</h5>
      <h5>Age:{ap.age}</h5>
      <h5>Count:{ap.count}</h5>
      <p></p>
    </>
  );
}
export default Comp10;
