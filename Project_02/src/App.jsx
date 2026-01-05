
import Card from '../component/Card'
import './App.css'

function App() {

  let myObj = {
    username : "ajaysharma",
    btn: "click me"
  }


  return (
    <>
      <h1 className='text-8xl font-bold text-center mb-10 mt-15'> Props Handling practice</h1>
      <div className='flex flex-row gap-6 flex-wrap items-center justify-center'>
        <Card username = "ajaysharma" btntext = "clickMe"/>
        <Card username = "gyaneshsharma"  btntext = "PressMe"/>
        <Card username = "akashsharma" btntext = "DavaoMe" />
        <Card username = "vishalsharma"  btntext="ClickKare" />
      </div>

    </>
  )
}

export default App
