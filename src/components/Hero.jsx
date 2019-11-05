import React from "react"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import theme from "../config/theme"

const TextWrapper = styled.div`
  color: ${props => props.theme.white};
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5rem;
  h2 {
    margin: 0;
  }
`

const BackgroundFilter = styled.div`
  background-color: ${props =>
    props.light ? props.theme.white : props.theme.black};
  opacity: ${props => (props.opacity ? props.opacity : 0.8)};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: ${props => `calc(100vh - ${props.theme.headerHeight})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Hero = ({ title, imageSharp, image }) => {
  return (
    <StyledBackgroundImage
      Tag="section"
      alt={image.alt}
      fluid={imageSharp.fluid}
      backgroundColor={theme.black}
    >
      <BackgroundFilter />
      <TextWrapper>{RichText.render(title)}</TextWrapper>
    </StyledBackgroundImage>
  )
}

export default Hero
