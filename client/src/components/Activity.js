import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import logohome from "./../mundial/logohome.jpg"
import { Link } from "react-router-dom"
import "./activity.css"
import { getCountries } from "../actions"

let Activity = () => {
  const [actividad, setActividad] = useState({
    name: "",
    difficult: "",
    duration: "",
    season: "",
    minutes: "",
  })
  const [deleteCountries, setdeleteCountries] = useState([])
  const countries = useSelector(state => state.countries)
  const [validation, setValidation] = useState({
    activity: true,
    duration: true,
    submit: true,
  })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  let orderedCountries = countries.sort((a, b) => {
    if (a.name > b.name) return 1
    if (a.name < b.name) return -1
    return 0
  })

  let handleChange = e => {
    setActividad({
      ...actividad,
      [e.target.name]: e.target.value,
    })
  }

  let countryChange = e => {
    if (deleteCountries.find(c => c.id === e.target.value)) return
    setdeleteCountries([
      ...deleteCountries,
      countries.find(d => d.id === e.target.value),
    ])
  }

  let deletearPais = e => {
    setdeleteCountries(deleteCountries.filter(d => d.id !== e.target.value))
  }

  let deletearPaises = e => {
    setdeleteCountries([])
  }

  let disableResetList = false
  if (deleteCountries.length) {
    disableResetList = true
  }

  let disableSubmit = true
  if (
    !actividad.name ||
    !actividad.difficult ||
    !actividad.season ||
    !deleteCountries.length ||
    actividad.duration === "" ||
    actividad.minutes === ""
  ) {
    disableSubmit = false
  } else {
    disableSubmit = true
  }

  let submit = async e => {
    e.preventDefault()
    const paisespaquete = deleteCountries.map(e => e.id)
    let b = []
    const a = countries.filter(e =>
      e.activities.filter(d =>
        d.name === actividad.name ? b.push(e.id) : undefined
      )
    )
    const existe = paisespaquete.find(e => b.includes(e))
    if (existe) {
      return alert("this activity already exists in one or more countries")
    }

    let paquete = [actividad, paisespaquete]
    let creacion = await axios.post("http://localhost:3001/activity", paquete)
    dispatch(getCountries())
    alert(creacion.data)

    console.log("soypaquete", paquete)
    console.log("soy creacion", creacion.data)
  }

  let activityValidation = e => {
    if (/^[a-zA-ZÀ-ÿ\s]{1,20}$/.test(actividad.name)) {
      setValidation({ ...validation, activity: true })
    } else {
      setValidation({ ...validation, activity: false })

      setActividad({ ...actividad, name: "" })
    }
  }

  let hoursValidation = e => {
    console.log(/^([0-9])$/.test(actividad.duration))
    console.log("soy actividad", actividad.duration)
    if (
      actividad.duration > 23 ||
      actividad.duration < 0 ||
      !/^([0-9])*$/.test(actividad.duration)
    ) {
      setValidation({ ...validation, duration: false })
      setActividad({ ...actividad, duration: "" })
    } else {
      setValidation({ ...validation, duration: true })
    }
  }

  let minutesValidation = e => {
    if (
      actividad.minutes < 0 ||
      actividad.minutes > 59 ||
      !/^([0-9])*$/.test(actividad.minutes)
    ) {
      setValidation({ ...validation, duration: false })
      setActividad({ ...actividad, minutes: "" })
    } else {
      setValidation({ ...validation, duration: true })
    }
  }

  console.log("soy actividad duration", actividad)
  //console.log("soy listcountries", listcountries)
  console.log("soy delete countries", deleteCountries)
  //console.log("soy paquete", paquete)

  //////////////////////////se puede usar styles components ?
  return (
    <header className="imagenfondo">
      <div className="logoahome">
        <Link to="/country">
          <img src={logohome} alt="logohome" />
        </Link>
      </div>
      <div className="activityHeader">
        <form onSubmit={submit}>
          <div className="semicaja">
            <h2 className="semicajita">Activity</h2>
            {!actividad.name && (
              <span className="errordeactividad"> required name</span>
            )}
            <div className="bodyfalso">
              <div className="inputbox">
                <input
                  id="inputactividad"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onKeyUp={activityValidation}
                  value={actividad.name}
                  required
                />
                <span> Name</span>
              </div>
            </div>
            <div className="error1">
              {!validation.activity && <span> only letters (20 maximum)</span>}
            </div>
            <h2>Duration</h2>
            <div className="inputduration">
              <span className="duration1">
                <span className="inputduration1">
                  <input
                    className="inputMinutes"
                    type="text"
                    inputmode="numeric"
                    name="duration"
                    onChange={handleChange}
                    id="hours"
                    value={actividad.duration}
                    onKeyUp={hoursValidation}
                    required
                  />
                  <span>hours</span>
                </span>
              </span>
              <span className="duration2">
                <span className="inputduration2">
                  <input
                    className="inputMinutes"
                    type="text"
                    id="minutes"
                    onChange={handleChange}
                    name="minutes"
                    value={actividad.minutes}
                    onKeyUp={minutesValidation}
                    required
                  />
                  <span>minutes</span>
                </span>
              </span>
            </div>

            {(actividad.duration === "" || actividad.minutes === "") && (
              <span className="error2"> required duration</span>
            )}
            <br />
            {(actividad.duration === "" || actividad.minutes === "") &&
              !validation.duration && (
                <span className="error2alter">
                  only numbers (hs 0/23) (min 0/59)
                </span>
              )}
            <h2>Difficult</h2>
            <div onChange={handleChange} className="cajaradios">
              <input
                type="radio"
                id="1"
                value={1}
                name="difficult"
                className="radioInput"
              />
              <label for="1">1</label>
              <input type="radio" id="2" value={2} name="difficult" />
              <label for="2">2</label>
              <input type="radio" id="3" value={3} name="difficult" />
              <label for="3">3</label>
              <input type="radio" id="4" value={4} name="difficult" />
              <label for="4">4</label>
              <input type="radio" id="5" value={5} name="difficult" />
              <label for="5">5</label>
              {!actividad.difficult && (
                <span className="error errordifi"> required difficult</span>
              )}
            </div>
            <h2>Season</h2>
            <div onChange={handleChange} className="temporadaRadio">
              <input type="radio" name="season" id="Winter" value="Winter" />
              <label for="Winter">Winter</label>
              <input type="radio" name="season" id="Autumn" value="Autumn" />
              <label for="Autumn">Autumn</label>
              <input type="radio" name="season" id="Spring" value="Spring" />
              <label for="Spring">Spring</label>
              <input type="radio" name="season" id="Summer" value="Summer" />
              <label for="Summer">Summer</label>
              {!actividad.season && (
                <span className="error"> required season</span>
              )}
            </div>
            <h2>Countries</h2>
            {!deleteCountries.length && (
              <label className="errorpais  " for="choosecountry">
                required country(ies)
              </label>
            )}
            <span className="select" id="select">
              <select name="" id="selectpaises" onChange={countryChange}>
                <option selected disabled id="choosecountry">
                  Choose a Country
                </option>

                {orderedCountries.map(e => (
                  <option value={e.id} name={e.id} key={e.id}>
                    {e.name}
                  </option>
                ))}
              </select>
            </span>
            <div clasname="botonresetlista">
              <button onClick={deletearPaises} disabled={!disableResetList}>
                reset list
              </button>
            </div>
            <br />
          </div>
          <div className="banderitascontenedor">
            {deleteCountries.map(e => (
              <input
                type="image"
                src={e.flags}
                onClick={deletearPais}
                value={e.id}
                key={e.id}
                className="minibanderas"
              />
            ))}
          </div>
          <div className="submitcontenedor">
            <button
              type="submit"
              disabled={!disableSubmit}
              className="createActivity"
            >
              CREATE ACTIVITY
            </button>
          </div>
          <br />
        </form>
      </div>
    </header>
  )
}

export default Activity
