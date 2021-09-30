import React from "react"
import "../styles/hero.css"

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero__title">
          <h1>Welcome to our</h1>
          <h1 className="hero__title2">World</h1>
        </div>
        <div className="hero__span">
          <span className="hero__span1">Neo/Retro</span>
          <span className="hero__span2">Neo/Retro</span>
          <span className="hero__span3">Neo/Retro</span>
        </div>
      </section>
    </>
  )
}

export default Hero
