import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Nav, NavItem } from "shards-react"

const StyledLink = styled(Link)`
  color: ${props => props.theme.white};
  text-decoration: none;
  transition: color ease 0.3s;

  &:hover {
    text-decoration: none;
    color: ${props => props.theme.red};
  }
`

const MainNavigation = () => {
  return (
    <Nav navbar className="ml-auto">
      {/* <StyledLink to="/news">News</StyledLink> */}
    </Nav>
  )
}

export default MainNavigation
