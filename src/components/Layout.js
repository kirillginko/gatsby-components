import React, { useState } from "react"
import "../styles/Global.css"
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Loader from "../components/Loader"
import About from "../components/About"

function Layout({ children, location }) {
  const [loading, setIsLoading] = useState(true)
  return (
    <>
      {loading ? (
        <div>
          <Loader setIsLoading={setIsLoading} />
        </div>
      ) : (
        <>
          <div className="container">
            <Nav />
            <Hero />
            {children}
            <About />
          </div>
        </>
      )}
    </>
  )
}

export default Layout
