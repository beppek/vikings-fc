import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Navbar, NavbarToggler, NavbarBrand, Collapse } from "shards-react"

import MainNavigation from "./MainNavigation"

const LOGO_IMAGE_QUERY = graphql`
  query LOGO_IMAGE_QUERY {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 50) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const StyledNavbar = styled(Navbar)`
  background: ${props => props.theme.black};
`

const StyledLink = styled(Link)`
  color: ${props => props.theme.white};
  text-decoration: none;
  display: flex;
  &:hover {
    text-decoration: none;
    color: ${props => props.theme.white};
  }
`

const LogoWrapper = styled.div`
  width: 5rem;
  margin: 0 1rem 0 0;
  img {
    margin: 0;
    vertical-align: middle;
  }
`

const TitleWrapper = styled.span`
  vertical-align: middle;
  line-height: 5rem;
  display: inline;
`

const StyledNavbarBrand = styled(NavbarBrand)`
  vertical-align: middle;
  font-size: 2rem;
`

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(LOGO_IMAGE_QUERY)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const toggleMenuOpen = () => {
    setMenuOpen(!isMenuOpen)
  }
  console.log("data", data)
  return (
    <StyledNavbar type="dark" expand="md">
      <StyledNavbarBrand tag="div">
        <StyledLink to="/">
          <LogoWrapper>
            <Img
              alt="Vikings Floorball Club Logo"
              fluid={data.file.childImageSharp.fluid}
            />
          </LogoWrapper>
          <TitleWrapper>{siteTitle}</TitleWrapper>
        </StyledLink>
      </StyledNavbarBrand>
      <NavbarToggler onClick={toggleMenuOpen} />
      <Collapse open={isMenuOpen} navbar>
        <MainNavigation />
      </Collapse>
    </StyledNavbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header
