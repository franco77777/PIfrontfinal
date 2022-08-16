const initialState = {
  countries: [],
  details: [],
  filtered: [],
  counter: [],
  prediccion: [],
}

export default function countriesReducer(state = initialState, action) {
  switch (action.type) {
    case "ORDER_PREDICCION":
      return {
        ...state,
        prediccion: action.payload,
      }
    case "COUNTER":
      return {
        ...state,
        counter: action.payload,
      }
    case "GET_LIST":
      return {
        ...state,
        countries: action.payload,
        filtered: action.payload,
        countryRest: action.payload,
      }

    case "GET_COUNTRY":
      return {
        ...state,
        filtered: action.payload,
      }
    case "DETAILS":
      return {
        ...state,
        details: action.payload,
      }

    case "FILTER": {
      if (action.payload === "Copas") {
        return {
          ...state,
          filtered: state.countries.filter(e => e.copas.length),
        }
      }
      if (action.payload === "Continentes" || action.payload === "filter") {
        return { ...state, filtered: state.countries }
      }
      if (
        action.payload === "Americas" ||
        action.payload === "Europe" ||
        action.payload === "Africa" ||
        action.payload === "Asia" ||
        action.payload === "Oceania" ||
        action.payload === "Antarctic"
      ) {
        return {
          ...state,
          filtered: state.countries.filter(e => e.region === action.payload),
        }
      }
      return {
        ...state,
        filtered: state.countries.filter(
          e => e.activities.filter(e => e.name === action.payload).length
        ),
      }
    }

    case "ORDER": {
      if (action.payload === "order") {
        return {
          ...state,
          filtered: state.countries,
        }
      }
      if (action.payload === "ascendente") {
        return {
          ...state,
          filtered: [...state.filtered].sort((a, b) => {
            if (a.name > b.name) return 1
            if (a.name < b.name) return -1
            return 0
          }),
        }
      }

      if (action.payload === "descendente") {
        return {
          ...state,
          filtered: [...state.filtered].sort((a, b) => {
            if (a.name > b.name) return -1
            if (a.name < b.name) return 1
            return 0
          }),
        }
      }
      if (action.payload === "pobmayor") {
        return {
          ...state,
          filtered: [...state.filtered].sort(
            (a, b) => a.population - b.population
          ),
        }
      }
      if (action.payload === "pobmenor") {
        return {
          ...state,
          filtered: [...state.filtered].sort(
            (a, b) => b.population - a.population
          ),
        }
      }
    }
    case "PAGE":
      return {
        ...state,
        page: action.payload,
      }

    default:
      return state
  }
}
