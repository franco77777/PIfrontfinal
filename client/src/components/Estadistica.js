import styled from "styled-components"
import { counterRequest, getCountries, orderPrediccion } from "../actions"
import imagen from "./../mundial/puedeservir.png"
import { useDispatch, useSelector } from "react-redux"
import "./estadistica.css"
import { useEffect } from "react"

import { useState } from "react"

const Estadistica = ({ sera, setSera }) => {
  const counter = useSelector(state => state.counter)
  const countries = useSelector(state => state.countries)

  const dispatch = useDispatch()
  const prediccion = useSelector(state => state.prediccion)

  /*  const prueba = async () => {
    await counterRequest()
    await setSera([...counter])
    console.log("souysera", sera)
  } */

  /* setInterval(() => {
    console.log("sysera", sera)
  }, 5000)  */

  sera.sort((a, b) => b.numeros - a.numeros)
  let estadisticas = sera.length ? sera : counter
  const suma = estadisticas && estadisticas.reduce((a, e) => a + e.numeros, 0)

  const pais0 =
    estadisticas[0] && `${Math.round((estadisticas[0].numeros * 100) / suma)}%`

  const Div0 = styled.div`
    background-color: red;
    width: ${pais0};
    height: 15px;
    border-radius: 10px;
    transition: all 0.5s;

    :hover {
      filter: blur(6px);
    }
  `
  const pais1 =
    estadisticas[1] && `${Math.round((estadisticas[1].numeros * 100) / suma)}%`
  const Div1 = styled.div`
    background-color: red;
    width: ${pais1};
    height: 15px;
    border-radius: 10px;
    border-radius: 10px;
    transition: all 0.5s;
    :hover {
      filter: blur(6px);
    }
  `

  const pais2 =
    estadisticas[2] && `${Math.round((estadisticas[2].numeros * 100) / suma)}%`
  const Div2 = styled.div`
    border: none;
    background-color: red;
    width: ${pais2};
    height: 15px;
    border-radius: 10px;
    transition: all 0.5s;
    :hover {
      filter: blur(6px);
    }
  `
  const pais3 =
    estadisticas[3] && `${Math.round((estadisticas[3].numeros * 100) / suma)}%`
  const Div3 = styled.div`
    background-color: red;
    width: ${pais3};
    height: 15px;
    border-radius: 10px;
    border-radius: 10px;
    transition: all 0.5s;
    :hover {
      filter: blur(6px);
    }
  `
  const pais4 =
    estadisticas[4] && `${Math.round((estadisticas[4].numeros * 100) / suma)}%`
  const Div4 = styled.div`
    background-color: red;
    width: ${pais4};
    height: 15px;
    border-radius: 10px;
    border-radius: 10px;
    transition: all 0.5s;
    :hover {
      filter: blur(6px);
    }
  `
  const pais5 =
    estadisticas[5] && `${Math.round((estadisticas[5].numeros * 100) / suma)}%`
  const Div5 = styled.div`
    background-color: red;
    width: ${pais5};
    height: 15px;
    border-radius: 10px;
    border-radius: 10px;
    transition: all 0.5s;
    :hover {
      filter: blur(6px);
    }
  `
  const pais6 =
    estadisticas[6] && `${Math.round((estadisticas[6].numeros * 100) / suma)}%`
  const Div6 = styled.div`
    background-color: red;
    width: ${pais6};
    height: 15px;
    border-radius: 10px;
    border-radius: 10px;
    transition: all 0.5s;
    :hover {
      filter: blur(6px);
    }
  `
  const pais7 =
    estadisticas[7] && `${Math.round((estadisticas[7].numeros * 100) / suma)}%`
  const Div7 = styled.div`
    background-color: red;
    width: ${pais7};
    height: 15px;
    border-radius: 10px;
    border-radius: 10px;
    transition: all 0.5s;
    :hover {
      filter: blur(6px);
    }
  `
  const pais8 =
    estadisticas[8] && `${Math.round((estadisticas[8].numeros * 100) / suma)}%`
  const Div8 = styled.div`
    background-color: red;
    width: ${pais8};
    height: 15px;
    border-radius: 10px;
    border-radius: 10px;
    transition: all 0.5s;
    :hover {
      filter: blur(6px);
    }
  `
  const pais9 =
    estadisticas[9] && `${Math.round((estadisticas[9].numeros * 100) / suma)}%`
  const Div9 = styled.div`
    background-color: red;
    width: ${pais9};
    height: 15px;
    border-radius: 10px;
    border-radius: 10px;
    transition: all 0.5s;
    :hover {
      filter: blur(6px);
    }
  `

  console.log("soy counter", counter)
  console.log("soy sera", sera)

  return (
    <body className="bodyestadistica">
      <section className="imgprediccion">
        <img src={imagen} alt="prediccion" />
      </section>

      <h1 className="top10">Top 10 Favorite Teams</h1>
      <article className="articleestadistica">
        <section>
          <p>{estadisticas[0] && estadisticas[0].numeros} votes</p>&nbsp;
          <img src={estadisticas[0] && estadisticas[0].flags} alt="1" />
          <Div0 />
          &nbsp;
          <span>{pais0}</span>
        </section>
        <section>
          <p>{estadisticas[1] && estadisticas[1].numeros} votes</p>&nbsp;
          <img src={estadisticas[1] && estadisticas[1].flags} alt="3" />
          <Div1 />
          &nbsp;
          <span>{pais1}</span>
        </section>
        <section>
          <p>{estadisticas[2] && estadisticas[2].numeros} votes</p>&nbsp;
          <img src={estadisticas[2] && estadisticas[2].flags} alt="2" />
          <Div2 />
          &nbsp;
          <span>{pais2}</span>
        </section>
        <section>
          <p>{estadisticas[3] && estadisticas[3].numeros} votes</p>&nbsp;
          <img src={estadisticas[3] && estadisticas[3].flags} alt="1" />
          <Div3 />
          &nbsp; &nbsp;
          <span>{pais3}</span>
        </section>
        <section>
          <p>{estadisticas[4] && estadisticas[4].numeros} votes</p>&nbsp;
          <img src={estadisticas[4] && estadisticas[4].flags} alt="1" />
          <Div4 />
          &nbsp;
          <span>{pais4}</span>
        </section>
        <section>
          <p>{estadisticas[5] && estadisticas[5].numeros} votes</p>&nbsp;
          <img src={estadisticas[5] && estadisticas[5].flags} alt="1" />
          <Div5 />
          &nbsp;
          <span>{pais5}</span>
        </section>
        <section>
          <p>{estadisticas[6] && estadisticas[6].numeros} votes</p>&nbsp;
          <img src={estadisticas[6] && estadisticas[6].flags} alt="1" />
          <Div6 />
          &nbsp;
          <span>{pais6}</span>
        </section>
        <section>
          <p>{estadisticas[7] && estadisticas[7].numeros} votes</p>&nbsp;
          <img src={estadisticas[7] && estadisticas[7].flags} alt="1" />
          <Div7 />
          &nbsp;
          <span>{pais7}</span>
        </section>
        <section>
          <p>{estadisticas[8] && estadisticas[8].numeros} votes</p>&nbsp;
          <img src={estadisticas[8] && estadisticas[8].flags} alt="1" />
          <Div8 />
          &nbsp;
          <span>{pais8}</span>
        </section>
        <section>
          <p>{estadisticas[9] && estadisticas[9].numeros} votes</p>&nbsp;
          <img src={estadisticas[9] && estadisticas[9].flags} alt="1" />
          <Div9 />
          &nbsp;
          <span>{pais9}</span>
        </section>
        <p className="mensajito">
          click on the flag of your favorite team to vote
        </p>
      </article>
    </body>
  )
}

export default Estadistica
