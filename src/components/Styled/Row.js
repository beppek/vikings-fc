import styled from "styled-components"
import { Row } from "shards-react"

const StyledRow = styled(Row)`
  ${props => !props.full && "padding-left: 4rem;"}
  ${props => !props.full && "padding-right: 4rem;"}
  ${props => props.spaceBetween && "margin-bottom: 4rem;"}
`

export default StyledRow
