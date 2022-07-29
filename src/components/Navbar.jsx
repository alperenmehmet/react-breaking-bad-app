import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const Nav = styled.div`
  background: blue;
  display: flex;
`

const StyledLink = styled(NavLink)`
  color: yellow;
`

const Logo = styled.div`
  width: 15px;
`

const Links = styled.div``

export const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <Links>
        <StyledLink to="/characters">Characters</StyledLink>
        <StyledLink to="/quotes">Quotes</StyledLink>
      </Links>
    </Nav>
  )
}
