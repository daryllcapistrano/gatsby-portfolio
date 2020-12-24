import styled from "styled-components"

export const StyledBurger = styled.button`
  position: absolute;
  top: 25%;
  left: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5em;
  height: 1.5em;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }

  ${"" /* hide on tablet size and above */}
  @media only screen and (min-width: 600px) {
    display: none;
  }

  span {
    width: 1.5em;
    height: 0.12rem;
    ${"" /* change color based on open or close */}
    background: #DCE0D9;
    opacity: 0.3;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : ".3")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
