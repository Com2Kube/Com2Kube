import styled from "styled-components"

const Logo = styled.img`
  width: 5%;
  min-width: 10%;
  margin: 1em;

  @media (min-width: 300px) {
    width: 9vw;
    margin: 0.5em;
  }

  @media (min-width: 600px) {
    width: 4vw;
    margin: 0.5em;
  }
`
export default Logo
