import React ,{useState , useEffect} from "react";

const CountdownTimes: React.FC = () =>{
  const [time,setTime]=useState(0);
  const [isRunning , setIsRunning] = useState(false);
  const [remainingTime , setRemainingTime] = useState(0);


useEffect(()=>{
    let timer : NodeJS.Timeout ;
    if (isRunning && remainingTime > 0){
        timer = setInterval (()=>{
            setRemainingTime((prev)  => prev - 1);
        } , 1000);
    }
else if  (remainingTime === 0){
    setIsRunning (false)
}  
return () => clearInterval(timer);
} , [isRunning , remainingTime])


const  handleStart = () => {
    if (time>0){
setRemainingTime(time);
setIsRunning (true);
    }
}

const handlePause =()=>{
    setIsRunning(false);
}

const handleReset =()=>{
    setIsRunning(false);
    setRemainingTime(0);
    setTime(0);
}

return (
    <div className="flex flex-col min-h-screen 
    items-center justify-center bg-gradient-to-br from-black to-gray">

<h1 className="text-4xl font-extrabold uppercase mb-6 text-black">CountDown Timer</h1>

<input
type="number"
className="border-2 border-gray-400 bg-transparent  
p-3 mb-6 text-sky-400 text-xl rounded "
placeholder="Enter Time in Seconds"
value={time >0 ? time:""}
onChange={(e) => setTime(Number(e.target.value)) }
/>
<div className="text-3xl font-semibold uppercase mb-5 
text-white">
{remainingTime} Seconds remaining

</div>

<div>

<button
onClick={handleStart}
className="text-white px-8 py-4 font-size-2px rounded-lg font-normal
bg-gradient-to-r from-pink-500
 to-blue-500 hover:from-pink-600 hover : to-blue-600"
>
    Start
</button>

<button
onClick={handlePause}
className="text-white px-8 py-4 rounded-lg font-normal
bg-gradient-to-r from-yellow-500
 to-orange-500 hover:from-yellow-600 hover : to-orange-600"
>
    Pause
</button>

<button
onClick={handleReset}
className="text-white px-8 py-4 rounded-lg font-normal
bg-gradient-to-r from-purple-500
 to-yellow-500 hover:from-purple-600 hover : to-yellow-600"
>
    Reset
</button>

<footer className="mt-10 text-black text-sm text-center">
 Under The SuperVision of Anum Saeed 
</footer>
</div>

    </div>
)



}

export default CountdownTimes