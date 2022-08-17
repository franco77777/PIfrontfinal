import { Route, Routes } from "react-router-dom"
import "./App.css"
import Details from "./components/Details"
import Home from "./components/Home"
import Activity from "./components/Activity"
import Intro from "./components/Intro"
import { useDispatch, useSelector } from "react-redux"
import Loader from "./components/Loader"
import { getCountries } from "./actions"
import { useEffect } from "react"

function App() {
  const countries = useSelector(state => state.countries)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCountries())
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route
        path="/country"
        element={countries.length ? <Home /> : <Loader />}
      />
      <Route
        path="/country/:id"
        element={countries.length ? <Details /> : <Loader />}
      />
      <Route
        path="/activity"
        element={countries.length ? <Activity /> : <Loader />}
      />
    </Routes>
  )
}

export default App
