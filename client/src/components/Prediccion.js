import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { counterRequest } from "../actions"
import inglaterras from "./../mundial/banderainglaterra.jpg"
import galess from "./../mundial/gales.png"
import "./prediccion.css"

let Prediccion = ({ countries, setSera, sera }) => {
  const counter = useSelector(state => state.counter)
  const paisesbajos = countries.find(e => e.id === "NLD")
  const iran = countries.find(e => e.id === "IRN")
  const qatar = countries.find(e => e.id === "QAT")
  const ecuador = countries.find(e => e.id === "ECU")
  const USA = countries.find(e => e.id === "USA")
  const senegal = countries.find(e => e.id === "SEN")
  const arabia = countries.find(e => e.id === "SAU")
  const dinamarca = countries.find(e => e.id === "DNK")
  const tunez = countries.find(e => e.id === "TUN")
  const mexico = countries.find(e => e.id === "MEX")
  const polonia = countries.find(e => e.id === "POL")
  const francia = countries.find(e => e.id === "FRA")
  const australia = countries.find(e => e.id === "AUS")
  const argentina = countries.find(e => e.id === "ARG")
  const marruecos = countries.find(e => e.id === "MAR")
  const croacia = countries.find(e => e.id === "HRV")
  const alemania = countries.find(e => e.id === "DEU")
  const japon = countries.find(e => e.id === "JPN")
  const españa = countries.find(e => e.id === "ESP")
  const costarica = countries.find(e => e.id === "CRI")
  const belgica = countries.find(e => e.id === "BEL")
  const canada = countries.find(e => e.id === "CAN")
  const camerun = countries.find(e => e.id === "CMR")
  const suiza = countries.find(e => e.id === "CHE")
  const coreasur = countries.find(e => e.id === "KOR")
  const uruguay = countries.find(e => e.id === "URY")
  const portugal = countries.find(e => e.id === "PRT")
  const ghana = countries.find(e => e.id === "GHA")
  const brasil = countries.find(e => e.id === "BRA")
  const servia = countries.find(e => e.id === "SRB")
  const gales = {
    name: "Welsh",
    flags: galess,
  }
  const inglaterra = {
    name: "England",
    flags: inglaterras,
  }
  const [existen, setExisten] = useState([])
  const s = counter.find(e => e.id === "Argentina")

  const prediccion = async e => {
    let encontrado = counter.find(d => d.id === e.target.name)
    let resultado = ++encontrado.numeros

    let enviar = await axios.put(
      `http://localhost:3001/contador/${e.target.name}`,
      [resultado]
    )
    console.log("soy encontrado", encontrado)
    console.log("soy resultado", resultado)
    await counterRequest()
    await setSera([...counter])
    console.log("souyseradeprediccion", sera)
  }

  return (
    <section className="padre ">
      <article className="match1">
        <div className="box">
          <div className="titulo">MATCH 1</div>
          <div className="m1">
            <span>{senegal && senegal.name}</span>&nbsp;
            <span>
              <img
                src={senegal && senegal.flags}
                alt={senegal && senegal.name}
                onClick={prediccion}
                name={senegal && senegal.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={paisesbajos && paisesbajos.flags}
                alt={paisesbajos && paisesbajos.name}
                onClick={prediccion}
                name={paisesbajos && paisesbajos.name}
              />
              &nbsp;
            </span>
            <span>{paisesbajos && paisesbajos.name}</span>
          </div>
          <div>Stadium Al Thumama (Doha)</div>
          <div>21-11-2022 7:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 2</div>
          <div className="m1">
            <span>England</span>&nbsp;
            <span>
              <img
                src={inglaterra.flags}
                alt="ing"
                onClick={prediccion}
                name="England"
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={iran && iran.flags}
                alt={iran && iran.name}
                onClick={prediccion}
                name={iran && iran.name}
              />
            </span>
            &nbsp;
            <span>{iran && iran.name}</span>
          </div>
          <div>Stadium Al Thumama (Doha)</div>
          <div>21-11-2022 10:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 3</div>
          <div className="m1">
            <span>{qatar && qatar.name}</span>&nbsp;
            <span>
              <img
                src={qatar && qatar.flags}
                alt={qatar && qatar.name}
                onClick={prediccion}
                name={qatar && qatar.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={ecuador && ecuador.flags}
                alt={ecuador && ecuador.name}
                onClick={prediccion}
                name={ecuador && ecuador.name}
              />
            </span>
            &nbsp;
            <span>{ecuador && ecuador.name}</span>
          </div>
          <div>Stadium Al Bayt (Jor)</div>
          <div>21-11-2022 13:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 4</div>
          <div className="m1">
            <span>Welsh</span>&nbsp;
            <span>
              <img
                src={gales.flags}
                alt={gales.name}
                onClick={prediccion}
                name={gales.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={USA && USA.flags}
                alt={USA && USA.name}
                onClick={prediccion}
                name={USA && USA.name}
              />
            </span>
            &nbsp;
            <span>{USA && USA.name}</span>
          </div>
          <div>Stadium Ahmad Bin Ali (Al Rayyan)</div>
          <div>21-11-2022 16:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 5</div>
          <div className="m1">
            <span>{argentina && argentina.name}</span>&nbsp;
            <span>
              <img
                src={argentina && argentina.flags}
                alt="gal"
                onClick={prediccion}
                name={argentina && argentina.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={arabia && arabia.flags}
                alt={arabia && arabia.name}
                onClick={prediccion}
                name={arabia && arabia.name}
              />
            </span>
            &nbsp;
            <span>{arabia && arabia.name}</span>
          </div>
          <div>Stadium Lusail (Lusail)</div>
          <div>22-11-2022 7:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 6</div>
          <div className="m1">
            <span>{dinamarca && dinamarca.name}</span>&nbsp;
            <span>
              <img
                src={dinamarca && dinamarca.flags}
                alt="gal"
                onClick={prediccion}
                name={dinamarca && dinamarca.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={tunez && tunez.flags}
                alt={tunez && tunez.name}
                onClick={prediccion}
                name={tunez && tunez.name}
              />
            </span>
            &nbsp;
            <span>{tunez && tunez.name}</span>
          </div>
          <div>Stadium Education City (Doha)</div>
          <div>22-11-2022 10:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 7</div>
          <div className="m1">
            <span>{mexico && mexico.name}</span>&nbsp;
            <span>
              <img
                src={mexico && mexico.flags}
                alt="gal"
                onClick={prediccion}
                name={mexico && mexico.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={polonia && polonia.flags}
                alt={polonia && polonia.name}
                onClick={prediccion}
                name={polonia && polonia.name}
              />
            </span>
            &nbsp;
            <span>{polonia && polonia.name}</span>
          </div>
          <div>Stadium 974 (Doha)</div>
          <div>22-11-2022 13:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 8</div>
          <div className="m1">
            <span>{francia && francia.name}</span>&nbsp;
            <span>
              <img
                src={francia && francia.flags}
                alt={francia && francia.name}
                onClick={prediccion}
                name={francia && francia.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={australia && australia.flags}
                alt={australia && australia.name}
                onClick={prediccion}
                name={australia && australia.name}
              />
            </span>
            &nbsp;
            <span>{australia && australia.name}</span>
          </div>
          <div>Stadium Al Janoub (Al Wakrah)</div>
          <div>22-11-2022 16:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 9</div>
          <div className="m1">
            <span>{marruecos && marruecos.name}</span>&nbsp;
            <span>
              <img
                src={marruecos && marruecos.flags}
                alt={marruecos && marruecos.name}
                onClick={prediccion}
                name={marruecos && marruecos.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={croacia && croacia.flags}
                alt={croacia && croacia.name}
                onClick={prediccion}
                name={croacia && croacia.name}
              />
            </span>
            &nbsp;
            <span>{croacia && croacia.name}</span>
          </div>
          <div>Stadium Al Bayt (Jor)</div>
          <div>23-11-2022 7:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 10</div>
          <div className="m1">
            <span>{alemania && alemania.name}</span>&nbsp;
            <span>
              <img
                src={alemania && alemania.flags}
                alt={alemania && alemania.name}
                onClick={prediccion}
                name={alemania && alemania.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={japon && japon.flags}
                alt={japon && japon.name}
                onClick={prediccion}
                name={japon && japon.name}
              />
            </span>
            &nbsp;
            <span>{japon && japon.name}</span>
          </div>
          <div>International Stadium Al Khalifa (Doha)</div>
          <div>23-11-2022 10:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 11</div>
          <div className="m1">
            <span>{españa && españa.name}</span>&nbsp;
            <span>
              <img
                src={españa && españa.flags}
                alt={españa && españa.name}
                onClick={prediccion}
                name={españa && españa.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={costarica && costarica.flags}
                alt={costarica && costarica.name}
                onClick={prediccion}
                name={costarica && costarica.name}
              />
            </span>
            &nbsp;
            <span>{costarica && costarica.name}</span>
          </div>
          <div>Stadium Al Thumama (Doha)</div>
          <div>23-11-2022 13:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 12</div>
          <div className="m1">
            <span>{belgica && belgica.name}</span>&nbsp;
            <span>
              <img
                src={belgica && belgica.flags}
                alt={belgica && belgica.name}
                onClick={prediccion}
                name={belgica && belgica.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={canada && canada.flags}
                alt={canada && canada.name}
                onClick={prediccion}
                name={canada && canada.name}
              />
            </span>
            &nbsp;
            <span>{canada && canada.name}</span>
          </div>
          <div>Stadium Ahmad Bin Ali (Al Rayyan)</div>
          <div>23-11-2022 16:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 13</div>

          <div className="m1">
            <span>{suiza && suiza.name}</span>&nbsp;
            <span>
              <img
                src={suiza && suiza.flags}
                alt={suiza && suiza.name}
                onClick={prediccion}
                name={suiza && suiza.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={camerun && camerun.flags}
                alt={camerun && camerun.name}
                onClick={prediccion}
                name={camerun && camerun.name}
              />
            </span>
            &nbsp;
            <span>{camerun && camerun.name}</span>
          </div>
          <div>Stadium Al Janoub (Al Wakrah)</div>
          <div>24-11-2022 7:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 14</div>
          <div className="m1">
            <span>{coreasur && coreasur.name}</span>&nbsp;
            <span>
              <img
                src={coreasur && coreasur.flags}
                alt={coreasur && coreasur.name}
                onClick={prediccion}
                name={coreasur && coreasur.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={uruguay && uruguay.flags}
                alt={uruguay && uruguay.name}
                onClick={prediccion}
                name={uruguay && uruguay.name}
              />
            </span>
            &nbsp;
            <span>{uruguay && uruguay.name}</span>
          </div>
          <div>Stadium Education City (Doha)</div>
          <div>24-11-2022 10:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 15</div>
          <div className="m1">
            <span>{portugal && portugal.name}</span>&nbsp;
            <span>
              <img
                src={portugal && portugal.flags}
                alt={portugal && portugal.name}
                onClick={prediccion}
                name={portugal && portugal.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={ghana && ghana.flags}
                alt={ghana && ghana.name}
                onClick={prediccion}
                name={ghana && ghana.name}
              />
            </span>
            &nbsp;
            <span>{ghana && ghana.name}</span>
          </div>
          <div>Stadium 974 (Doha)</div>
          <div>24-11-2022 13:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 16</div>
          <div className="m1">
            <span>{brasil && brasil.name}</span>&nbsp;
            <span>
              <img
                src={brasil && brasil.flags}
                alt={brasil && brasil.name}
                onClick={prediccion}
                name={brasil && brasil.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={servia && servia.flags}
                alt={servia && servia.name}
                onClick={prediccion}
                name={servia && servia.name}
              />
            </span>
            &nbsp;
            <span>{servia && servia.name}</span>
          </div>
          <div>Stadium Lusail</div>
          <div>24-11-2022 16:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 17</div>

          <div className="m1">
            <span>{gales && gales.name}</span>&nbsp;
            <span>
              <img
                src={gales && gales.flags}
                alt={gales && gales.name}
                onClick={prediccion}
                name={gales.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={iran && iran.flags}
                alt={iran && iran.name}
                onClick={prediccion}
                name={iran && iran.name}
              />
            </span>
            &nbsp;
            <span>{iran && iran.name}</span>
          </div>
          <div>Stadium Ahmad Bin Ali (Al Rayyan)</div>
          <div>25-11-2022 7:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 18</div>

          <div className="m1">
            <span>{qatar && qatar.name}</span>&nbsp;
            <span>
              <img
                src={qatar && qatar.flags}
                alt={qatar && qatar.name}
                onClick={prediccion}
                name={qatar && qatar.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={senegal && senegal.flags}
                alt={senegal && senegal.name}
                onClick={prediccion}
                name={senegal && senegal.name}
              />
            </span>
            &nbsp;
            <span>{senegal && senegal.name}</span>
          </div>
          <div>Stadium Al Thumama (Doha)</div>
          <div>25-11-2022 10:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 19</div>
          <div className="m1">
            <span>{paisesbajos && paisesbajos.name}</span>&nbsp;
            <span>
              <img
                src={paisesbajos && paisesbajos.flags}
                alt={paisesbajos && paisesbajos.name}
                onClick={prediccion}
                name={paisesbajos && paisesbajos.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={ecuador && ecuador.flags}
                alt={ecuador && ecuador.name}
                onClick={prediccion}
                name={ecuador && ecuador.name}
              />
            </span>
            &nbsp;
            <span>{ecuador && ecuador.name}</span>
          </div>
          <div>International Stadium Al Khalifa (Doha)</div>
          <div>25-11-2022 19:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 20</div>
          <div className="m1">
            <span>{inglaterra && inglaterra.name}</span>&nbsp;
            <span>
              <img
                src={inglaterra && inglaterra.flags}
                alt={inglaterra && inglaterra.name}
                onClick={prediccion}
                name={inglaterra && inglaterra.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={USA && USA.flags}
                alt={USA && USA.name}
                onClick={prediccion}
                name={USA && USA.name}
              />
            </span>
            &nbsp;
            <span>{USA && USA.name}</span>
          </div>
          <div>Stadium Al Bayt (Jor)</div>
          <div>25-11-2022 16:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 21</div>
          <div className="m1">
            <span>{tunez && tunez.name}</span>&nbsp;
            <span>
              <img
                src={tunez && tunez.flags}
                alt={tunez && tunez.name}
                onClick={prediccion}
                name={tunez && tunez.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={australia && australia.flags}
                alt={australia && australia.name}
                onClick={prediccion}
                name={australia && australia.name}
              />
            </span>
            &nbsp;
            <span>{australia && australia.name}</span>
          </div>
          <div>Stadium Al Janoub (Al Wakrah)</div>
          <div>26-11-2022 7:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 22</div>
          <div className="m1">
            <span>{polonia && polonia.name}</span>&nbsp;
            <span>
              <img
                src={polonia && polonia.flags}
                alt={polonia && polonia.name}
                onClick={prediccion}
                name={polonia && polonia.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={arabia && arabia.flags}
                alt={arabia && arabia.name}
                onClick={prediccion}
                name={arabia && arabia.name}
              />
            </span>
            &nbsp;
            <span>{arabia && arabia.name}</span>
          </div>
          <div>Stadium Education City (Doha)</div>
          <div>26-11-2022 10:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 23</div>
          <div className="m1">
            <span>{francia && francia.name}</span>&nbsp;
            <span>
              <img
                src={francia && francia.flags}
                alt={francia && francia.name}
                onClick={prediccion}
                name={francia && francia.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={dinamarca && dinamarca.flags}
                alt={dinamarca && dinamarca.name}
                onClick={prediccion}
                name={dinamarca && dinamarca.name}
              />
            </span>
            &nbsp;
            <span>{dinamarca && dinamarca.name}</span>
          </div>
          <div>Stadium 974 (Doha)</div>
          <div>26-11-2022 13:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 24</div>
          <div className="m1">
            <span>{argentina && argentina.name}</span>&nbsp;
            <span>
              <img
                src={argentina && argentina.flags}
                alt={argentina && argentina.name}
                onClick={prediccion}
                name={argentina && argentina.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={mexico && mexico.flags}
                alt={mexico && mexico.name}
                onClick={prediccion}
                name={mexico && mexico.name}
              />
            </span>
            &nbsp;
            <span>{mexico && mexico.name}</span>
          </div>
          <div>Stadium Lusail</div>
          <div>26-11-2022 16:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 25</div>
          <div className="m1">
            <span>{japon && japon.name}</span>&nbsp;
            <span>
              <img
                src={japon && japon.flags}
                alt={japon && japon.name}
                onClick={prediccion}
                name={japon && japon.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={costarica && costarica.flags}
                alt={costarica && costarica.name}
                onClick={prediccion}
                name={costarica && costarica.name}
              />
            </span>
            &nbsp;
            <span>{costarica && costarica.name}</span>
          </div>
          <div>Stadium Ahmad Bin Ali (Al Rayyan)</div>
          <div>27-11-2022 7:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 26</div>
          <div className="m1">
            <span>{belgica && belgica.name}</span>&nbsp;
            <span>
              <img
                src={belgica && belgica.flags}
                alt={belgica && belgica.name}
                onClick={prediccion}
                name={belgica && belgica.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={marruecos && marruecos.flags}
                alt={marruecos && marruecos.name}
                onClick={prediccion}
                name={marruecos && marruecos.name}
              />
            </span>
            &nbsp;
            <span>{marruecos && marruecos.name}</span>
          </div>
          <div>Stadium Al Thumama (Doha)</div>
          <div>27-11-2022 10:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 27</div>
          <div className="m1">
            <span>{croacia && croacia.name}</span>&nbsp;
            <span>
              <img
                src={croacia && croacia.flags}
                alt={croacia && croacia.name}
                onClick={prediccion}
                name={croacia && croacia.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={canada && canada.flags}
                alt={canada && canada.name}
                onClick={prediccion}
                name={canada && canada.name}
              />
            </span>
            &nbsp;
            <span>{canada && canada.name}</span>
          </div>
          <div>International Stadium Al Khalifa (Doha)</div>
          <div>27-11-2022 13:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 28</div>
          <div className="m1">
            <span>{españa && españa.name}</span>&nbsp;
            <span>
              <img
                src={españa && españa.flags}
                alt={españa && españa.name}
                onClick={prediccion}
                name={españa && españa.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={alemania && alemania.flags}
                alt={alemania && alemania.name}
                onClick={prediccion}
                name={alemania && alemania.name}
              />
            </span>
            &nbsp;
            <span>{alemania && alemania.name}</span>
          </div>
          <div>Stadium Al Bayt (Jor)</div>
          <div>27-11-2022 16:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 29</div>
          <div className="m1">
            <span>{camerun && camerun.name}</span>&nbsp;
            <span>
              <img
                src={camerun && camerun.flags}
                alt={camerun && camerun.name}
                onClick={prediccion}
                name={camerun && camerun.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={servia && servia.flags}
                alt={servia && servia.name}
                onClick={prediccion}
                name={servia && servia.name}
              />
            </span>
            &nbsp;
            <span>{servia && servia.name}</span>
          </div>
          <div>Stadium Al Janoub (Al Wakrah)</div>
          <div>28-11-2022 16:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 30</div>
          <div className="m1">
            <span>{coreasur && coreasur.name}</span>&nbsp;
            <span>
              <img
                src={coreasur && coreasur.flags}
                alt={coreasur && coreasur.name}
                onClick={prediccion}
                name={coreasur && coreasur.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={ghana && ghana.flags}
                alt={ghana && ghana.name}
                onClick={prediccion}
                name={ghana && ghana.name}
              />
            </span>
            &nbsp;
            <span>{ghana && ghana.name}</span>
          </div>
          <div>Stadium Education City (Doha)</div>
          <div>28-11-2022 10:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 31</div>
          <div className="m1">
            <span>{brasil && brasil.name}</span>&nbsp;
            <span>
              <img
                src={brasil && brasil.flags}
                alt={brasil && brasil.name}
                onClick={prediccion}
                name={brasil && brasil.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={suiza && suiza.flags}
                alt={suiza && suiza.name}
                onClick={prediccion}
                name={suiza && suiza.name}
              />
            </span>
            &nbsp;
            <span>{suiza && suiza.name}</span>
          </div>
          <div>Stadium 974 (Doha)</div>
          <div>28-11-2022 13:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 32</div>
          <div className="m1">
            <span>{portugal && portugal.name}</span>&nbsp;
            <span>
              <img
                src={portugal && portugal.flags}
                alt={portugal && portugal.name}
                onClick={prediccion}
                name={portugal && portugal.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={uruguay && uruguay.flags}
                alt={uruguay && uruguay.name}
                onClick={prediccion}
                name={uruguay && uruguay.name}
              />
            </span>
            &nbsp;
            <span>{uruguay && uruguay.name}</span>
          </div>
          <div>Stadium Lusail</div>
          <div>28-11-2022 16:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 33</div>
          <div className="m1">
            <span>{paisesbajos && paisesbajos.name}</span>&nbsp;
            <span>
              <img
                src={paisesbajos && paisesbajos.flags}
                alt={paisesbajos && paisesbajos.name}
                onClick={prediccion}
                name={paisesbajos && paisesbajos.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={qatar && qatar.flags}
                alt={qatar && qatar.name}
                onClick={prediccion}
                name={qatar && qatar.name}
              />
            </span>
            &nbsp;
            <span>{qatar && qatar.name}</span>
          </div>
          <div>Stadium Al Bayt (Jor)</div>
          <div>29-11-2022 12:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 34</div>
          <div className="m1">
            <span>{ecuador && ecuador.name}</span>&nbsp;
            <span>
              <img
                src={ecuador && ecuador.flags}
                alt={ecuador && ecuador.name}
                onClick={prediccion}
                name={ecuador && ecuador.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={senegal && senegal.flags}
                alt={senegal && senegal.name}
                onClick={prediccion}
                name={senegal && senegal.name}
              />
            </span>
            &nbsp;
            <span>{senegal && senegal.name}</span>
          </div>
          <div>International Stadium Al Khalifa (Doha)</div>
          <div>29-11-2022 12:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 35</div>
          <div className="m1">
            <span>{gales && gales.name}</span>&nbsp;
            <span>
              <img
                src={gales && gales.flags}
                alt={gales && gales.name}
                onClick={prediccion}
                name={gales.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={inglaterra && inglaterra.flags}
                alt={inglaterra && inglaterra.name}
                onClick={prediccion}
                name={inglaterra && inglaterra.name}
              />
            </span>
            &nbsp;
            <span>{inglaterra && inglaterra.name}</span>
          </div>
          <div>Stadium Ahmad Bin Ali (Al Rayyan)</div>
          <div>29-11-2022 16:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 36</div>
          <div className="m1">
            <span>{iran && iran.name}</span>&nbsp;
            <span>
              <img
                src={iran && iran.flags}
                alt={iran && iran.name}
                onClick={prediccion}
                name={iran && iran.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={USA && USA.flags}
                alt={USA && USA.name}
                onClick={prediccion}
                name={USA && USA.name}
              />
            </span>
            &nbsp;
            <span>{USA && USA.name}</span>
          </div>
          <div>Stadium Al Thumama (Doha)</div>
          <div>29-11-2022 16:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 37</div>
          <div className="m1">
            <span>{tunez && tunez.name}</span>&nbsp;
            <span>
              <img
                src={tunez && tunez.flags}
                alt={tunez && tunez.name}
                onClick={prediccion}
                name={tunez && tunez.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={francia && francia.flags}
                alt={francia && francia.name}
                onClick={prediccion}
                name={francia && francia.name}
              />
            </span>
            &nbsp;
            <span>{francia && francia.name}</span>
          </div>
          <div>Stadium Education City (Doha)</div>
          <div>30-11-2022 12:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 38</div>
          <div className="m1">
            <span>{australia && australia.name}</span>&nbsp;
            <span>
              <img
                src={australia && australia.flags}
                alt={australia && australia.name}
                onClick={prediccion}
                name={australia && australia.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={dinamarca && dinamarca.flags}
                alt={dinamarca && dinamarca.name}
                onClick={prediccion}
                name={dinamarca && dinamarca.name}
              />
            </span>
            &nbsp;
            <span>{dinamarca && dinamarca.name}</span>
          </div>
          <div>Stadium Al Janoub (Al Wakrah)</div>
          <div>30-11-2022 12:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 39</div>
          <div className="m1">
            <span>{polonia && polonia.name}</span>&nbsp;
            <span>
              <img
                src={polonia && polonia.flags}
                alt={polonia && polonia.name}
                onClick={prediccion}
                name={polonia && polonia.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={argentina && argentina.flags}
                alt={argentina && argentina.name}
                onClick={prediccion}
                name={argentina && argentina.name}
              />
            </span>
            &nbsp;
            <span>{argentina && argentina.name}</span>
          </div>
          <div>Stadium 974 (Doha)</div>
          <div>30-11-2022 16:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 40</div>
          <div className="m1">
            <span>{arabia && arabia.name}</span>&nbsp;
            <span>
              <img
                src={arabia && arabia.flags}
                alt={arabia && arabia.name}
                onClick={prediccion}
                name={arabia && arabia.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={mexico && mexico.flags}
                alt={mexico && mexico.name}
                onClick={prediccion}
                name={mexico && mexico.name}
              />
            </span>
            &nbsp;
            <span>{mexico && mexico.name}</span>
          </div>
          <div>Stadium Lusail</div>
          <div>30-11-2022 16:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 41</div>
          <div className="m1">
            <span>{croacia && croacia.name}</span>&nbsp;
            <span>
              <img
                src={croacia && croacia.flags}
                alt={croacia && croacia.name}
                onClick={prediccion}
                name={croacia && croacia.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={belgica && belgica.flags}
                alt={belgica && belgica.name}
                onClick={prediccion}
                name={belgica && belgica.name}
              />
            </span>
            &nbsp;
            <span>{belgica && belgica.name}</span>
          </div>
          <div>Stadium Ahmad Bin Ali (Al Rayyan)</div>
          <div>1-12-2022 12:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 42</div>
          <div className="m1">
            <span>{canada && canada.name}</span>&nbsp;
            <span>
              <img
                src={canada && canada.flags}
                alt={canada && canada.name}
                onClick={prediccion}
                name={canada && canada.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={marruecos && marruecos.flags}
                alt={marruecos && marruecos.name}
                onClick={prediccion}
                name={marruecos && marruecos.name}
              />
            </span>
            &nbsp;
            <span>{marruecos && marruecos.name}</span>
          </div>
          <div>Stadium Al Thumama (Doha)</div>
          <div>1-12-2022 12:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 43</div>
          <div className="m1">
            <span>{japon && japon.name}</span>&nbsp;
            <span>
              <img
                src={japon && japon.flags}
                alt={japon && japon.name}
                onClick={prediccion}
                name={japon && japon.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={españa && españa.flags}
                alt={españa && españa.name}
                onClick={prediccion}
                name={españa && españa.name}
              />
            </span>
            &nbsp;
            <span>{españa && españa.name}</span>
          </div>
          <div>International Stadium Al Khalifa (Doha)</div>
          <div>1-12-2022 16:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 44</div>
          <div className="m1">
            <span>{costarica && costarica.name}</span>&nbsp;
            <span>
              <img
                src={costarica && costarica.flags}
                alt={costarica && costarica.name}
                onClick={prediccion}
                name={costarica && costarica.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={alemania && alemania.flags}
                alt={alemania && alemania.name}
                onClick={prediccion}
                name={alemania && alemania.name}
              />
            </span>
            &nbsp;
            <span>{alemania && alemania.name}</span>
          </div>
          <div>Stadium Al Bayt (Jor)</div>
          <div>1-12-2022 16:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 45</div>
          <div className="m1">
            <span>{coreasur && coreasur.name}</span>&nbsp;
            <span>
              <img
                src={coreasur && coreasur.flags}
                alt={coreasur && coreasur.name}
                onClick={prediccion}
                name={coreasur && coreasur.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={portugal && portugal.flags}
                alt={portugal && portugal.name}
                onClick={prediccion}
                name={portugal && portugal.name}
              />
            </span>
            &nbsp;
            <span>{portugal && portugal.name}</span>
          </div>
          <div>Stadium Education City (Doha)</div>
          <div>2-12-2022 12:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 46</div>
          <div className="m1">
            <span>{ghana && ghana.name}</span>&nbsp;
            <span>
              <img
                src={ghana && ghana.flags}
                alt={ghana && ghana.name}
                onClick={prediccion}
                name={ghana && ghana.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={uruguay && uruguay.flags}
                alt={uruguay && uruguay.name}
                onClick={prediccion}
                name={uruguay && uruguay.name}
              />
            </span>
            &nbsp;
            <span>{uruguay && uruguay.name}</span>
          </div>
          <div>Stadium Al Janoub (Al Wakrah)</div>
          <div>2-12-2022 12:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 47</div>
          <div className="m1">
            <span>{camerun && camerun.name}</span>&nbsp;
            <span>
              <img
                src={camerun && camerun.flags}
                alt={camerun && camerun.name}
                onClick={prediccion}
                name={camerun && camerun.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={brasil && brasil.flags}
                alt={brasil && brasil.name}
                onClick={prediccion}
                name={brasil && brasil.name}
              />
            </span>
            &nbsp;
            <span>{brasil && brasil.name}</span>
          </div>
          <div>Stadium Lusail</div>
          <div>2-12-2022 16:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
      <article className="match1">
        <div className="box">
          <div>MATCH 48</div>
          <div className="m1">
            <span>{servia && servia.name}</span>&nbsp;
            <span>
              <img
                src={servia && servia.flags}
                alt={servia && servia.name}
                onClick={prediccion}
                name={servia && servia.name}
              />
            </span>
            &nbsp;
            <span>VS</span>&nbsp;
            <span>
              <img
                src={suiza && suiza.flags}
                alt={suiza && suiza.name}
                onClick={prediccion}
                name={suiza && suiza.name}
              />
            </span>
            &nbsp;
            <span>{suiza && suiza.name}</span>
          </div>
          <div>Stadium 974 (Doha)</div>
          <div>2-12-2022 16:00 Argentina time</div>
        </div>
        <div className="before"></div>
        <div className="after"></div>
      </article>
    </section>
  )
}

export default Prediccion
