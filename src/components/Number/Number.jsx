import { useEffect, useState } from "react";

export default function Number() {
  const [number, setNumber] = useState(0);
  useEffect(()=>{
    document.title = "You have clicked"+number+"times";
  })
  return (
    <div>
        <p>You have clicked {number} times</p>
      <button onClick={()=>setNumber(number+1)}>Click Me</button>
    </div>
  );
}
