import styled from 'styled-components'

export const GameBgContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MainGameCard = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: auto;
  padding: 40px 0px 20px 0px;
`

export const ChoicesBgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px 0px 0px 0px;
`

export const GameResultsView = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ResultCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const UserResultCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  max-width: 400px;
`

export const SystemResultCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  max-width: 400px;
`

export const ResultHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  text-align: center;
  margin: 0px;
  padding: 0px 0px 15px 0px;
  font-size: 20px;
  width: 100%;
`

export const ResultImage = styled.img`
  width: 100%;
  max-width: 180px;
  margin: 0px;
`

export const ButtonContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0px;
  padding: 0px 10px 20px 10px;
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 16px;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 8px;
  padding: 12px 18px 12px 18px;
  width: 100%;
  max-width: 200px;
`

export const ResultText = styled.p`
  width: 100%;
  text-align: center;
  margin: 0px;
  padding: 15px 0px 20px 0px;
  color: #ffffff;
  font-weight: bold;
  font-size: 30px;
  font-family: 'Roboto';
`

export const PopUpContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0px;
  padding: 30px 20px 30px 0px;
`

export const TriggerButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  border: none;
  padding: 12px 15px 12px 15px;
  cursor: pointer;
  outline: none;
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  width: 100%;
  max-width: 100px;
`

export const PopUpContentCard = styled.div`
  height: 80%;
  width: 90%;
  max-width: 700px;
  margin: auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 20px 20px;
  border-radius: 6px;
`

export const PopUpButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const PopUpButton = styled.button`
  border: none;
  padding: 10px 12px 10px 12px;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
  outline: none;
`

export const PopUpImageContainer = styled.div`
  width: 100%;
`

export const RulesImage = styled.img`
  border-radius: 6px;
  width: 100%;
  height: 100%;
`
