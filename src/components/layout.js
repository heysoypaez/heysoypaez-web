import React from "react"
import { Link } from "gatsby"
import Menu from "./menu.js"
import { rhythm } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          marginBottom: rhythm(1.5),
          marginTop: 0,
          textAlign: "center",
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header title="Ir al inicio">{header}</header>
      <Menu items={["Inicio", "Sobre mi", "Trabajemos juntos", "Contacto"]} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Hecho con
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> por
        {` `}
        <a href="https://www.linkedin.com/in/heysoypaez/">@heysoypaez</a>
      </footer>
    </div>
  )
}

export default Layout
