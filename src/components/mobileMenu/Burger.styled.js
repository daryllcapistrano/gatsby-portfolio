import styled from "styled-components"

export const BurgerButton = styled.button`
  position: absolute;
  z-index: 10;
  display: flex;
  background: transparent;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  top: 25%;
  left: 1em;
  width: 1.5em;
  height: 1.5em;
  border: none;
  padding: 0;
  &:focus {
    outline: none;
  }

  @media only screen and (min-width: 600px) {
    display: none;
  }

  span {
    width: 1.5em;
    height: 0.12em;
    background: #dce0d9;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
