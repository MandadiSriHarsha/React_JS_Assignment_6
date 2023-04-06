import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import Navbar from '../Navbar'

import OptionItem from '../OptionItem'

import {
  MainGameCard,
  ChoicesBgContainer,
  GameResultsView,
  ResultCard,
  UserResultCard,
  SystemResultCard,
  ResultHeading,
  ResultImage,
  ResultText,
  ButtonContainer,
  PlayAgainButton,
  GameBgContainer,
  PopUpContainer,
  PopUpContentCard,
  PopUpButtonContainer,
  PopUpButton,
  PopUpImageContainer,
  RulesImage,
  TriggerButton,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const resultStatusConstants = {
  won: 'YOU WON',
  lost: 'YOU LOSE',
  draw: 'IT IS DRAW',
}

class GameApp extends Component {
  state = {
    userScore: 0,
    systemScore: 0,
    isGameStarted: true,
    userChoice: '',
    systemChoice:
      choicesList[Math.floor(Math.random() * choicesList.length)].id,
    resultText: '',
  }

  calculateScore = (userId, systemChoice) => {
    let result = null
    console.log(userId)
    console.log(systemChoice)
    if (userId === systemChoice) {
      result = null
    }
    if (userId === 'SCISSORS' && systemChoice === 'PAPER') {
      result = true
    }
    if (userId === 'PAPER' && systemChoice === 'SCISSORS') {
      result = false
    }
    if (userId === 'ROCK' && systemChoice === 'PAPER') {
      result = false
    }
    if (userId === 'PAPER' && systemChoice === 'ROCK') {
      result = true
    }
    if (userId === 'ROCK' && systemChoice === 'SCISSORS') {
      result = true
    }
    if (userId === 'SCISSORS' && systemChoice === 'ROCK') {
      result = false
    }
    return result
  }

  setGameResult = id => {
    const userId = id
    const {systemChoice} = this.state
    const getScore = this.calculateScore(userId, systemChoice)
    if (getScore === true) {
      this.setState(prevState => ({
        userChoice: id,
        userScore: prevState.userScore + 1,
        systemScore: prevState.systemScore - 1,
        resultText: resultStatusConstants.won,
        isGameStarted: false,
      }))
    } else if (getScore === false) {
      this.setState(prevState => ({
        userChoice: id,
        userScore: prevState.userScore - 1,
        systemScore: prevState.systemScore + 1,
        resultText: resultStatusConstants.lost,
        isGameStarted: false,
      }))
    } else {
      this.setState(prevState => ({
        userChoice: id,
        userScore: prevState.userScore,
        systemScore: prevState.systemScore,
        resultText: resultStatusConstants.draw,
        isGameStarted: false,
      }))
    }
  }

  renderGamePlayView = () => (
    <MainGameCard>
      <ChoicesBgContainer>
        {choicesList.map(eachitem => (
          <OptionItem
            key={eachitem.id}
            data={eachitem}
            setGameResult={this.setGameResult}
          />
        ))}
      </ChoicesBgContainer>
    </MainGameCard>
  )

  restartGame = () => {
    const {userScore, systemScore} = this.state
    this.setState({
      userScore,
      systemScore,
      userChoice: '',
      systemChoice:
        choicesList[Math.floor(Math.random() * choicesList.length)].id,
      resultText: '',
      isGameStarted: true,
    })
  }

  renderGameResultView = () => {
    const {userChoice, systemChoice, resultText} = this.state
    const userSelectedImage = choicesList.filter(
      eachitem => eachitem.id === userChoice,
    )
    const systemSelectedImage = choicesList.filter(
      eachitem => eachitem.id === systemChoice,
    )
    return (
      <GameResultsView>
        <ResultCard>
          <UserResultCard>
            <ResultHeading>YOU</ResultHeading>
            <ResultImage
              src={userSelectedImage[0].imageUrl}
              alt="your choice"
            />
          </UserResultCard>
          <SystemResultCard>
            <ResultHeading>OPPONENT</ResultHeading>
            <ResultImage
              src={systemSelectedImage[0].imageUrl}
              alt="opponent choice"
            />
          </SystemResultCard>
        </ResultCard>
        <ResultText>{resultText}</ResultText>
        <ButtonContainer>
          <PlayAgainButton type="button" onClick={this.restartGame}>
            PLAY AGAIN
          </PlayAgainButton>
        </ButtonContainer>
      </GameResultsView>
    )
  }

  render() {
    const {userScore, isGameStarted} = this.state
    return (
      <GameBgContainer>
        <Navbar userScore={userScore} />
        {isGameStarted
          ? this.renderGamePlayView()
          : this.renderGameResultView()}
        <PopUpContainer>
          <Popup modal trigger={<TriggerButton>Rules</TriggerButton>}>
            {close => (
              <PopUpContentCard>
                <PopUpButtonContainer>
                  <PopUpButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </PopUpButton>
                </PopUpButtonContainer>
                <PopUpImageContainer>
                  <RulesImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </PopUpImageContainer>
              </PopUpContentCard>
            )}
          </Popup>
        </PopUpContainer>
      </GameBgContainer>
    )
  }
}

export default GameApp
