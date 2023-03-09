import { useState, useMemo, useEffect } from "react";

const UseMemo = () => {
  const [theme, setTheme] = useState(false);
  const [number, setNumber] = useState(0);
  
  // const Styling = useMemo(() => {
  //   return {
  //     backgroundColor: theme ? "black" : "white",
  //     color: theme ? "white" : "black",
  //   };
  // }, [theme]);


  const Styling = {
      backgroundColor: theme ? "black" : "white",
      color: theme ? "white" : "black",
    };

  // JS don't understand the reference of the object that is why console.log is
  // called

  useEffect(() => {
    console.log("Styling is being changed");
  }, [Styling]);

  useEffect(() => {
   
    console.log("number is being changed");
  }, [number]);

  const resultedNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  return (
    <div>
      <input type="number" onChange={(e) => setNumber(e.target.value)}></input>
      <h1 style={Styling}>{resultedNumber}</h1>
      <button
        onClick={() => {
          console.log(Styling);
          setTheme((prevDark) => !prevDark);
        }}
      >
        Click Me{" "}
      </button>
    </div>
  );
};

export default UseMemo;
function slowFunction(number) {
  for (let i = 0; i < 1000000000; i++) {}
  return number * 2;
}
