import { ReactComponent as Izq } from "../mundial/left.svg"
import { ReactComponent as Dere } from "../mundial/right.svg"
import { useEffect, useState } from "react"
import styled from "styled-components"
import "./slideshow.css"
import { useSelector } from "react-redux"

let SlideShow = () => {
  const images = [
    "a.png",
    "b.png",
    "c.png",
    "d.png",
    "e.png",
    "f.png",
    "g.png",
    "h.png",
  ]
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(images[0])
  const [loaded, setLoaded] = useState(false)
  const counter = useSelector(state => state.counter)

  useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, images)
    }, 5000)

    return () => clearInterval(interval)
  })

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false)
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1
      setSelectedImage(images[nextIndex])
      setSelectedIndex(nextIndex)
    }, 500)
  }

  const previus = () => {
    selectNewImage(selectedIndex, images, false)
    /*  const condition = selectedIndex > 0;
    const nextIndex = condition ? selectedIndex - 1 : images.length - 1;
    setSelectedImage(images[nextIndex])
    setSelectedIndex(nextIndex) */
  }

  const next = () => {
    selectNewImage(selectedIndex, images)
    /* const condition = selectedIndex < images.length
    const nextIndex = condition ? selectedIndex + 1 : 0
    setSelectedImage(images[nextIndex])
    setSelectedIndex(nextIndex) */
  }

  return (
    <div className="carrusel">
      <Carrusel
        src={require(`../mundial/${selectedImage}`).default}
        alt="carrusel"
        className={loaded ? "loaded" : ""}
        onLoad={() => setLoaded(true)}
      />
      <Boton onClick={previus}>
        <Izq />
      </Boton>
      <Boton onClick={next} derecho>
        <Dere />
      </Boton>
    </div>
  )
}

const Carrusel = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
  opacity: 0;

  transition: 3s;
  &.loaded {
    opacity: 1;
  }
`
const Boton = styled.button`
  width: 50px;
  height: 50px;
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  text-align: center;
  transition: 0.3s ease all;

  bottom: 50%;
  position: absolute;
  path {
    filter: ${props =>
      props.derecho
        ? "drop-shadow(-2px 0px 0px #fff)"
        : "drop-shadow(2px 0px 0px #fff)"};
  }

  ${props => (props.derecho ? "right:0" : "left:0")}
`

export default SlideShow
