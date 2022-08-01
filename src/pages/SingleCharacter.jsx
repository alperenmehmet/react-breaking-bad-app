import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { useEffect } from 'react'

const SingleCharacter = () => {
  const { char_id } = useParams()
  const { getSingleCharacter, singleCharacter } = useGlobalContext()

  console.log(singleCharacter)

  useEffect(() => {
    getSingleCharacter(char_id)
  }, [char_id])

  return <div>{singleCharacter[0]?.name}</div>
}

export default SingleCharacter
