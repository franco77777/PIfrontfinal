import React from "react"
import "./loader.css"
import logoinicio from "./../mundial/logoinicio.jpg"

const Loader = () => {
  return (
    <article className="bodyloader">
      <section className="loadericon">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </section>
      <img src={logoinicio} alt="s" />
    </article>
  )
}

export default Loader
