import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { useEffect } from 'react'
import styled from 'styled-components'

const SingleCharacterContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`

const SingleCharacterImg = styled.img`
  max-width: 25rem;
  max-height: 30rem;
`

const ImageContainer = styled.div``

const SingleCharacterInfo = styled.div`
  margin-top: 2rem;
`

const SingleCharacterInfoDetail = styled.p`
  span {
    font-weight: 500;
  }
`

const SingleCharacter = () => {
  const { char_id } = useParams()
  const { getSingleCharacter, singleCharacter } = useGlobalContext()

  console.log(singleCharacter)

  useEffect(() => {
    getSingleCharacter(char_id)
  }, [char_id])

  return (
    <SingleCharacterContainer>
      <ImageContainer>
        <SingleCharacterImg src={singleCharacter[0]?.img} alt="img" />
      </ImageContainer>
      <SingleCharacterInfo>
        <SingleCharacterInfoDetail>
          Name: <span>{singleCharacter[0]?.name}</span>
        </SingleCharacterInfoDetail>
        <SingleCharacterInfoDetail>
          Nickname: <span>{singleCharacter[0]?.nickname}</span>
        </SingleCharacterInfoDetail>
        <SingleCharacterInfoDetail>
          Portrayed: <span>{singleCharacter[0]?.portrayed}</span>
        </SingleCharacterInfoDetail>
        <SingleCharacterInfoDetail>
          Birthday: <span>{singleCharacter[0]?.birthday}</span>
        </SingleCharacterInfoDetail>
        <SingleCharacterInfoDetail>
          Occupation:
          <span>
            {singleCharacter[0]?.occupation.map((item) => {
              return <span> {item}</span>
            })}
          </span>
        </SingleCharacterInfoDetail>
      </SingleCharacterInfo>
    </SingleCharacterContainer>
  )
}

export default SingleCharacter
