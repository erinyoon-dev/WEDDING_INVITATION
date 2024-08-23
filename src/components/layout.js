import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery } from "gatsby"
import { Layout } from "antd";

// markup
const { Footer } = Layout;
import GroovePaper from "../assets/GroovePaper.png";

import Share from "./share";
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <div>
        <main>{children}</main>
      <Share />
      <Footer
        style={{
          background: "#D7CCC8",
          backgroundImage: `url(${GroovePaper})`,
          opacity: 0.6,
          textAlign: "center",
        }}
      >
        Copyright © 2024 Seryeong Yoon
      </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
