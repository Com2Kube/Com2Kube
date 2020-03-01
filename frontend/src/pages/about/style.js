import styled from "styled-components"

export const AvatarResponsive = styled.img`
  border-radius: 50%;
  height: 200px;
  width: 185px;

  @media (max-width: 400px) {
    height: 95px;
    width: 105px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  @media (max-width: 625px) {
    height: 185px;
    width: 155px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`

export const AvatarCenter = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`

export const AvatarItem = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 325px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 625px) {
    display: flex;
    flex-direction: column;
  }
`
