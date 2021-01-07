import styled from "styled-components"

export const MobileMenu = styled.nav`
  position: absolute;
  background-clip: padding-box;
  background-color: #191e24;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  word-break: break-word;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(120%)")};
`

export const MobileLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid #121212;
  div {
    padding: 1em 3.5em;
    border-bottom: 2px solid #121212;
  }
  a {
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    color: inherit;
    text-decoration: none;
  }
`
