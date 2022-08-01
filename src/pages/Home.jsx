import meta from '../assets/meta.jpg'
import styled from 'styled-components'

const StyledLink = styled.a`
  text-decoration: none;
  color: blue;
`

const Home = () => {
  return (
    <div>
      <img src={meta} alt="meta" />
      <StyledLink
        target="_blank"
        href="https://www.youtube.com/watch?v=1JLUn2DFW4w"
      >
        Official Trailer
      </StyledLink>
    </div>
  )
}

export default Home
