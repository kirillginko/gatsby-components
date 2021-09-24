import React from "react"
import "../styles/Global.css"

export default function Home() {
  return (
    <>
      <section className="nav">
        <div>
          <h1>Modern World</h1>
        </div>
        <div>
          <h1>Future World</h1>
        </div>
      </section>
      <section className="hero">
        <div className="hero__title">
          <h1>
            Welcome to our <span>Neo/Retro</span> Future
          </h1>
        </div>
      </section>
    </>
  )
}
