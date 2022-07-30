import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  transition: var(--transition);
  font-weight: 500;
  font-size: 1.2rem;
  &:hover {
    color: gray;
  }

  @media screen and (min-width: 330px) {
    margin: 0.25rem;
  }

  @media screen and (min-width: 576px) {
    margin: 2rem;
  }
`

const Logo = styled.div`
  width: 15px;
`

const LogoImage = styled.img`
  width: 75px;
`

const Links = styled.div``

export const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <StyledLink to="/">
          <LogoImage src={logo} alt="logo" />
        </StyledLink>
      </Logo>
      <Links>
        <StyledLink to="/characters">Characters</StyledLink>
        <StyledLink to="/quotes">Quotes</StyledLink>
      </Links>
    </Nav>
  )
}
