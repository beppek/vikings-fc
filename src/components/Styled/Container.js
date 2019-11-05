import styled from "styled-components"
import { Container } from "shards-react"

const StyledContainer = styled(Container)`
  ${props => props.fluid && "padding-left: 0;"}
  ${props => props.fluid && "padding-right: 0;"}
`

export default StyledContainer
