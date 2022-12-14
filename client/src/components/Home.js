import { counterRequest, getCountries, orderPrediccion } from "../actions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Order from "./Order"
import Filter from "./Filter"
import "./home.css"
import SlideShow from "./SlideShow"
import styled from "styled-components"
import estrella from "./../mundial/estrella.jpg"
import salmon from "./../mundial/salmon.jpg"
import Prediccion from "./Prediccion"
import Estadistica from "./Estadistica"

function Home() {
  const dispatch = useDispatch()
  const filtered = useSelector(state => state.filtered)
  const countries = useSelector(state => state.countries)
  const counter = useSelector(state => state.counter)
  const [sera, setSera] = useState([])

  useEffect(() => {
    dispatch(counterRequest())
    dispatch(getCountries())
  }, [])
  const [inputPaginado, setInputPaginado] = useState("")
  const [multiplicador, setMultiplicador] = useState(0)

  let final = 9 + multiplicador //19-29
  let inicio = final - 10 //
  let paginados = null

  if (inicio < 9) {
    paginados = filtered.slice(0, 9)
  } else {
    paginados = filtered.slice(inicio, final)
  }
  let disablePrev = false
  if (inicio > 8) {
    disablePrev = true
  }
  let disableNext = true
  if (final >= filtered.length) {
    disableNext = false
  }

  const paginado = e => {
    if (e.target.value === "+") {
      setMultiplicador(multiplicador + 10)
    }
    if (e.target.value === "-") {
      setMultiplicador(multiplicador - 10)
    }
    setInputPaginado("")
  }

  let botonesP2 = filtered.slice(9, filtered.length)
  let botones2 = Math.ceil(botonesP2.length / 10)
  let a = [0]
  for (let i = 0; i < botones2; i++) {
    a.push(i + 1)
  }

  let inputChange = e => {
    if (
      !/^([0-9])*$/.test(e.target.value) ||
      e.target.value < 1 ||
      e.target.value > a.length
    ) {
      return setInputPaginado("")
    }
    setInputPaginado(e.target.value)
    setMultiplicador(e.target.value * 10 - 10)
  }

  

  return (
    <div className="header">
      <header className="header1">
        <div className="navBar">
          {/* <Link className="link" to="/">
            <LogoInicio clasname="esta" src={logo2} alt="sdf" />
          </Link> */}

          <Order
            setMultiplicador={setMultiplicador}
            inputChange={inputChange}
          />
          <Filter
            setMultiplicador={setMultiplicador}
            inputChange={inputChange}
          />
          <div className="createbodyfalso" id="create">
            <div className="deltitulocreate">
              <Link className="botontitulo" to="/activity">
                <span id="span1"></span>
                <span id="span2"></span>
                <span id="span3"></span>
                <span id="span4"></span>
                Create Activity
              </Link>
            </div>
          </div>
        </div>
        <div className="slideshow">
          <SlideShow />
        </div>
      </header>
      <div className="main">
        <div className="paginado">
          <button
            className="botoncuatro"
            onClick={paginado}
            value="-"
            disabled={!disablePrev}
          >
            <div className="icono1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-left-short"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                />
              </svg>
            </div>
            <span>Prev</span>
          </button>
          <div className="padreinputpaginado">
            <input
              onChange={inputChange}
              value={inputPaginado}
              type="text"
              className="inputpaginado"
              placeholder={Math.round(multiplicador / 10 + 1)}
            />
            &nbsp; of &nbsp;{a.length}
          </div>
          <button
            className="botoncinco"
            onClick={paginado}
            value="+"
            disabled={!disableNext}
          >
            <div className="icono">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </div>
            <span>Next</span>
          </button>
        </div>
        <section className="table">
          {paginados &&
            paginados.map((e, i) => (
              <div key={i} id="prueba" className="prueba">
                <div className="estrellaconteiner">
                  {e.copas && e.copas.length ? (
                    e.copas.map((e, i) => (
                      <div className="estrella" key={i}>
                        <img src={estrella} alt="estrella" />
                      </div>
                    ))
                  ) : (
                    <div className="estrellafalsa"></div>
                  )}
                </div>
                <div className="tables ">
                  <Link to={`/country/${e.id}`}>
                    <img src={e.flags} alt={e.flag} />
                  </Link>
                </div>
                <div className="cardContent">
                  <p className="names2">{e.name}</p>
                  <p className="names">{e.region}</p>
                </div>
              </div>
            ))}
        </section>
        <div className="paginado">
          <button
            className="botoncuatro"
            onClick={paginado}
            value="-"
            disabled={!disablePrev}
          >
            <div className="icono1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-left-short"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                />
              </svg>
            </div>
            <span>Prev</span>
          </button>
          <div className="padreinputpaginado">
            <input
              onChange={inputChange}
              value={inputPaginado}
              type="text"
              className="inputpaginado"
              placeholder={Math.round(multiplicador / 10 + 1)}
            />
            &nbsp; of &nbsp;{a.length}
          </div>
          <button
            className="botoncinco"
            onClick={paginado}
            value="+"
            disabled={!disableNext}
          >
            <div className="icono">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </div>
            <span>Next</span>
          </button>
        </div>
      </div>
      <Estadistica sera={sera} setSera={setSera} />
      <Prediccion countries={countries} setSera={setSera} sera={sera} />
      <footer className="salmon">
        <div className="newbox">
          <div className="salmon1">
            <img src={salmon} alt="" id="salmon" />
            <span className="salvador">
              Jesus is the way, the truth, and the life
            </span>
          </div>

          <ul className="nuevodatos">
            <span>Website Creator: </span>
            <li>
              <a href="https://www.facebook.com/franco.vedia.12">
                <i class="fab fa-facebook-f icon"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/franco-vedia-602877247/">
                <i class="fab fa-linkedin-in icon"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="antes" id="antes"></div>
        <div className="despues" id="despues"></div>
      </footer>
    </div>
  )
}

let LogoInicio = styled.img`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  filter: brightness(1.1);
  cursor: pointer;
  transition: 1s;
  :hover {
    transform: scale(1.2);
  }
`

export default Home
