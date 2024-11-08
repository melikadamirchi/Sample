import { useEffect, useState } from "react";

function Comp8Child() {
  const [inp, setInp] = useState("");

  useEffect(() => {
    console.log("mounted");
  }, [inp]);
  const fncChnge = (e) => {
    setInp(e.target.value);
  };
  return (
    <>
      <input onChange={fncChnge} type="text" name="" id="" />
      <h6>{inp}</h6>
    </>
  );
}
export default Comp8Child;
