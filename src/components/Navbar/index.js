import {
  HomePageNavbar,
  NavbarContentCard,
  NavbarHeadingCard,
  NavbarHeadingCardText,
  NavbarScoreCard,
  NavbarScoreCardHeading,
  NavbarScoreCardScore,
} from './styledComponents'

const Navbar = props => {
  const {userScore} = props
  return (
    <HomePageNavbar>
      <NavbarContentCard>
        <NavbarHeadingCard>
          <NavbarHeadingCardText>
            Rock
            <br />
            Paper
            <br />
            Scissors
          </NavbarHeadingCardText>
        </NavbarHeadingCard>
        <NavbarScoreCard>
          <NavbarScoreCardHeading>Score</NavbarScoreCardHeading>
          <NavbarScoreCardScore>{userScore}</NavbarScoreCardScore>
        </NavbarScoreCard>
      </NavbarContentCard>
    </HomePageNavbar>
  )
}

export default Navbar
