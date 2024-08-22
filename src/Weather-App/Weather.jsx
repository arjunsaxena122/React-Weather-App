import Input from "./Input"
import Info from './Info.jsx'
import { useState } from "react"

export default function Weather() {
  const [weatherInfo,setWeatherInfo] = useState({
    name : "Delhi",
    humidity : 70,
    pressure: 1004,
    temp : 32.05,
    speed : 270
  })

function updateInfo(result){
  setWeatherInfo(result)
}

  return (
    <div>
      <h1 className="text-center my-10 text-2xl  underline font-semibold">Weather Application</h1>
      <Input updateInfo = {updateInfo}/>
      <Info weatherData = {weatherInfo}/>
    </div>
  )
}
