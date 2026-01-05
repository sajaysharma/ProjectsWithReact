import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [timer, setTimer] = useState(0)
  const [clock, setClock] = useState(new Date());
  const intervalRef = useRef(null)
  const renders = useRef(0)
  const clockIntervalRef = useRef(null);

  renders.current++;

  const startTimer = useCallback(() => {
    if (intervalRef.current !== null) return

    intervalRef.current = setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000)
  }, []);

  const stopTimer = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, [])

  const resetAll = useCallback(() => {
    stopTimer();
    startTimer();
    setTimer(0);
    setCount(0);
  }, [stopTimer, startTimer]);

  useEffect(() => {
    clockIntervalRef.current = setInterval(() => {
      setClock(new Date()); // har second clock update
    }, 1000);

    // cleanup
    return () => {
      clearInterval(clockIntervalRef.current);
    };
  }, []);

  const hours = clock.getHours().toString().padStart(2, "0");
  const minutes = clock.getMinutes().toString().padStart(2, "0");
  const seconds = clock.getSeconds().toString().padStart(2, "0");

  return (
    <>
      <div className='bg-gray-500 min-h-screen  text-white'>
        <h2 className='font-bold text-8xl text-center text-blue-700 '>DASHBOARD</h2>
        <div className='flex justify-center my-8 flex-col items-center'>
          <p>Rendering ID: {renders.current}</p>

        </div>
        <div className='flex justify-center flex-col items-center'>
          <button className='rounded bg-green-500 w-25 font-semibold border-2 hover:bg-green-700 px-2' onClick={() => setCount((c) => c + 1)}>Increase(+)</button>
          <p>Number of Time: {count}</p>
        </div>
        <div>
          <h3 className='text-xl font-bold text-center'>Timer: {timer}s</h3>
          <div className='flex justify-center gap-10 mt-5'>
            <button className='rounded border-3 bg-red-500 font-semibold px-2 hover:bg-red-700' onClick={stopTimer}>Stop</button>
            <button className='rounded border-3 bg-green-500 font-semibold px-2 hover:bg-green-700' onClick={resetAll}>Reset</button>
            <button className='rounded border-3 bg-blue-700 font-semibold px-2 hover:bg-blue-800' onClick={startTimer}>Start</button>
          </div>
        </div>
        <div className=''>
          <h1 className='text-8xl font-bold text-center mt-10 text-black'>{hours}:{minutes}:{seconds}</h1>
        </div>
      </div>
    </>
  )
}

export default App
