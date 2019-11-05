import styled from "styled-components"

export const ContentWrapper = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: ${props => props.theme.padding};
`

export const TransformRight = styled.div`
  transform: scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg)
    rotate(2deg);
`

export const TransformLeft = styled.div`
  transform: scale(1) perspective(1040px) rotateY(11deg) rotateX(-2deg)
    rotate(-2deg);
`

export const HeadingWrapper = styled.div`
  margin: 4rem 0;
  padding-left: 2rem;
`
