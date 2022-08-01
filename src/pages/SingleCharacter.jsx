import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { useEffect } from 'react'

const SingleCharacter = () => {
  const { char_id } = useParams()
  const { singleCharacter, getSingleCharacter } = useGlobalContext()

  console.log('single', singleCharacter)

  useEffect(() => {
    getSingleCharacter()
  }, [char_id])
  return <div>single character</div>
}

export default SingleCharacter
