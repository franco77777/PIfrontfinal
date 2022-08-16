import { Route, Routes } from "react-router-dom"
import "./App.css"
import Details from "./components/Details"
import Home from "./components/Home"
import Activity from "./components/Activity"
import Intro from "./components/Intro"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/country" element={<Home />} />
      <Route path="/country/:id" element={<Details />} />
      <Route path="/activity" element={<Activity />} />
    </Routes>
  )
}

export default App
