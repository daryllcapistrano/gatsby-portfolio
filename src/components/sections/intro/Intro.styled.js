import styled from "styled-components"

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${"" /* height: calc(100vh - 90px); */}
  height: 95vh;
  word-wrap: break-word;
`

export const TextContainer = styled.div`
  padding-bottom: 10em;
  width: 80%;
`

export const Name = styled.h1`
  font-size: 3em;
  margin-bottom: 0;
`
export const Title = styled.h2`
  font-weight: 300;
  letter-spacing: 2px;
  margin-bottom: 0;
`

export const Description = styled.p`
  font-weight: 200;
  margin-top: 0.25em;
  margin-bottom: 0;
`

export const DownChevron = styled.div`
  position: absolute;
  top: 66vh;
`
