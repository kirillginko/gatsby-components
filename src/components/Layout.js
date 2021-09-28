import React, { useState } from "react"
import "../styles/Global.css"
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Loader from "../components/Loader"
import Marquee from "./Marquee"

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
            {/* <Marquee>Hello World</Marquee> */}
          </div>
        </>
      )}
    </>
  )
}

export default Layout
