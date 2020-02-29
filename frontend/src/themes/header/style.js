import styled from "styled-components"

export const Logo = styled.img`
  width: 5%;
  margin: 1em;

  @media (min-width: 300px) {
    width: 9vw;
    margin: 0.5em;
  }

  @media (min-width: 600px) {
    width: 3vw;
    margin: 0.5em;
  }

  @media (min-width: 1500px) {
    width: 2vw;
    margin: 0.5em;
  }

  @media (min-width: 2000px) {
    max-width: 3vw;
    margin: 0.5em;
  }
`

export const Name = styled.div`
  @media (max-width: 388px) {
    display: none;
  }
`
