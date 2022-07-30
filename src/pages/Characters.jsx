import { useGlobalContext } from '../context'
import Character from '../components/Character'
import styled from 'styled-components'

const CharactersContainer = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin-bottom: 4rem;
  align-content: space-between;
`

const Characters = () => {
  const { characters } = useGlobalContext()
  return (
    <CharactersContainer>
      {characters.map((item) => {
        return <Character key={item.char_id} {...item} />
      })}
    </CharactersContainer>
  )
}

export default Characters
