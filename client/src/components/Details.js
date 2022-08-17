import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import "./details.css"
import imagenes from "./imagenes"
import estrella from "./../mundial/estrella.jpg"
import logoinicio from "./../mundial/logohome.jpg"
import { detalles, getCountries } from "../actions"
import { useEffect } from "react"

const Details = () => {
  const countries = useSelector(state => state.countries)
  const params = useParams()
  const details = useSelector(state => state.details)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(detalles(params.id))
    dispatch(getCountries())
  }, [params.id])

 
  return (
    <div className="details">
      <div className="logoinicio">
        <Link to="/country">
          <img classname="asdfj" src={logoinicio} alt="logoinicio" />
        </Link>
      </div>
      <div className="details1">
        <div className="details2">
          <img src={details.flags} alt={details.name} />
          <h3 className="titulopais">{details.name}</h3>
          <h3>Capital: {details.capital}</h3>
          <h3>ISO 3166-1 alfa-3: {details.id}</h3>
          <h3>Population: {details.population}</h3>
          <h3>Continent: {details.region}</h3>
          <h3>Area: {details.area} km2</h3>
          <h3>Sub Region: {details.subregion}</h3>
        </div>
        <div className="imagenesganadores">
          {details.id === "ARG" ? <img src={imagenes.ARG} alt="ARG" /> : null}
          {details.id === "BRA" ? <img src={imagenes.BRA} alt="BRA" /> : null}
          {details.id === "GBR" ? <img src={imagenes.GBR} alt="GBR" /> : null}
          {details.id === "DEU" ? <img src={imagenes.DEU} alt="DEU" /> : null}
          {details.id === "URY" ? <img src={imagenes.URY} alt="URY" /> : null}
          {details.id === "ESP" ? <img src={imagenes.ESP} alt="ESP" /> : null}
          {details.id === "ITA" ? <img src={imagenes.ITA} alt="ITA" /> : null}
          {details.id === "FRA" ? <img src={imagenes.FRA} alt="FRA" /> : null}
        </div>
        <div>
          {details.copas &&
            details.copas.map(e => (
              <div className="mundialesganados">
                <div className="estrellademundial">
                  <img src={estrella} alt="estrella" />
                </div>
                <div className="mundiales">
                  <span>{e.quantity}</span> &nbsp;
                  <img src={details.flags} alt={details.name} /> &nbsp;
                  {`${details.name}
              ${parseInt(e.resultado[0])}:${parseInt(e.resultado[1])}`}
                  &nbsp;
                  {countries.map(d => (d.id === e.vs ? d.name : null))} &nbsp;
                  <span>
                    {countries.map(d =>
                      d.id === e.vs ? (
                        <img src={d.flags} alt={d.name} />
                      ) : undefined
                    )}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="activities1">
        {details.activities &&
          details.activities.map((e, i) => (
            <div key={i}>
              <p>Activity: {e.name}</p>
              <p>Difficult: {e.difficult}</p>
              <p>Season: {e.season}</p>
              <span id="hours">Duration: {e.duration}</span>
              <label for="hours"> hours</label>
              <span id="minutes"> {e.minutes}</span>
              <label for="minutes"> minutes</label>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Details
