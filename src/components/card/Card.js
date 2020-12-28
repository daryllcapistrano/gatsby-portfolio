import React from "react"
import PropTypes from "prop-types"
import {
  Container,
  ContentWrapper,
  Title,
  Description,
  Action,
  TitleWrapper,
} from "./Card.styled"

const Card = props => (
  <Container>
    <TitleWrapper>
      <Title>{props.title}</Title>
    </TitleWrapper>
    <ContentWrapper>
      <div
        style={{
          marginBottom: `.8em`,
          opacity: `.2`,
          fontSize: `80%`,
          fontFamily: `monospace`,
        }}
      >
        javascript / nodeJS / gatsbyJS / mongoDB
      </div>
      <Description>{props.description}</Description>

      <Action href={props.githubLink} rel="noreferer noopener" target="_blank">
        View On Github <span>&#8594;</span>
      </Action>
      {/* <Button href="/404" color="inherit" variant="outlined">
          view project
        </Button> */}
    </ContentWrapper>
  </Container>
)

export default Card

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // stack: PropTypes.array.isRequired,
  githubLink: PropTypes.string.isRequired,
}
