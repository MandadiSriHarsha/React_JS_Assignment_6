import styled from 'styled-components'

export const HomePageNavbar = styled.nav`
  width: 95%;
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 40px 0px 0px 0px;
`

export const NavbarContentCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #ffffff;
  width: 90%;
  max-width: 1000px;
  font-family: 'Bree Serif';
  border-radius: 8px;
  padding: 20px 23px 5px 23px;
`

export const NavbarHeadingCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100px;
  max-width: 200px;
  color: #ffffff;
  font-weight: 500;
  margin: 0px 10px 0px 0px;
`

export const NavbarHeadingCardText = styled.h1`
  margin: 0px;
  padding: 0px 0px 15px 0px;
  font-size: 16px;
  text-align: left;
  font-weight: 400;

  @media screen and (min-width: 576px) {
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 992px) {
    font-size: 25px;
  }
`

export const NavbarScoreCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  margin: 0px 0px 15px 0px;
  width: 150px;
  max-width: 180px;
`

export const NavbarScoreCardHeading = styled.p`
  font-size: 16px;
  text-align: center;
  color: #223a5f;
  font-weight: bold;
  margin: 0px;
  padding: 20px 10px 10px 10px;

  @media screen and (min-width: 576px) {
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 992px) {
    font-size: 25px;
  }
`

export const NavbarScoreCardScore = styled.p`
  color: #223a5f;
  font-size: 30px;
  font-family: 'Roboto';
  text-align: center;
  font-weight: bold;
  margin: 0px;
  padding: 0px 0px 10px 0px;

  @media screen and (min-width: 576px) {
    color: #223a5f;
    font-size: 45px;
    font-family: 'Roboto';
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    color: #223a5f;
    font-size: 65px;
    font-family: 'Roboto';
    text-align: center;
  }

  @media screen and (min-width: 992px) {
    color: #223a5f;
    font-size: 75px;
    font-family: 'Roboto';
    text-align: center;
  }
`
