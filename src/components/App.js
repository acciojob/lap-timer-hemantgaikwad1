
import React,{useEffect, useState} from "react";
import './../styles/App.css';

const App = () => {
  const [timer,setTimer]=useState(0);
  const [isRunning,setIsRunning]=useState(false);
  const hours = String(Math.floor(timer / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timer % 3600) / 60)).padStart(2, "0");
  const seconds = String(timer % 60).padStart(2, "0");
const [lap,setLap]=useState([]);
  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setTimer((previousTimer) => previousTimer + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  return (
    <div>

       {hours}:{minutes}:{seconds}
       <button onClick={() => setIsRunning(true)}>start</button>
       <button onClick={() => setIsRunning(false)}>stop</button>
       <button onClick={()=>setLap(prev=>[...prev, `${hours}:${minutes}:${seconds}`])}>Lap</button>
       <button onClick={() => setTimer(0)}>reset</button>
{
  lap.map((el)=>(
<p>
{el}
</p>
  ))
}
    </div>
  )
}

export default App
