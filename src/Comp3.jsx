function Comp3() {
  const lists = ["ex1", "ex2", "ex3"];
  return (
    <>
      {lists.map((val, key) => {
        return <h2 key={key}>{val}</h2>;
      })}
    </>
  );
}
export default Comp3;
