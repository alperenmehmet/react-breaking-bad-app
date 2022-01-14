import { useDispatch, useSelector } from 'react-redux'
import { loadCharacters } from '../store/characters'
import { useEffect } from 'react'
import CharacterCard from './CharacterCard'

const Characters = () => {
  const dispatch = useDispatch()
  const characters = useSelector((state) => state.list)

  useEffect(() => {
    dispatch(loadCharacters())
  }, [dispatch])

  console.log(characters)
  return (
    <div className="container">
      {characters.map((character) => (
        <CharacterCard key={character.char_id} {...character} />
      ))}
    </div>
  )
}

export default Characters
