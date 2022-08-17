import axios from "axios"

const GET_LIST = "GET_LIST"
const GET_COUNTRY = "GET_COUNTRY"
const FILTER = "FILTER"
const ORDER = "ORDER"
const DETAILS = "DETAILS"
const COUNTER = "COUNTER"
const ORDER_PREDICCION = "ORDER_PREDICCION"

export let getCountries = () => async dispatch => {
  let paises = await axios.get("https://back-final1.herokuapp.com/countries")
  dispatch({ type: GET_LIST, payload: paises.data })
}

export let getCountry = name => async dispatch => {
  let pais = await axios.get(
    `https://back-final1.herokuapp.com/countries?name=${name}`
  )
  dispatch({ type: GET_COUNTRY, payload: pais.data })
}

export let filter = value => dispatch => {
  dispatch({ type: FILTER, payload: value })
}

export let order = value => dispatch => {
  dispatch({ type: ORDER, payload: value })
}

export let detalles = id => async dispatch => {
  let respuesta = await axios.get(
    `https://back-final1.herokuapp.com/countries/${id}`
  )
  dispatch({ type: DETAILS, payload: respuesta.data })
}

export let counterRequest = () => async dispatch => {
  let respuesta = await axios.get("https://back-final1.herokuapp.com/contador")
  dispatch({ type: COUNTER, payload: respuesta.data })
}

export let orderPrediccion = data => async dispatch => {
  dispatch({ type: ORDER_PREDICCION, payload: data })
}
