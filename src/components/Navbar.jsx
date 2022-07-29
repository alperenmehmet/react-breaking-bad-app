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
  margin: 2rem;
  text-transform: uppercase;
  transition: var(--transition);
  &:hover {
    color: red;
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
        <LogoImage src={logo} alt="logo" />
      </Logo>
      <Links>
        <StyledLink to="/characters">Characters</StyledLink>
        <StyledLink to="/quotes">Quotes</StyledLink>
      </Links>
    </Nav>
  )
}
