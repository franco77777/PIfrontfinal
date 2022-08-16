import { useDispatch, useSelector } from "react-redux"
import { filter, getCountry } from "../actions"
import logo from "./../mundial/search1.jpg"
import styled from "styled-components"
import "./filter.css"

let Filter = ({ setMultiplicador }) => {
  let dispatch = useDispatch()
  const countries = useSelector(state => state.countries)

  let act = []
  countries.map(
    d => d.activities.length && d.activities.map(e => act.push(e.name))
  )
  let acti = new Set(act)
  let activ = [...acti]
  return (
    <>
      <div className="filterclass" id="filter">
        <select
          name="continente"
          id="2"
          onChange={e => {
            setMultiplicador(1)
            dispatch(filter(e.target.value))
          }}
        >
          <option value="filter" className="filtrado">
            Filter
          </option>
          <optgroup label="By World Winners" />
          <option value="Copas">All</option>
          <optgroup label="By Continent" />
          <option value="Continentes">All</option>
          <option value="Americas">America</option>
          <option value="Europe">Europa</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctic">Antartida</option>
          <optgroup label="By Activity" />
          {activ.map((e, i) => (
            <option key={i} value={e}>
              {e}
            </option>
          ))}
        </select>
        <label></label>
      </div>
      <span className="posicion" id="buscar">
        <div className="buscar">
          <input
            id="input"
            type="text"
            placeholder="Search Country..."
            onChange={e => {
              setMultiplicador(1)
              dispatch(getCountry(e.target.value))
            }}
          />
          <div className="btn">
            <LogoSearch src={logo} />
          </div>
        </div>
      </span>
    </>
  )
}

let LogoSearch = styled.img`
  width: 40px;
  height: 40px;

  clip-path: circle(50% at center);
  cursor: pointer;

  transition: all 1s ease;
`

export default Filter
