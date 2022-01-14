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

  return (
    <div className="mx-10 my-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 flex justify-center items-center">
      {characters.map((character) => (
        <CharacterCard key={character.char_id} {...character} />
      ))}
    </div>
  )
}

export default Characters
