
import React,{useEffect, useState} from "react";
import './../styles/App.css';

const App = () => {
  const [timer,setTimer]=useState(0);
  const [isRunning,setIsRunning]=useState(false);
  const minutes = String(Math.floor(timer / 6000)).padStart(2, "0");
  const seconds = String(Math.floor((timer % 6000) / 100)).padStart(2, "0");
  const centiseconds = String(timer % 100).padStart(2, "0");
  const [lap,setLap]=useState([]);
  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setTimer((previousTimer) => previousTimer + 1);
    }, 10);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  return (
    <div>

       {minutes}:{seconds}:{centiseconds}
       <button onClick={() => setIsRunning(true)}>start</button>
       <button onClick={() => setIsRunning(false)}>stop</button>
       <button onClick={()=>setLap(prev=>[...prev, `${minutes}:${seconds}:${centiseconds}`])}>Lap</button>
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
