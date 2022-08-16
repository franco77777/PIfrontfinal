import { useDispatch } from "react-redux"
import { order } from "../actions"
import "./order.css"

let Order = ({ setMultiplicador }) => {
  const dispatch = useDispatch()
  return (
    <div className="ordenados" id="order">
      <select
        name="sad"
        id="3 "
        onChange={e => {
          setMultiplicador(1)
          dispatch(order(e.target.value))
        }}
      >
        <option value="order">Order</option>
        <optgroup label="By Name" />
        <option value="ascendente">A to Z</option>
        <option value="descendente">Z to A</option>
        <optgroup label="By Population" />
        <option value="pobmayor">Smallest to Largest</option>
        <option value="pobmenor">Largest to Smallest</option>
      </select>
    </div>
  )
}

export default Order
