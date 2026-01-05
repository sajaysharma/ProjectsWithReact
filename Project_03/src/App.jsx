import { useState } from "react"



function App() {

  const [changeBg, setChangeBg] = useState("olive");



  return (
    <>
      <div className="relative min-h-screen w-full justify-center item-center " style={{ backgroundColor: changeBg }}>
      <h1 className="text-7xl text-center pt-10 mb-8 font-bold">Back Ground Colour Changer Practice</h1>

        <div className="absolute left-60 top-40 flex flex-wrap gap-3  justify-center shadow-lg px-3 py-2 rounded-3xl bg-white text-white font-semibold">
          <button onClick={() => {setChangeBg("red")}} className="px-5 border-2 border-black rounded-xl" style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => {setChangeBg("blue")}} className="px-5 border-2 border-black rounded-xl" style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => {setChangeBg("green")}} className="px-5 border-2 border-black rounded-xl" style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => {setChangeBg("orange")}} className="px-5 border-2 border-black rounded-xl" style={{ backgroundColor: "orange" }}>Orenge</button>
          <button onClick={() => {setChangeBg("yellow")}} className="px-5 border-2 border-black rounded-xl" style={{ backgroundColor: "yellow" }}>yellow</button>
          <button onClick={() => {setChangeBg("white")}} className="px-5 border-2 border-black rounded-xl text-black" style={{ backgroundColor: "white" }}>White</button>
          <button onClick={() => {setChangeBg("black")}} className="px-5 border-2 border-black rounded-xl" style={{ backgroundColor: "black" }}>black</button>
          <button onClick={() => {setChangeBg("gray")}} className="px-5 border-2 border-black rounded-xl" style={{ backgroundColor: "gray" }}>gray</button>
          <button onClick={() => {setChangeBg("purple")}} className="px-5 border-2 border-black rounded-xl" style={{ backgroundColor: "purple" }}>purple</button>
          <button onClick={() => {setChangeBg("lavender")}} className="px-5 border-2 border-black rounded-xl text-black" style={{ backgroundColor: "lavender" }}>lavender</button>
          <button onClick={() => {setChangeBg("olive")}} className="px-5 border-2 border-black rounded-xl" style={{ backgroundColor: "olive" }}>olive</button>
        </div>
      </div>
    </>
  )
}

export default App
