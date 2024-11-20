import Axios from "axios";
import { useEffect, useState } from "react";
// fetch("https://catfact.ninja/fact").then((x) =>
//   x.json().then((data) => console.log(data))
// );

function Comp9() {
  const [inp, setInp] = useState("");
  const ftchData = () => {
    Axios.get("https://catfact.ninja/fact").then((resp) =>
      setInp(resp.data.inp)
    );
  };
  useEffect(() => {
    ftchData();
  }, []);
  return (
    <>
      <button onClick={ftchData}>Show me some random</button>
      <p>{inp}</p>
    </>
  );
}
export default Comp9;
